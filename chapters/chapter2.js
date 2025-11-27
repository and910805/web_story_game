// 第二章：宮廷新手村 - 秀女訓練營
const chapter2 = {
    name: '第二章：宮廷新手村 - 秀女訓練營',
    scenes: [
        {
            type: 'narration',
            text: '秀女所的第一個早晨，從一聲慘絕人寰的鑼聲開始。'
        },
        {
            type: 'dialogue',
            speaker: '巡房嬤嬤',
            text: '起——床——了——！誰敢多睡一刻鐘，就給我去抄規矩一百遍！'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '啊啊啊——天還是黑的……'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '安寧，快起來。吳姐姐，妳的被子還裹著人呢。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我以為昨晚只是夢，沒想到是真的要這麼早起……'
        },

        // 第一個選項：你要多早起？
        {
            type: 'choice',
            question: '第一天正式訓練，妳打算怎麼面對這個恐怖的起床時間？',
            choices: [
                {
                    text: 'A. 立刻翻身起床，當個模範新人。',
                    effect: { intelligence: 3, stamina: -2 },
                    response: '妳一咬牙從床上彈起，速度快到連自己都嚇一跳。頭髮亂成雞窩，但嬤嬤看見妳起得快，眼神明顯柔和了一點。',
                    flag: 'early_bird'
                },
                {
                    text: 'B. 拖到最後一刻才起，但動作飛快補救。',
                    effect: { stamina: 3 },
                    response: '妳賴了幾息，最後在巡房嬤嬤腳步逼近時一躍而起，像打仗一樣三下兩下穿好衣裳。雖然有點狼狽，總算沒被抓包。',
                    flag: 'danger_sleeper'
                },
                {
                    text: 'C. 打算裝病賴床，結果被嬤嬤冷眼看穿。',
                    effect: { stamina: -3 },
                    response: '妳小小聲說自己頭有點暈，想再躺一下。嬤嬤冷冷道：「第一天就暈？那就起來喝碗薑湯再去抄規矩。」妳立刻坐直：精神好多了。',
                    flag: 'failed_layflat'
                }
            ]
        },

        {
            type: 'narration',
            text: '匆匆梳洗、穿戴整齊，新人們被集合到院子裡。晨風很冷，但嬤嬤的眼神比風還要冷。'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '從今日起，爾等要學的是「怎麼像個宮裡人」。走路要像樣，站要站得穩，笑要笑得得體。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）所以之前我走路、站著、笑，都不像人？'
        },

        // 儀態訓練：走路
        {
            type: 'narration',
            text: '院子中間鋪了一排青磚，上面畫著一朵朵梅花的紋路。'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '這叫「步步生蓮」。腳要踩在紋路上，肩不能晃，頭不能歪。誰走得像風中柳條，就回去重練。'
        },
        {
            type: 'dialogue',
            speaker: '秀女甲',
            text: '聽起來好難……'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '從左邊那位開始。'
        },
        {
            type: 'narration',
            text: '幾名秀女戰戰兢兢地走過青磚，有人腳步太快被喝斥，有人裙擺被自己踩到差點摔跤。輪到妳時，全場目光刷地看過來。'
        },

        // 第二個選項：妳怎麼走「步步生蓮」
        {
            type: 'choice',
            question: '輪到妳踏上青磚，妳打算怎麼走？',
            choices: [
                {
                    text: 'A. 腦中默念節奏，認真對齊每一步。',
                    effect: { intelligence: 4 },
                    response: '妳在心中數著：一步、停、一步、停，每腳都剛好踩在梅花紋中央。雖然緊張，但整體看起來意外端正。',
                    flag: 'good_walk'
                },
                {
                    text: 'B. 放鬆心情，當作在自家院子散步。',
                    effect: { stamina: 3 },
                    response: '妳深吸一口氣，假裝自己只是回到吳府的石板路上。步伐自然，裙擺微微晃動，帶出一絲清爽的味道。',
                    flag: 'natural_walk'
                },
                {
                    text: 'C. 想著「不要摔倒不要摔倒」，結果越想越僵硬。',
                    effect: { stamina: -2 },
                    response: '妳的腳像被釘在地上，每一步都走得非常小心，以至於看起來有點像被迫去上刑場。禮儀嬤嬤捏了捏眉心。',
                    flag: 'awkward_walk'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '還算過得去。記住，身子要穩，眼神要清。以後在貴人面前，可沒人有時間等妳慢慢挪。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '吳姐姐妳好厲害，我剛才都快被自己的腳絆倒了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那是因為妳的腳在緊張。我的是心在絆腳。'
        },

        // 儀態訓練：站姿＋笑
        {
            type: 'narration',
            text: '走路訓練結束，下一個項目是——站好。'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '站如青松，坐如鐘。肩放鬆、背打直、收小腹。誰敢駝背，就給我背銅盆。'
        },
        {
            type: 'dialogue',
            speaker: '秀女丁',
            text: '背銅盆？那不是用來裝水的嗎……'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '現在拿來裝妳們的懶骨頭。'
        },
        {
            type: 'narration',
            text: '一群新人齊刷刷豎起脊背，整個院子像突然長出一片細竹林。'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '笑給我看。不是咧嘴，是微笑——嘴角微揚、眼神柔和，別露齒，別像在準備吃人。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（試著微笑）……這樣？'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '……嗯，不錯。記住這個表情，以後在宮裡見人都用得到。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐笑起來，其實挺溫柔的。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '妳剛剛說「其實」？代表平常看起來不溫柔？'
        },

        // 中場休息＋宮鬥情報
        {
            type: 'narration',
            text: '一整個上午的訓練結束時，妳只覺得自己的腰不是自己的，臉也笑到有點抽筋。終於輪到去御膳房用午膳。'
        },
        {
            type: 'dialogue',
            speaker: '御膳房小太監',
            text: '今日是新人，用的是簡單口糧。等以後封了位，小主們就知道好東西在後頭了。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '這已經很好吃了……我在家裡都沒吃過這麼白的米飯。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '宮裡看起來富麗，實則規矩多。好吃的東西，往往都要付出代價。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '妳這話聽起來好像吃飯會順便吃進是非。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '妳看那邊，那桌坐的是禮部尚書家的女兒，旁邊那幾位全圍著她，巴不得現在就抱大腿。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '那那邊呢？'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '一看便是有人刻意孤立那位戴綠珠花的姑娘。她剛才在訓練時走路太張揚，惹人忌妒了吧。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '原來這餐不只是吃飯，還附贈「宮廷觀察課」。'
        },

        // 第三個選項：午餐時你怎麼定位自己
        {
            type: 'choice',
            question: '午膳時間也是建立人際關係的好時機。妳打算怎麼選位子？',
            choices: [
                {
                    text: 'A. 坐在角落，低調觀察所有人。',
                    effect: { intelligence: 4 },
                    response: '妳挑了靠牆的位置，一邊吃飯一邊偷偷觀察各桌互動。誰是中心、誰被排擠、誰走來走去打招呼，妳都默默記在心裡。',
                    flag: 'observer_mode'
                },
                {
                    text: 'B. 和室友坐在一起，強化「東二間互助會」。',
                    effect: { stamina: 3 },
                    response: '妳拉著沈眉柔和林安寧一起坐，三人邊吃邊小聲聊天。雖然不起眼，卻有股小小的團隊感。',
                    flag: 'team_player'
                },
                {
                    text: 'C. 故意坐在陌生人旁邊，試著打聽更多消息。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳找了一位看起來和善的姑娘坐下，順勢聊起宮裡幾位貴人的事。沒多久，腦中多了「華妃脾氣大、皇后端莊、幾個嬪妃各有來頭」的小抄。',
                    flag: 'info_hunter'
                }
            ]
        },

        // 下午：才藝檢測，為未來鋪路
        {
            type: 'narration',
            text: '午膳過後，新人們被帶到一間寬敞的偏殿。殿中擺著琴棋書畫、絲竹茶具，顯然又有新課程要上。'
        },
        {
            type: 'dialogue',
            speaker: '才藝嬤嬤',
            text: '後宮之人，不求樣樣精通，但總得有一兩樣拿得出手。今日便看看各位擅長什麼，好往後安排。'
        },
        {
            type: 'dialogue',
            speaker: '才藝嬤嬤',
            text: '待會兒輪到誰，便自報家門，挑一樣自己拿手的。別逞強，別胡亂誇口。'
        },
        {
            type: 'dialogue',
            speaker: '秀女甲',
            text: '（緊張）我會一點琵琶……'
        },
        {
            type: 'dialogue',
            speaker: '秀女乙',
            text: '我從小習字，字還算端正。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐呢？妳有什麼擅長的？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我很會排隊買小吃算不算？'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '……奴家覺得，那可能暫時派不上用場。'
        },

        // 第四個選項：妳選哪種才藝
        {
            type: 'choice',
            question: '輪到妳上前展示「才藝」了。妳決定——',
            choices: [
                {
                    text: 'A. 彈琴。雖然不算名師指點，但能彈完一曲不出大錯。',
                    effect: { intelligence: 4 },
                    response: '妳坐到琴前，手指略有些僵硬，但音色還算清亮。一曲彈完，嬤嬤點頭：「尚可。」',
                    flag: 'talent_music'
                },
                {
                    text: 'B. 作畫。畫功普通，但構圖清新可愛。',
                    effect: { intelligence: 3, stamina: 1 },
                    response: '妳提筆畫了一幅小景：一隻貓趴在窗邊曬太陽。線條不算工整，卻有說不出的偷懶氣息。嬤嬤看了一眼，嘴角似乎抽動了一下。',
                    flag: 'talent_paint'
                },
                {
                    text: 'C. 茶藝。端穩茶具、泡茶流暢，勝在穩重。',
                    effect: { intelligence: 3 },
                    response: '妳選了最保險的一項：泡茶。水溫、茶量都掌握得剛好。嬤嬤端起茶盞抿了一口：「手不抖，心也不亂。不錯。」',
                    flag: 'talent_tea'
                },
                {
                    text: 'D. 乾脆講故事，把小時候聽來的話本內容改編成「宮廷小短劇」。',
                    effect: { stamina: 4 },
                    response: '妳笑著講了一個「小老鼠誤闖皇宮」的故事，說到精彩處還模仿鼠叫，引得幾個秀女忍不住偷笑。嬤嬤咳了一聲：「嘴倒是利索。」',
                    flag: 'talent_story'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '才藝嬤嬤',
            text: '記下了。以後誰若被指名在宴席上助興，就從這裡挑人。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '吳姐姐，妳剛剛講的那個老鼠故事，好好笑……'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '只是以後在皇上面前，還是少提老鼠為妙。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '原來我的才藝是「差點把全場帶偏」。'
        },

        // 小小宮鬥預兆：綠茶再登場
        {
            type: 'narration',
            text: '才藝課結束後，人群散開。妳正想回房歇歇腳，肩膀忽然被輕輕一拍。'
        },
        {
            type: 'dialogue',
            speaker: '綠茶預備役秀女',
            text: '吳姐姐今日表現得真不錯呀，嬤嬤都特地記了幾次。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '是嗎？我只記得自己快要笑抽筋。'
        },
        {
            type: 'dialogue',
            speaker: '綠茶預備役秀女',
            text: '像我們這種出身普通的，要是不多出點風頭，哪有機會被看見？'
        },
        {
            type: 'dialogue',
            speaker: '綠茶預備役秀女',
            text: '不過嘛……有時候太惹眼，也容易被記在心裡，將來走錯一步可就麻煩了。'
        },

        // 第五個選項：你怎麼回應綠茶
        {
            type: 'choice',
            question: '這話聽起來又像誇又像在提醒，妳打算怎麼接？',
            choices: [
                {
                    text: 'A. 裝傻帶過：「原來如此，那以後我試著當背景板。」',
                    effect: { intelligence: 3 },
                    response: '妳笑笑：「那我還是繼續低調好了，當個能吃飯的背景板。」對方眼神微微一頓，看不出妳到底是聽懂還是假裝糊塗。',
                    flag: 'teagreen_deflect'
                },
                {
                    text: 'B. 禮貌回應：「多謝提醒，以後會更小心。」',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳正色道：「多謝姐姐提點，宮裡的事確實不比外頭。」對方嘴角一彎：「姐姐這就明白事理多了。」',
                    flag: 'teagreen_polite'
                },
                {
                    text: 'C. 直接反問：「那姐姐今日也挺惹眼的呢。」',
                    effect: { stamina: 3 },
                    response: '妳笑盈盈道：「不過今天最亮眼的，好像是姐姐呢。」對方的笑容僵了一瞬，又很快恢復溫柔模樣：「吳姐姐真會說笑。」',
                    flag: 'teagreen_counter'
                }
            ]
        },

        {
            type: 'narration',
            text: '綠茶秀女離開後，沈眉柔從柱子後面走出來。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '剛才那位，可不是省油的燈。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '我怎麼聽不出來，她看起來好溫柔……'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '越是看起來溫柔的話，越要聽裡面有幾分是糖、幾分是刀。'
        },

        // 傍晚：太后賞花宴的風聲
        {
            type: 'narration',
            text: '傍晚時分，一陣鈴聲響起，帶路的小宮女又出現在院門口。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '諸位小主，傳話來了。太后娘娘近日要辦一場賞花小宴，說是順便看看新進秀女的儀態與才藝。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '這、這麼快就要見太后？'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '這是機會也是考驗。誰被太后看順眼，後頭日子會好過些。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '不過放心，並不是所有人都要上前表演，只會挑幾位。妳們可以趁這幾日再練一練。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '原來新手村通關考試這麼快就來了。'
        },

        // 第六個選項：面對即將到來的賞花宴
        {
            type: 'choice',
            question: '得知即將有「賞花宴＋太后觀察期」，妳的準備方向是——',
            choices: [
                {
                    text: 'A. 加強自己剛剛展示過的才藝，至少不出醜。',
                    effect: { intelligence: 4 },
                    response: '妳決定先保本：反覆練剛才那一項，不求驚艷，只求穩妥。'
                },
                {
                    text: 'B. 研究太后喜好，調整風格。',
                    effect: { intelligence: 3 },
                    response: '妳開始打聽太后平日的脾性與喜惡，打算把自己的表現往那個方向微調。'
                },
                {
                    text: 'C. 把重點放在儀態與說話，不主動出風頭。',
                    effect: { stamina: 3 },
                    response: '妳暗自決定：不求被點名，只求被看到時沒有破綻。該笑就笑，該低頭就低頭。'
                }
            ]
        },

        // 夜裡閒聊，收束本章
        {
            type: 'narration',
            text: '夜深了，秀女所的燈火一盞盞滅下去。東二間的小屋裡，卻還有三個人影在小聲說話。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '妳們說……如果太后不喜歡我們，會怎樣？'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '多半是被打發到冷清的地方去，或者早早出宮。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '出宮是好事還是壞事？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '看角度。有人求不得，有人求之不得。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '那吳姐姐呢？妳現在還想著「被刷下回家躺平」嗎？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '老實說……'
        },

        // 第七個選項：主角內心更新版本
        {
            type: 'choice',
            question: '經過這兩日的適應，妳對「留在宮裡」的想法有了些變化。妳會怎麼說？',
            choices: [
                {
                    text: 'A. 雖然還是想躺平，但也開始好奇這裡會發生什麼。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳嘆了口氣道：「本來只想回家睡覺，但現在有點好奇，這宮牆裡到底能把人變成什麼樣。」',
                    flag: 'curious_about_palace'
                },
                {
                    text: 'B. 有機會的話，還是想試試看「好日子」。',
                    effect: { intelligence: 4 },
                    response: '妳坦然道：「若真有機會讓日子過好點，我也不想拒絕。只是希望別變成我不認識的自己。」',
                    flag: 'ambition_soft'
                },
                {
                    text: 'C. 最重要的還是活著，其它一律排在後面。',
                    effect: { stamina: 4 },
                    response: '妳簡單道：「活著，其他再說。哪怕是躺著活著，也比漂亮地死去強。」兩個室友都沉默了幾息，然後一起笑了出來。',
                    flag: 'survival_core'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '不管怎樣，我都想跟妳們一起。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '那就一起努力。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '從今天起，東二間生存互助會升級——多了一項服務：互相提醒不要衝動。'
        },
        {
            type: 'narration',
            text: '窗外風聲輕輕，宮牆高聳。妳在昏黃燈光下慢慢合上眼睛，心裡卻比昨天清醒一些。'
        },
        {
            type: 'narration',
            text: '遠在另一頭的宮城深處，御書房裡的燈火還亮著。'
        },
        {
            type: 'dialogue',
            speaker: '內侍總管',
            text: '啟稟皇上，今日秀女訓練，禮儀嬤嬤說，有幾位姿態還算不錯，其中有一位吳氏——'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '吳氏？就是那日在殿選上說「怕起早」的那個？'
        },
        {
            type: 'dialogue',
            speaker: '內侍總管',
            text: '回皇上，正是。嬤嬤說她學得不算最快，卻挺有耐性。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '……倒是個有趣的人。先記著吧，不必特意召見。'
        },
        {
            type: 'narration',
            text: '【第二章完】妳還只是秀女所裡的一個新人，既沒封號，也談不上得寵。但在某個連妳自己都不知道的地方，有人開始記住了妳的名字。'
        }
    ]
};
