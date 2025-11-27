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

// 遊戲數據 - 完整的五個章節故事
const gameData = {
    chapters: [
        {
            name: '序章：選秀風雲',
            scenes: [
                {
                    type: 'narration',
                    text: '雍正二十五年，臭咘咘皇帝登基，廣納後宮。秀女吳芃秀，因不想入宮只想在家躺平，故意穿著樸素，但在殿選時……'
                },
                {
                    type: 'narration',
                    text: '太監喊道：「宣，大理寺少卿之女，吳芃秀覲見！」'
                },
                {
                    type: 'narration',
                    text: '芃秀走上前，心裡想著等下要去吃什麼。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘皇帝',
                    text: '（心想：這女生怎麼一臉沒睡飽的樣子，好可愛。）'
                },
                {
                    type: 'choice',
                    question: '皇帝問話：「吳氏，妳為何入宮？」',
                    choices: [
                        {
                            text: 'A. 「臣女為家族榮耀而來。」',
                            effect: { lovePoints: 0 },
                            response: '皇帝點點頭，看起來有些失望。'
                        },
                        {
                            text: 'B. 「臣女聽說宮裡的御膳房點心很好吃。」',
                            effect: { lovePoints: 10 },
                            response: '皇帝忍不住大笑：「有趣！果然是個真性情的女子！」',
                            flag: 'honest_answer'
                        },
                        {
                            text: 'C. 「臣女不小心迷路走進來的。」',
                            effect: { lovePoints: 5 },
                            response: '皇帝被逗樂了：「朕的後宮還從未見過如此可愛的傻瓜。」'
                        }
                    ]
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘皇帝',
                    text: '有趣，賜香囊，封為『秀常在』，入住碎玉軒。'
                },
                {
                    type: 'narration',
                    text: '就這樣，妳正式入宮了。雖然有點莫名其妙，但至少御膳房的點心確實好吃……'
                }
            ]
        },
        {
            name: '第一章：初入宮闈與「椒房獨寵」',
            scenes: [
                {
                    type: 'narration',
                    text: '入宮一個月後，妳發現宮鬥實在太累，決定開始擺爛。'
                },
                {
                    type: 'narration',
                    text: '某日，妳在御花園的鞦韆上偷吃從家裡帶來的零食，正好撞見微服出巡的臭咘咘。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '大膽嬪妃，竟敢獨食？'
                },
                {
                    type: 'narration',
                    text: '（妳嚇一跳，嘴邊還有餅乾屑）'
                },
                {
                    type: 'choice',
                    question: '妳該如何反應？',
                    choices: [
                        {
                            text: 'A. 立刻跪下認錯',
                            effect: { lovePoints: -5 },
                            response: '皇帝皺了皺眉：「起來吧，太生分了。」'
                        },
                        {
                            text: 'B. 遞一塊餅乾給他：「你也想吃嗎？這是限量的喔。」',
                            effect: { lovePoints: 20 },
                            response: '皇帝被這份自然可愛給融化了，接過餅乾笑著說：「妳這丫頭……」',
                            flag: 'shared_snack'
                        },
                        {
                            text: 'C. 裝作沒看見，繼續吃',
                            effect: { lovePoints: -10, stamina: -10 },
                            response: '正好華妃路過，冷笑道：「真是沒規矩。」妳的日子變得更難過了。'
                        }
                    ]
                },
                {
                    type: 'narration',
                    text: '當晚，敬事房太監端著盤子來：「皇上翻了小主的牌子。」'
                },
                {
                    type: 'dialogue',
                    speaker: '吳芃秀',
                    text: '（內心OS：什麼？！我還沒做好心理準備！）'
                },
                {
                    type: 'narration',
                    text: '來到養心殿後，妳發現臭咘咘並沒有讓妳侍寢，而是拉著妳聊了一整晚的「誰是後宮最可愛的人」。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '秀兒，在朕眼中，妳就是後宮最可愛的人。從今以後，妳就是朕的臭寶。'
                },
                {
                    type: 'narration',
                    text: '【系統提示】獲得稱號【臭寶】'
                },
                {
                    type: 'narration',
                    text: '妳臉紅了，但心裡甜滋滋的。這個皇帝，好像有點不一樣……'
                }
            ]
        },
        {
            name: '第二章：後宮風波 - 綠茶的陷阱',
            scenes: [
                {
                    type: 'narration',
                    text: '受寵的日子總是短暫的。綠茶貴妃嫉妒妳，決定在皇后的賞花大會上陷害妳。'
                },
                {
                    type: 'dialogue',
                    speaker: '綠茶貴妃',
                    text: '皇上，秀常在粗手粗腳，竟然弄壞了您最愛的西洋進貢機械錶！'
                },
                {
                    type: 'narration',
                    text: '臭咘咘臉色一沉，看向妳。眾人屏息以待。'
                },
                {
                    type: 'choice',
                    question: '妳該如何辯解？',
                    choices: [
                        {
                            text: 'A. 哭得梨花帶雨，說不是我',
                            effect: { lovePoints: 5 },
                            response: '臭咘咘心疼地擦去妳的眼淚，但問題還是沒解決。'
                        },
                        {
                            text: 'B. 理性分析指紋和不在場證明',
                            effect: { lovePoints: 8, intelligence: 5 },
                            response: '眾人驚訝妳的冷靜，但總覺得哪裡怪怪的……'
                        },
                        {
                            text: 'C. 走過去拉著臭咘咘的手：「壞了就壞了，難道我比不上一個破錶嗎？臭咘咘你說！」',
                            effect: { lovePoints: 30, title: '秀嬪' },
                            response: '全場震驚！但臭咘咘卻一把摟住妳。',
                            flag: 'stood_up'
                        }
                    ]
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '朕的臭寶說是怎樣就怎樣。來人，把那隻錶扔了，再把貴妃拖出去禁足三月！'
                },
                {
                    type: 'narration',
                    text: '眾人嘩然，但沒人敢說話。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '從今日起，晉封秀嬪，賜鳳冠霞帔一套，移居翊坤宮。'
                },
                {
                    type: 'narration',
                    text: '妳成功度過了第一次後宮危機，而且還升職加薪了！'
                }
            ]
        },
        {
            name: '第三章：冷宮（？）與真心',
            scenes: [
                {
                    type: 'narration',
                    text: '雖然受寵，但前朝大臣開始彈劾妳是「妖妃」，誤國誤民。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '（在御書房，神情疲憊）秀兒，朕要暫時冷落妳，才能保護妳。妳能理解嗎？'
                },
                {
                    type: 'dialogue',
                    speaker: '吳芃秀',
                    text: '我理解。但是……你要記得吃飯，不要累壞身體。'
                },
                {
                    type: 'narration',
                    text: '臭咘咘眼眶泛紅，緊緊抱住妳。'
                },
                {
                    type: 'narration',
                    text: '接下來的日子，妳被禁足在碎玉軒。但每天半夜，總有黑影翻牆進來……'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '（輕聲）秀兒，朕給妳帶了妳最愛的肯德基。'
                },
                {
                    type: 'dialogue',
                    speaker: '吳芃秀',
                    text: '（驚喜）你這個傻瓜，會被人發現的！'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '朕不管，只要能見到妳就好。'
                },
                {
                    type: 'narration',
                    text: '妳決定寫一封信給他，讓他安心處理朝政。'
                },
                {
                    type: 'narration',
                    text: '信中寫道：「雖然我不能在身邊，但我知道你是最棒的。你是我的臭咘咘，記得按時吃飯。」'
                },
                {
                    type: 'narration',
                    text: '臭咘咘收到信後，感動落淚。'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '（在朝堂上）朕就是寵她，怎樣！誰敢再說秀嬪不好，朕就讓他下崗！'
                },
                {
                    type: 'narration',
                    text: '大臣們面面相覷，從此無人再敢提起。'
                },
                {
                    type: 'narration',
                    text: '妳被晉封為【秀皇貴妃】，位同副后。'
                }
            ]
        },
        {
            name: '第四章：封后大典前夕',
            scenes: [
                {
                    type: 'narration',
                    text: '經過一系列的風風雨雨，妳已經成為皇貴妃。臭咘咘決定遣散六宮，只留妳一人。'
                },
                {
                    type: 'narration',
                    text: '在圓明園的湖邊，妳看著夕陽，突然感到迷惘。'
                },
                {
                    type: 'dialogue',
                    speaker: '吳芃秀',
                    text: '（獨白）當皇后好累，每天都要早起……而且還有一堆規矩……'
                },
                {
                    type: 'dialogue',
                    speaker: '臭咘咘',
                    text: '（突然出現，手裡拿著妳最愛喝的飲料）怎麼了？我的臭寶不想當皇后？'
                },
                {
                    type: 'dialogue',
                    speaker: '吳芃秀',
                    text: '臭咘咘……'
                },
                {
                    type: 'choice',
                    question: '妳的真心話是？',
                    choices: [
                        {
                            text: 'A. 「我想當皇后，母儀天下。」',
                            effect: { lovePoints: 10 },
                            response: '',
                            ending: 'empress'
                        },
                        {
                            text: 'B. 「我不想當皇后，我想出宮去玩。」',
                            effect: { lovePoints: 15 },
                            response: '',
                            ending: 'escape'
                        },
                        {
                            text: 'C. 「我只想當你的臭寶，不管在哪裡，只要你在身邊就好。」',
                            effect: { lovePoints: 50 },
                            response: '',
                            ending: 'true'
                        }
                    ]
                }
            ]
        }
    ],
    endings: {
        empress: {
            title: '結局一：聖母皇太后',
            content: `妳成為了皇后，母儀天下。

雖然每天都很忙碌，但臭咘咘總是會在妳累的時候，偷偷幫妳按摩肩膀。

兩人相敬如賓，共同治理天下。

歷史記載：「秀皇后賢良淑德，與帝伉儷情深，共創盛世。」

但只有你們知道，那些史書裡寫不下的，是每天晚上他給妳熱牛奶的溫柔。

【達成結局：聖母皇太后】`,
            image: '👑'
        },
        escape: {
            title: '結局二：私奔到月球',
            content: `臭咘咘聽完妳的話，沉思了很久。

隔天，他宣布禪位給皇弟，帶著妳離開了皇宮。

兩人改名換姓，開始環遊世界。

從江南水鄉到塞外草原，從繁華都市到偏遠小鎮……

歷史記載：「帝突然失蹤，下落不明。」

但在某個小鎮的奶茶店裡，有對情侶每天都會來買一杯珍珠奶茶。

老闆娘說，那個男生總是寵溺地看著女生，叫她「臭寶」。

【達成結局：私奔到月球】`,
            image: '🌙'
        },
        true: {
            title: '完美結局：歲月靜好，臭寶不老',
            content: `臭咘咘聽到妳的話，眼眶紅了。

他一把將妳摟入懷中：「傻瓜，朕也只想當妳的臭咘咘。」

從那天起，宮中再無封后儀式，但所有人都知道，皇貴妃就是皇后。

夕陽西下，兩人坐在宮牆上（致敬甄嬛傳結尾，但氛圍是甜的）。

臭咘咘：「秀兒，這江山朕看膩了，唯獨看妳看不膩。」

吳芃秀：「少來這套，今天的晚餐呢？」

臭咘咘：「早就準備好了，是妳愛吃的火鍋。」

從此，歷史上少了一位勤政的皇帝，多了一位寵妻狂魔。
後宮沒有三千佳麗，只有一位永遠長不大的「臭寶」。

至於那位叫莊冠霖的皇帝，他的帝號在史書上被記載為——「愛秀帝」。

【恭喜達成完美結局：歲月靜好，臭寶不老】

獲得成就：💕 真愛無敵
寵愛值：MAX`,
            image: '💕'
        }
    }
};

