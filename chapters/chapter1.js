// 第一章：初入宮闈 - 新人所生存指南
const chapter1 = {
    name: '第一章：初入宮闈 - 新人所生存指南',
    scenes: [
        {
            type: 'narration',
            text: '殿選結束後，被點到名字的秀女們並沒有立刻住進華麗的宮殿，而是先被安置在一處專門收容新人的院落──秀女所。'
        },
        {
            type: 'narration',
            text: '院子不大，卻收拾得乾乾淨淨。雪還沒完全融化，屋簷下掛著細細的冰凌，空氣中有一股混著藥味與胭脂的味道。'
        },
        {
            type: 'dialogue',
            speaker: '禮部嬤嬤',
            text: '都別東張西望了，從今日起，爾等就是宮中之人。記住，規矩兩個字比命還重。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）剛進來就先談人生安全，聽起來一點也不像渡假行程。'
        },
        {
            type: 'dialogue',
            speaker: '禮部嬤嬤',
            text: '宮中起居時辰，卯初起，辰時前用膳。每日須按例請安、學禮、誦經、抄規矩。誰若遲到早退、偷懶耍滑，一律記名。'
        },
        {
            type: 'dialogue',
            speaker: '禮部嬤嬤',
            text: '不得私自離院，不得與外男私會，不得在宮中亂跑亂撞，更不得在背後議論聖上與貴人，是不是聽清楚了？'
        },
        {
            type: 'dialogue',
            speaker: '眾秀女',
            text: '是，嬤嬤。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '（小聲）小姐，奴婢突然覺得，咱們以前在府裡的生活好自由。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我現在甚至懷念被娘叫起床幫忙貼春聯的日子。'
        },

        // 第一個選項：面對規矩海嘯
        {
            type: 'choice',
            question: '嬤嬤還在滔滔不絕講規矩，妳的腦袋已經快塞滿。此刻妳打算怎麼面對這場規矩海嘯？',
            choices: [
                {
                    text: 'A. 認真聽講，在心裡默背重點。',
                    effect: { intelligence: 5 },
                    response: '妳努力在心底默念：起居時辰、請安順序、哪些地方不能去。雖然頭有點漲，卻真的記住了幾樣。'
                },
                {
                    text: 'B. 偷拿小紙片，畫出「規矩流程圖」。',
                    effect: { intelligence: 3, stamina: -2 },
                    response: '妳悄悄從袖子裡掏出紙片，在上面畫框框與箭頭，把嬤嬤講的重點整理成流程圖。看起來像在抄經，實際上是在做小抄。'
                },
                {
                    text: 'C. 面無表情地點頭，內心已經開始計畫如何在規矩縫隙中躺平。',
                    effect: { stamina: 3 },
                    response: '妳表面乖巧，心裡卻在想：哪幾個時辰嬤嬤不會來查房，哪幾個角落適合打盹。'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '禮部嬤嬤',
            text: '好了，今晚先讓爾等安頓。明日起，凡事照規矩辦。誰若出錯，可別怪老身沒提醒。'
        },
        {
            type: 'narration',
            text: '嬤嬤一聲令下，秀女們被分配到不同的房間。妳被安排在東側第二間，屋內已有兩個人影在收拾床鋪。'
        },

        // 認識兩個室友
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '這位就是新來的吳姐姐吧？妳好，我叫沈眉柔，是刑部侍郎之女。往後還請多多照顧。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '我、我叫林安寧，家裡只是做布匹小生意的，出身比不上兩位姐姐……還請多包涵。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '原來我們這間是「刑部千金加布庄千金」外加一個大理寺庶女組合，聽起來挺能抓賊。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐說話真有趣。剛才在殿裡，皇上看了妳好一會兒呢。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '是啊，我站在妳後頭，都感覺到那種視線……很有壓力。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我只記得當時腦中一片空白，只想著千萬別摔倒。至於皇上的視線……我當作那是燈光。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '不管如何，能被留在宮裡，說明緣分不錯。以後我們三個同住一屋，便是同一條船上的人。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '我第一次離家住在外頭，有點緊張。若是說錯話惹人笑話，還請兩位姐姐提醒我。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '沒事，我們這間以後就叫「互相救火小組」。誰出事，另外兩個要負責滅火。'
        },

        // 第二個選項：先靠近誰
        {
            type: 'choice',
            question: '初來乍到，面對這兩位新室友，妳打算先和誰多親近一些？',
            choices: [
                {
                    text: 'A. 溫柔穩重的沈眉柔，看起來是可靠大腿。',
                    effect: { intelligence: 3 },
                    response: '妳多和沈眉柔說了幾句，聊起各家父兄在朝中的情形。她說話不卑不亢，讓人不自覺放鬆，是個適合結盟的人。',
                    flag: 'friend_shen'
                },
                {
                    text: 'B. 容易緊張的林安寧，感覺需要人照顧。',
                    effect: { stamina: 3 },
                    response: '妳刻意找一些輕鬆的話題逗她笑，林安寧的肩膀慢慢放鬆下來。她小聲說，以後有事就跟在妳旁邊，也踏實些。',
                    flag: 'friend_lin'
                },
                {
                    text: 'C. 兩邊都維持禮貌距離，先觀察一陣子再說。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳笑著和兩人寒暄，卻不多說心事。先把大家放進腦中的「觀察名單」，以後再慢慢看。宮裡嘛，先活下來比較重要。',
                    flag: 'friend_careful'
                }
            ]
        },

        {
            type: 'narration',
            text: '稍作歇息後，一名小宮女前來傳話，說要帶新秀女們在附近認路，免得明日一早就有人迷路遲到。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '諸位小主，請隨奴婢來。這一帶是新人住處，再往前是御花園，不得隨意喧嘩。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '左邊那條是去御膳房的路，不過平日由嬤嬤領去用膳，自己不能亂跑。右邊那條是去存衣庫與庫房，小主們暫時用不著。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）重點：御花園、御膳房。其他的明天再說。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐，妳有在認真記路嗎？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我在用「吃貨視角」建立地圖。先把吃的地方標出來，其他路線再往上疊。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '原來地圖還可以這樣畫……那我負責標出哪裡看起來比較安全好了。'

        },

        // 第三個選項：導覽時關注什麼
        {
            type: 'choice',
            question: '在這趟認路導覽中，妳最用心記住的是哪一部分？',
            choices: [
                {
                    text: 'A. 宮門、道路與殿宇位置，避免迷路出醜。',
                    effect: { intelligence: 5 },
                    response: '妳默默數著台階、記著轉角與門匾上的字，為自己在腦中勾勒出一張簡易平面圖。'
                },
                {
                    text: 'B. 御花園與御膳房的方向，方便日後偷空散步和觀察。',
                    effect: { stamina: 3, intelligence: 2 },
                    response: '妳特別留意御花園的入口與御膳房的煙囪，心想：哪天心情不好，就來這裡吹風聞香味。'
                },
                {
                    text: 'C. 哪些地方人少安靜，最適合躲起來打盹。',
                    effect: { stamina: 5 },
                    response: '妳一眼就看中幾處假山後面、回廊拐角，心裡打了個小勾勾：這些地方，將來都可能是妳的秘密據點。'
                }
            ]
        },

        {
            type: 'narration',
            text: '走著走著，一行人來到一處長廊外。遠處忽然傳來整齊的腳步聲與太監尖細的通傳聲。'
        },
        {
            type: 'dialogue',
            speaker: '太監甲',
            text: '聖駕到——前方人等回避。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '快，諸位小主靠邊站，跪下。切記不可亂看。'
        },
        {
            type: 'narration',
            text: '妳心頭一緊，和眾秀女一起跪在長廊邊的陰影處。靴底聲由遠及近，像在妳心上踏了一排腳印。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）這就是傳說中的「上班遇到老闆本人」現場版嗎……'
        },

        // 第四個選項：要不要偷看皇帝
        {
            type: 'choice',
            question: '皇帝車駕與隨行人員正從面前經過，帶路的小宮女低聲叮囑不能抬頭。妳會怎麼做？',
            choices: [
                {
                    text: 'A. 堅決不抬頭，照規矩行事。',
                    effect: { intelligence: 4 },
                    response: '妳乖乖低著頭，只看見靴子與袍角從眼前掠過。雖然好奇得發癢，卻完美演繹了「守規矩模範生」。'
                },
                {
                    text: 'B. 偷偷瞄一眼，只看一瞬間。',
                    effect: { lovePoints: 5, stamina: -2 },
                    response: '妳趁人群微微晃動的一刻抬了抬眼。陽光從御道斜斜照下，那人眉目冷峻，步伐穩重。妳只看了一瞬，卻在腦海裡留下清晰印象。',
                    flag: 'first_glance'
                },
                {
                    text: 'C. 不但偷看，還看太久，結果被嬤嬤瞪了一眼。',
                    effect: { stamina: -3 },
                    response: '妳忘了時間，眼神一路跟著那道身影走，直到一聲輕咳在耳邊響起。帶路的小宮女用眼神瘋狂暗示：快點低頭。妳只好立刻把下巴收回去。',
                    flag: 'newbie_scolded'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '太監乙',
            text: '回聖上，這一帶是新入宮秀女所，近日多了許多新人。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '哦？'
        },
        {
            type: 'narration',
            text: '那道身影似乎稍微頓了頓，卻並未停下腳步。很快，腳步聲漸行漸遠，只留下眾人仍跪在原處，大氣不敢喘。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '可以起來了。記住，以後遇到聖駕，都要這樣行禮，千萬不可多話。'
        },
        {
            type: 'dialogue',
            speaker: '秀女丙',
            text: '剛剛那就是皇上嗎？聽說他平日裡很嚴肅。'
        },
        {
            type: 'dialogue',
            speaker: '秀女丁',
            text: '我只覺得自己腿都麻了，哪還看得清。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '不論如何，今日總算算是見過聖顏了。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '我好像只看到靴子……還踩得很有氣勢。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '沒關係，第一次見老闆，看靴子就夠了。以後慢慢再看本人。'
        },

        {
            type: 'narration',
            text: '天色漸暗，一行人認路結束，各自回到房中。屋子裡點起燈火，窗紙上映出三個人影，一高一矮一歪。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '今天光是聽規矩、走路認路，我就覺得腿快不是自己的了。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '這還只是開始呢。明日起還要學規矩、練儀態、背族譜與封號。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '聽起來就像是「宮廷加強補習班」。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐呢？妳對將來有什麼打算？'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '是啊，有人想封妃，有人只想平安……妳呢？'

        },

        // 第五個選項：宣示妳的後宮人生目標
        {
            type: 'choice',
            question: '在兩位室友的注視下，妳思索了一會兒，決定先為自己訂一個「後宮人生目標」。妳會怎麼說？',
            choices: [
                {
                    text: 'A. 我嘛……目標是「活得久」，其他的慢慢再說。',
                    effect: { intelligence: 3, stamina: 3 },
                    response: '妳笑道：「活著比什麼都重要。只要頭還在脖子上，日子總有機會變好。」兩位室友先是一愣，隨即都笑了出來。',
                    flag: 'goal_survive'
                },
                {
                    text: 'B. 若真有機會得寵，我也不排斥。只是希望別被宮鬥玩死。',
                    effect: { intelligence: 4 },
                    response: '妳坦白道：「若能有點好日子過，誰會嫌棄？只是我不想為了往上爬，把自己弄得不像自己。」沈眉柔點頭說，這話她聽著很順耳。',
                    flag: 'goal_balanced'
                },
                {
                    text: 'C. 我最大的願望，是找到在宮裡也能躺平的方法。',
                    effect: { stamina: 5 },
                    response: '妳直言不諱：「要是能在不觸犯規矩的情況下，多睡一點、多吃一點，那就是我的人生勝利。」林安寧聽得眼睛發亮，彷彿找到人生導師。',
                    flag: 'goal_layflat'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '不管如何，我們三個既然分到同一間，就是有緣。往後有什麼事，可以先在屋裡商量。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '對，我力氣雖然不大，但抄東西還算快，可以幫忙抄規矩。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那以後就由我負責收集點心情報、眉柔負責判斷風向、安寧負責文書支援，我們是不是很有團隊精神？'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '吳姐姐真會說笑。這樣分工，聽起來反倒有點安心。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '那……我們算不算是結成同盟了？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '算。從今天起，本屋正式成立「東二間生存互助會」。入會條件是：不互相拖後腿。'
        },

        {
            type: 'narration',
            text: '夜色漸深，外頭的風聲吹得窗紙微微作響。屋內三盞燈火一盞盞熄了下去，只有妳還睜著眼睛，看著漆黑的屋頂。'
        },
        {
            type: 'narration',
            text: '妳回想起今日的一切：殿選時的心驚膽跳、秀女所的逼仄房間、嬤嬤洩不完的規矩、遠處那道走過御道的身影。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）好吧，臭咘咘皇帝，既然都被捲進來了，那我們就慢慢相處看看。誰怕誰。'
        },
        {
            type: 'narration',
            text: '【第一章完】妳在秀女所度過了第一個夜晚。暫時還沒有封號、沒有椒房寵愛，只有一屋子的新人與一堆規矩。但故事，才剛剛開始。'
        }
    ]
};
