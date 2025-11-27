// 遊戲狀態
const gameState = {
    currentChapter: 0,
    currentScene: 0,
    stats: {
        title: '秀常在',
        lovePoints: 0,
        beauty: 90,
        intelligence: 85,
        stamina: 50
    },
    choices: [],
    flags: {}
};

// 遊戲數據 - 章節和結局從外部文件載入
// 章節數據定義在 chapters/ 目錄下的各個文件中
const gameData = {
    chapters: [
        chapter0,  // 序章：選秀風雲
        chapter1,  // 第一章：初入宮闈與「椒房獨寵」
        chapter2,  // 第二章：後宮風波 - 綠茶的陷阱
        chapter3,  // 第三章：冷宮（？）與真心
        chapter4,  // 第四章：封后大典前夕
        chapter5   // 第五章：碎玉軒風聲 - 小常在也要上班
    ],
    endings: endings  // 結局數據定義在 chapters/endings.js
};

// 初始化遊戲
function initGame() {
    // 檢查是否有任何存檔
    const hasAnySave = hasSaveData();
    const continueBtn = document.getElementById('continue-btn');
    if (hasAnySave) {
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }
}

// 檢查是否有存檔數據
function hasSaveData() {
    // 檢查自動存檔
    if (localStorage.getItem('autoSave')) return true;
    // 檢查手動存檔槽位
    for (let i = 1; i <= 3; i++) {
        if (localStorage.getItem(`save_slot_${i}`)) return true;
    }
    return false;
}

// 開始新遊戲
function startNewGame() {
    // 如果有自動存檔，詢問是否覆蓋
    if (localStorage.getItem('autoSave')) {
        if (!confirm('開始新遊戲將清除自動存檔，確定要繼續嗎？')) {
            return;
        }
        localStorage.removeItem('autoSave');
    }

    gameState.currentChapter = 0;
    gameState.currentScene = 0;
    gameState.stats = {
        title: '秀常在',
        lovePoints: 0,
        beauty: 90,
        intelligence: 85,
        stamina: 50
    };
    gameState.choices = [];
    gameState.flags = {};

    showScreen('game-screen');
    updateStats();
    updateChapter();
    showScene();

    // 立即自動存檔
    autoSave();
}

// 繼續遊戲（從最近的存檔）
function continueGame() {
    // 優先使用自動存檔
    let savedGame = localStorage.getItem('autoSave');
    let source = '自動存檔';

    // 如果沒有自動存檔，找最新的手動存檔
    if (!savedGame) {
        let latestSlot = null;
        let latestTime = 0;

        for (let i = 1; i <= 3; i++) {
            const slotData = localStorage.getItem(`save_slot_${i}`);
            if (slotData) {
                const data = JSON.parse(slotData);
                if (data.timestamp > latestTime) {
                    latestTime = data.timestamp;
                    latestSlot = i;
                    savedGame = slotData;
                }
            }
        }

        if (latestSlot) {
            source = `存檔槽位 ${latestSlot}`;
        }
    }

    if (savedGame) {
        const saved = JSON.parse(savedGame);
        Object.assign(gameState, saved.state || saved);
        showScreen('game-screen');
        updateStats();
        updateChapter();
        showScene();
        console.log(`從${source}讀取遊戲`);
    } else {
        alert('沒有找到存檔！');
    }
}

// 自動存檔
function autoSave() {
    const saveData = {
        state: JSON.parse(JSON.stringify(gameState)),
        timestamp: Date.now(),
        chapterName: gameData.chapters[gameState.currentChapter].name,
        stats: {
            title: gameState.stats.title,
            lovePoints: gameState.stats.lovePoints
        }
    };
    localStorage.setItem('autoSave', JSON.stringify(saveData));
    console.log('自動存檔完成');
}