// 初始化遊戲
function initGame() {
    // 檢查是否有存檔
    const savedGame = localStorage.getItem('gameProgress');
    if (savedGame) {
        document.getElementById('continue-btn').disabled = false;
    } else {
        document.getElementById('continue-btn').disabled = true;
    }
}

// 開始新遊戲
function startNewGame() {
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
}

// 繼續遊戲
function continueGame() {
    const savedGame = localStorage.getItem('gameProgress');
    if (savedGame) {
        const saved = JSON.parse(savedGame);
        Object.assign(gameState, saved);
        showScreen('game-screen');
        updateStats();
        updateChapter();
        showScene();
    }
}

// 存檔
function saveGame() {
    localStorage.setItem('gameProgress', JSON.stringify(gameState));
    alert('遊戲已存檔！');
}

// 讀檔
function loadGame() {
    const savedGame = localStorage.getItem('gameProgress');
    if (savedGame) {
        const saved = JSON.parse(savedGame);
        Object.assign(gameState, saved);
        updateStats();
        updateChapter();
        showScene();
        alert('遊戲已讀取！');
    } else {
        alert('沒有找到存檔！');
    }
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
            // 遊戲結束，顯示默認結局
            showEnding('true');
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
}

// 顯示結局
function showEnding(endingType) {
    const ending = gameData.endings[endingType];
    
    document.getElementById('ending-title').textContent = ending.title;
    document.getElementById('ending-content').innerHTML = ending.content.replace(/\n/g, '<br>');
    document.getElementById('ending-image').textContent = ending.image;
    document.getElementById('ending-image').style.fontSize = '5rem';
    
    showScreen('ending-screen');
    
    // 清除存檔
    localStorage.removeItem('gameProgress');
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