// 顯示存檔/讀檔界面
function showSaveLoadMenu(mode) {
    const menuHtml = `
        <div class="save-load-overlay" id="save-load-overlay">
            <div class="save-load-panel">
                <h2 class="save-load-title">${mode === 'save' ? '💾 存檔' : '📂 讀檔'}</h2>
                <div class="save-slots">
                    ${generateSaveSlots(mode)}
                </div>
                <button class="menu-btn" onclick="closeSaveLoadMenu()" style="margin-top: 1rem;">
                    <span class="btn-icon">↩️</span>
                    <span class="btn-text">返回</span>
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', menuHtml);
    toggleGameMenu(); // 關閉遊戲菜單
}

// 生成存檔槽位HTML
function generateSaveSlots(mode) {
    let html = '';

    // 自動存檔槽位（只能讀取，不能手動保存）
    const autoSave = localStorage.getItem('autoSave');
    if (autoSave && mode === 'load') {
        const data = JSON.parse(autoSave);
        const date = new Date(data.timestamp);
        html += `
            <div class="save-slot ${data ? 'has-data' : 'empty'}">
                <div class="slot-header">
                    <span class="slot-label">🔄 自動存檔</span>
                </div>
                ${data ? `
                    <div class="slot-info">
                        <div class="slot-chapter">${data.chapterName}</div>
                        <div class="slot-stats">
                            <span class="slot-stat">👑 ${data.stats.title}</span>
                            <span class="slot-stat">💕 ${data.stats.lovePoints}</span>
                        </div>
                        <div class="slot-time">${formatDate(date)}</div>
                    </div>
                    <button class="slot-btn load-btn" onclick="loadFromSlot('auto')">讀取</button>
                ` : ''}
            </div>
        `;
    }

    // 手動存檔槽位
    for (let i = 1; i <= 3; i++) {
        const slotData = localStorage.getItem(`save_slot_${i}`);
        const data = slotData ? JSON.parse(slotData) : null;

        html += `
            <div class="save-slot ${data ? 'has-data' : 'empty'}">
                <div class="slot-header">
                    <span class="slot-label">槽位 ${i}</span>
                    ${data && mode === 'save' ? `<button class="delete-btn" onclick="deleteSaveSlot(${i})">🗑️</button>` : ''}
                </div>
                ${data ? `
                    <div class="slot-info">
                        <div class="slot-chapter">${data.chapterName}</div>
                        <div class="slot-stats">
                            <span class="slot-stat">👑 ${data.stats.title}</span>
                            <span class="slot-stat">💕 ${data.stats.lovePoints}</span>
                        </div>
                        <div class="slot-time">${formatDate(new Date(data.timestamp))}</div>
                    </div>
                    <button class="slot-btn ${mode}-btn" onclick="${mode}ToSlot(${i})">
                        ${mode === 'save' ? '覆蓋存檔' : '讀取'}
                    </button>
                ` : `
                    ${mode === 'save' ? `
                        <div class="slot-empty-text">空槽位</div>
                        <button class="slot-btn save-btn" onclick="saveToSlot(${i})">存檔到此</button>
                    ` : '<div class="slot-empty-text">無存檔</div>'}
                `}
            </div>
        `;
    }

    return html;
}

// 格式化日期
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

// 存檔到指定槽位
function saveToSlot(slotNumber) {
    const saveData = {
        state: JSON.parse(JSON.stringify(gameState)),
        timestamp: Date.now(),
        chapterName: gameData.chapters[gameState.currentChapter].name,
        stats: {
            title: gameState.stats.title,
            lovePoints: gameState.stats.lovePoints
        }
    };

    localStorage.setItem(`save_slot_${slotNumber}`, JSON.stringify(saveData));
    closeSaveLoadMenu();

    // 顯示成功提示
    showNotification(`✅ 已存檔到槽位 ${slotNumber}`);
}

// 從指定槽位讀檔
function loadFromSlot(slotNumber) {
    let savedGame;

    if (slotNumber === 'auto') {
        savedGame = localStorage.getItem('autoSave');
    } else {
        savedGame = localStorage.getItem(`save_slot_${slotNumber}`);
    }

    if (savedGame) {
        const saved = JSON.parse(savedGame);
        Object.assign(gameState, saved.state);
        updateStats();
        updateChapter();
        showScene();
        closeSaveLoadMenu();

        showNotification(`✅ 已從${slotNumber === 'auto' ? '自動存檔' : `槽位 ${slotNumber}`}讀取`);
    } else {
        alert('讀取失敗！');
    }
}

// 刪除存檔槽位
function deleteSaveSlot(slotNumber) {
    if (confirm(`確定要刪除槽位 ${slotNumber} 的存檔嗎？`)) {
        localStorage.removeItem(`save_slot_${slotNumber}`);
        //重新顯示存檔界面
        closeSaveLoadMenu();
        showSaveLoadMenu('save');
        showNotification(`🗑️ 已刪除槽位 ${slotNumber}`);
    }
}

// 關閉存檔/讀檔界面
function closeSaveLoadMenu() {
    const overlay = document.getElementById('save-load-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// 顯示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 舊版存檔/讀檔函數（保留 compatibility）
function saveGame() {
    showSaveLoadMenu('save');
}

function loadGame() {
    showSaveLoadMenu('load');
}

// 切換畫面
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 更新屬性顯示
function updateStats() {
    document.getElementById('title').textContent = gameState.stats.title;
    document.getElementById('love-value').textContent = gameState.stats.lovePoints;
    document.getElementById('love-bar').style.width = Math.min(gameState.stats.lovePoints, 100) + '%';
    document.getElementById('beauty').textContent = gameState.stats.beauty;
    document.getElementById('intelligence').textContent = gameState.stats.intelligence;
    document.getElementById('stamina').textContent = gameState.stats.stamina;
}

// 更新章節顯示
function updateChapter() {
    const chapter = gameData.chapters[gameState.currentChapter];
    document.getElementById('chapter-indicator').textContent = chapter.name;
}

// 顯示場景
function showScene() {
    const chapter = gameData.chapters[gameState.currentChapter];
    const scene = chapter.scenes[gameState.currentScene];

    const dialogueText = document.getElementById('dialogue-text');
    const narrationText = document.getElementById('narration-text');
    const speakerName = document.getElementById('speaker-name');
    const choicesContainer = document.getElementById('choices-container');
    const continueBtn = document.getElementById('continue-btn-game');

    // 清空顯示
    dialogueText.textContent = '';
    narrationText.textContent = '';
    speakerName.textContent = '';
    choicesContainer.innerHTML = '';

    if (scene.type === 'narration') {
        narrationText.textContent = scene.text;
        continueBtn.style.display = 'block';
        choicesContainer.style.display = 'none';
    } else if (scene.type === 'dialogue') {
        speakerName.textContent = scene.speaker;
        dialogueText.textContent = scene.text;
        continueBtn.style.display = 'block';
        choicesContainer.style.display = 'none';
    } else if (scene.type === 'choice') {
        speakerName.textContent = '選擇';
        dialogueText.textContent = scene.question;
        continueBtn.style.display = 'none';
        choicesContainer.style.display = 'flex';

        scene.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.onclick = () => makeChoice(index);
            choicesContainer.appendChild(btn);
        });
    }

    // 每次顯示場景時自動存檔
    autoSave();
}

// 下一個對話
function nextDialogue() {
    const chapter = gameData.chapters[gameState.currentChapter];

    if (gameState.currentScene < chapter.scenes.length - 1) {
        gameState.currentScene++;
        showScene();
    } else {
        // 章節結束
        if (gameState.currentChapter < gameData.chapters.length - 1) {
            gameState.currentChapter++;
            gameState.currentScene = 0;
            updateChapter();
            showScene();
        } else {
            // 遊戲結束，顯示默認結局或待續
            if (gameState.currentChapter === 5) { // 第五章結束
                showEnding('tbc');
            } else {
                showEnding('true');
            }
        }
    }
}

// 做出選擇
function makeChoice(choiceIndex) {
    const chapter = gameData.chapters[gameState.currentChapter];
    const scene = chapter.scenes[gameState.currentScene];
    const choice = scene.choices[choiceIndex];

    // 記錄選擇
    gameState.choices.push({
        chapter: gameState.currentChapter,
        scene: gameState.currentScene,
        choice: choiceIndex
    });

    // 應用效果
    if (choice.effect) {
        if (choice.effect.lovePoints !== undefined) {
            gameState.stats.lovePoints += choice.effect.lovePoints;
        }
        if (choice.effect.beauty !== undefined) {
            gameState.stats.beauty += choice.effect.beauty;
        }
        if (choice.effect.intelligence !== undefined) {
            gameState.stats.intelligence += choice.effect.intelligence;
        }
        if (choice.effect.stamina !== undefined) {
            gameState.stats.stamina += choice.effect.stamina;
        }
        if (choice.effect.title) {
            gameState.stats.title = choice.effect.title;
        }
    }

    // 設置標記
    if (choice.flag) {
        gameState.flags[choice.flag] = true;
    }

    updateStats();

    // 顯示回應
    if (choice.response) {
        const dialogueText = document.getElementById('dialogue-text');
        const narrationText = document.getElementById('narration-text');
        const choicesContainer = document.getElementById('choices-container');
        const continueBtn = document.getElementById('continue-btn-game');

        narrationText.textContent = choice.response;
        dialogueText.textContent = '';
        choicesContainer.style.display = 'none';
        continueBtn.style.display = 'block';

        // 如果這個選擇會直接進入結局
        if (choice.ending) {
            continueBtn.onclick = () => showEnding(choice.ending);
        } else {
            continueBtn.onclick = nextDialogue;
        }
    } else if (choice.ending) {
        showEnding(choice.ending);
    } else {
        nextDialogue();
    }

    // 每次做出選擇後自動存檔
    autoSave();
}

// 顯示結局
function showEnding(endingType) {
    const ending = gameData.endings[endingType];

    document.getElementById('ending-title').textContent = ending.title;
    document.getElementById('ending-content').innerHTML = ending.content.replace(/\n/g, '<br>');
    document.getElementById('ending-image').textContent = ending.image;
    document.getElementById('ending-image').style.fontSize = '5rem';

    showScreen('ending-screen');

    // 不清除存檔，讓玩家可以回顧
    // localStorage.removeItem('autoSave');
}

// 返回主選單
function backToMainMenu() {
    showScreen('main-menu');
    initGame();
}

// 顯示關於
function showCredits() {
    showScreen('credits-screen');
}

// 隱藏關於
function hideCredits() {
    showScreen('main-menu');
}

// 切換遊戲菜單
function toggleGameMenu() {
    const menu = document.getElementById('game-menu');
    menu.classList.toggle('active');
}

// 頁面載入時初始化
window.onload = initGame;
