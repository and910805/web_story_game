// 第六章：藥湯與小灶 - 後宮不只有甜的
const chapter6 = {
    name: '第六章：藥湯與小灶 - 後宮不只有甜的',
    scenes: [
        {
            type: 'narration',
            text: '成為吳常在之後的第三個夜晚，皇帝沒有再來碎玉軒。這對整個後宮來說是再平常不過的事，對剛剛「出道」的妳來說，卻是種微妙的新體驗。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '小主，今晚燈還是要掛兩盞嗎？萬一聖駕忽然降臨……'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '掛一盞就好。再掛多了看起來像在辦喜宴，容易被隔壁舉報吵。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主說笑了。這幾日周圍幾處院子，眼神都往咱們碎玉軒這邊飄。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，這叫流量。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '流量太大也會被沖走的。先守著自家門檻不被淹比較重要。'
        },

        // 等牌 vs 自己找事做
        {
            type: 'choice',
            question: '連著幾晚都沒有宣召，妳要怎麼看待這件事？',
            choices: [
                {
                    text: 'A. 鬆口氣：終於可以補眠了。',
                    effect: { stamina: 4 },
                    response: '妳伸了個大懶腰：「不被點名也是一種福氣。至少今晚可以安心平躺。」',
                    flag: 'cooldown_relief'
                },
                {
                    text: 'B. 略感不安：剛得寵就冷一冷，會不會是壞兆頭？',
                    effect: { intelligence: 3 },
                    response: '妳皺眉想了想：在這種地方，被看見與被遺忘都是風險。只是性質不同罷了。',
                    flag: 'cooldown_worry'
                },
                {
                    text: 'C. 當成觀察期：趁這段時間摸清規矩與形勢。',
                    effect: { intelligence: 4, stamina: 1 },
                    response: '妳暗暗記下：暫時的平靜，或許是老天給妳整理筆記的時間。',
                    flag: 'cooldown_study'
                }
            ]
        },

        {
            type: 'narration',
            text: '第二日清晨，碎玉軒照例起火生灶。海棠樹上的花苞比前幾日更鼓了些，仿佛在等一場合適的雨。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '小主，小灶那頭傳話來，問今日可有什麼特別想吃的。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小灶是給小主補身子用的，旁人想要還得排隊。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '補身子我理解，可別補到最後補成個人形湯圓出不去。'
        },

        // 小灶要什麼菜
        {
            type: 'choice',
            question: '第一次正式開「碎玉軒小灶」，妳決定什麼路線？',
            choices: [
                {
                    text: 'A. 清淡養胃為主，別讓御膳房覺得妳嘴太挑。',
                    effect: { intelligence: 3 },
                    response: '妳吩咐道：「就做些清粥小菜，多放點蔬菜。別太油膩。」御膳房回話時語氣頗為輕鬆，顯然覺得妳算好伺候。',
                    flag: 'kitchen_light'
                },
                {
                    text: 'B. 點幾樣家鄉菜，安撫自己的味蕾與鄉愁。',
                    effect: { stamina: 3 },
                    response: '妳讓小太監轉達了幾道吳府常吃的小菜。午膳時，熟悉的味道勾起不少記憶，心裡也不那麼漂泊了。',
                    flag: 'kitchen_hometown'
                },
                {
                    text: 'C. 故意點最普通的菜，先探探御膳房的態度。',
                    effect: { intelligence: 4 },
                    response: '妳只要了白粥與兩道簡單小菜。御膳房那頭沉默了一下，最後補送了幾樣點心，似乎在試探妳是不是故意低調。',
                    flag: 'kitchen_test'
                }
            ]
        },

        {
            type: 'narration',
            text: '午膳過後，日頭正烈，院子裡卻安靜得有點過頭。妳拿著一卷經書在廊下走來走去，字看進去的少，心裡想的卻是別的事。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐在想什麼？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '想著在這裡吃，會不會連心都被御膳房調味了。'
        },

        // 太醫院送藥湯
        {
            type: 'narration',
            text: '正說著，門外又有人通報——這一次不是御膳房，而是太醫院。'
        },
        {
            type: 'dialogue',
            speaker: '太醫院小太監',
            text: '吳常在在否？奉太醫院與內務府之命，凡得幸嬪妃，例送調理藥湯一帖。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '調理藥湯？'
        },
        {
            type: 'dialogue',
            speaker: '太醫院小太監',
            text: '是安神、和血、寧氣之用。這是方子與藥盅，按例需在奴才面前服下。請常在恕罪，奴才只是奉命行事。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '按例？那別院那些得寵的小主，也都喝這個？'
        },
        {
            type: 'dialogue',
            speaker: '太醫院小太監',
            text: '回常在，是。這是多年前定下的規矩。'
        },
        {
            type: 'narration',
            text: '藥盅端上來，黑得發亮，藥香裡混著一絲辨不出的苦味，像是把好多種東西一起丟進鍋裡煮出來的。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，聞起來……有點可怕。'
        },

        // 如何面對這碗藥湯（關鍵選擇）
        {
            type: 'choice',
            question: '這碗「得寵後的例行藥湯」，妳打算怎麼處理？',
            choices: [
                {
                    text: 'A. 乖乖喝下去，按規矩辦事，先活在體制內。',
                    effect: { intelligence: 2, stamina: -2 },
                    response: '妳接過藥盅，一口氣喝下，苦味從舌尖一直苦到心裡。太醫院的小太監看見妳喝得乾乾淨淨，露出放心的神色。',
                    flag: 'potion_drink'
                },
                {
                    text: 'B. 裝作喝了，大部分悄悄倒進袖裡預藏的帕子，只沾一點唇。',
                    effect: { intelligence: 4, stamina: -1 },
                    response: '妳先輕啜一口，略微仰頭，趁著掩唇咳嗽的功夫，悄悄讓大半藥湯順著袖口流進早已塞好的粗布帕子裡。太醫院的小太監在不遠處瞇著眼看，似乎沒起疑心。',
                    flag: 'potion_fake'
                },
                {
                    text: 'C. 當場提出疑問，要求見方子再決定怎麼喝。',
                    effect: { intelligence: 4, stamina: -2 },
                    response: '妳抬眼道：「勞煩把方子放近些，臣妾雖不懂醫理，總想知道自己喝的是什麼。」小太監一時語塞，只得把紙遞上。院裡空氣瞬間緊繃起來。',
                    flag: 'potion_question'
                }
            ]
        },

        // 如果選 C，補一段（描述但不做真分支，只當劇情）
        {
            type: 'narration',
            text: '方子上寫著幾味常見藥材：酸棗仁、茯神、當歸、川芎、甘草……看似平平無奇，卻又讓人說不出哪裡不對勁。妳不是太醫，卻隱約覺得，這碗藥不單單是「安神」那麼簡單。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主，太醫院行事向來與內務府、宮規相合。就算心裡有疑，也切莫當著外人問得太細。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我知道。只是……喝進肚子的東西，總得問問自己願不願意。'
        },

        {
            type: 'narration',
            text: '太醫院的人離開後，碎玉軒一時沉默。海棠樹的影子落在地上，像一張張細碎的網，讓人感覺到一種看不見的束縛。'
        },

        // 晚上和小伙伴「遠距離討論」
        {
            type: 'narration',
            text: '傍晚時分，值房的小太監送來一封由內務府轉交的「例行問候信」，落款卻是妳在秀女所時的室友——沈眉柔。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主，這信是從別院那頭繞了一圈才送來的，肯定是沈姑娘費了不少心思。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '快念給我聽。'
        },
        {
            type: 'narration',
            text: '信裡多是些問候碎語：「近來是否安好」「碎玉軒可暖」之類。但字縫間摻雜幾句古詩，若不仔細看，很容易略過。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，這幾句詩怪怪的。什麼「良藥苦口利於病，不可盡信醫與卿」？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那不是原句。這是眉柔在提醒我：藥不止治病，也可以治麻煩。'
        },

        // 對信件的回應方式
        {
            type: 'choice',
            question: '妳打算如何回這封有點「暗號味」的信？',
            choices: [
                {
                    text: 'A. 暗示自己已經小心處理，不必太擔心。',
                    effect: { intelligence: 3 },
                    response: '妳提筆回道：「宮中事多，近日亦得一碗苦茶，所幸尚能分辨冷熱。」熟人一看，就知道妳沒全盤吞下。',
                    flag: 'reply_safe'
                },
                {
                    text: 'B. 假裝什麼都不懂，只回家常，避免信件被看出端倪。',
                    effect: { stamina: 3 },
                    response: '妳只寫些碎玉軒海棠幾時開、雀兒跑得多快之類的日常，像一封真的「閒聊信」。這樣最安全。',
                    flag: 'reply_plain'
                },
                {
                    text: 'C. 乾脆寫明自己心存疑慮，希望她幫忙打聽更多。',
                    effect: { intelligence: 4, stamina: -1 },
                    response: '妳點明：「近日得苦茶一盅，方子略怪，尚望好友替我尋問良醫。」這是把信押在彼此的信任上了。',
                    flag: 'reply_risk'
                }
            ]
        },

        // 晚上皇帝沒來，妳自己內心 OS
        {
            type: 'narration',
            text: '那一夜，皇帝依舊沒有來。燈火安靜燃著，窗紙上映出海棠樹的影子。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臭咘咘皇帝，大概正被奏摺跟人頭包圍著吧。哪有空惦記我這碗藥湯喝了沒有。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，如果有一天，皇上也得喝一碗「規矩裡的苦藥」，他會不會也想偷倒掉？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '他沒有袖子那麼大，裝不下。'
        },

        // 第二天被叫去參加「經筵抄寫」
        {
            type: 'narration',
            text: '第二天一早，坤寧宮那頭傳來消息：皇后要選幾位脾性穩妥的嬪妃輪流去佛堂抄寫經卷，以祈國泰民安。妳赫然在冊。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '這既是差事，也是姿態。能去佛堂抄經的，多半是皇后認為「還算可靠」的人。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '可靠的定義是：至少不會當場把經書畫成話本。'
        },

        {
            type: 'narration',
            text: '佛堂裡煙霧裊裊，燈影柔和。幾位嬪妃分坐兩側，面前擺著紙筆與經卷。妳在最後一席坐下，正要研墨時，一個熟悉的側臉映入眼簾——那是沈眉柔。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '（極輕聲）吳姐姐。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（同樣壓低聲音）原來妳也被列入「可靠名單」。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '可靠，或者說是方便看在眼前的人。'
        },

        // 抄經時的小對話
        {
            type: 'narration',
            text: '經卷上的字一行一行排開，妳的筆卻不時停在半空中。沈眉柔趁著換墨時，低聲丟出一句：'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '關於那碗藥，妳……'
        },
        {
            type: 'choice',
            question: '少有的面對面機會，妳要給她什麼程度的答案？',
            choices: [
                {
                    text: 'A. 只說「我會小心」，不講細節。',
                    effect: { intelligence: 3 },
                    response: '妳眼睛盯著經卷，嘴角幾乎沒動：「我喝得不快，留得住心。」沈眉柔點了點頭，不再多問。',
                    flag: 'face_safe'
                },
                {
                    text: 'B. 悄聲說明自己沒有全喝，還保留了一些。',
                    effect: { intelligence: 4, stamina: -1 },
                    response: '妳借著擰帕子的動作小聲道：「我袖子裡的帕子，比藥盅還重。」沈眉柔呼出一口氣，顯然鬆了不少。',
                    flag: 'face_detail'
                },
                {
                    text: 'C. 問她：「妳那邊有沒有其他說法？」',
                    effect: { intelligence: 4 },
                    response: '妳低聲問：「妳那邊，可有聽到什麼？」沈眉柔指尖停了停，回一句：「有些話，適合寫在經卷邊角，而不是說出口。」',
                    flag: 'face_askinfo'
                }
            ]
        },

        {
            type: 'narration',
            text: '一炷香的時間很快過去。離開佛堂前，皇后遠遠看了妳與沈眉柔一眼，眼神像是在記住什麼。'
        },

        // 回到碎玉軒，收到御醫複診
        {
            type: 'narration',
            text: '回到碎玉軒沒多久，那位昨日送藥的小太監又來了，這回身後多了一名太醫。'
        },
        {
            type: 'dialogue',
            speaker: '太醫',
            text: '吳常在，奉旨前來把脈，看看昨夜藥湯服用情況。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……原來還有複診。'
        },
        {
            type: 'dialogue',
            speaker: '太醫',
            text: '宮中凡事講個「有始有終」。請小主伸手。'
        },

        // 把脈時的態度
        {
            type: 'choice',
            question: '面對太醫把脈，妳怎麼表現？',
            choices: [
                {
                    text: 'A. 裝得若無其事，像真的有乖乖吃藥。',
                    effect: { intelligence: 3 },
                    response: '妳平靜伸手，脈象自然穩定。太醫摸了摸鬚：「氣血尚可，藥也不算太重。」',
                    flag: 'pulse_calm'
                },
                {
                    text: 'B. 稍微透露自己不太耐苦藥，看他反應。',
                    effect: { intelligence: 3, stamina: 1 },
                    response: '妳淡淡道：「昨夜藥苦得很，小女流有點吃不消。」太醫眼神一轉：「小主若覺得過苦，下回可稍加紅棗。苦裡帶甜，較易入口。」',
                    flag: 'pulse_hint'
                },
                {
                    text: 'C. 試探問一句：「這藥，真的是安神用？」',
                    effect: { intelligence: 4, stamina: -1 },
                    response: '妳壓低聲音：「太醫，這方子……真是只有安神之效？」太醫手指微頓，卻仍保持著笑意：「小主多慮。宮中之藥，向來不敢亂來。」但妳聽得出，他沒正面回答。',
                    flag: 'pulse_probe'
                }
            ]
        },

        {
            type: 'narration',
            text: '太醫與小太監離去後，碎玉軒的門再次闔上，彷彿隔絕了外頭所有腳步聲。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主今日的應對，比前幾日老練多了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '人被端著藥盅追著喝，自然學得快。'
        },

        // 晚上，皇帝終於出現一次（短篇幅）
        {
            type: 'narration',
            text: '這一夜，傳召來得很晚。燈油已經快燒到底，通傳太監才匆匆趕到：皇上今晚在御花園暖閣，點名要吳常在陪同看燈。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '小主小主，這算是「加班」還是「約會」？'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '別胡說，伺候聖駕都是差事。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '差事就差事，只要今天沒有附贈藥湯，我都可以勉強當成賞花局。'
        },

        {
            type: 'narration',
            text: '御花園暖閣裡，燈籠一排排掛著，映得湖面一片金紅。皇帝站在欄杆旁，聽見妳的腳步聲，回頭看了一眼。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '妳來了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣妾叩見皇上。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '免禮。這幾日服用宮中例湯，可還習慣？'
        },

        // 皇帝居然知道藥湯這件事
        {
            type: 'choice',
            question: '面對皇帝親口提起藥湯，妳要怎麼回答？',
            choices: [
                {
                    text: 'A. 如實說「很苦，但能忍」。',
                    effect: { intelligence: 3, lovePoints: 3 },
                    response: '妳坦然道：「苦得很，不過既是宮中例制，臣妾也只能乖乖喝。」皇帝眉心略皺，卻沒多說什麼。',
                    flag: 'kingpotion_honest'
                },
                {
                    text: 'B. 帶點抱怨：「苦到懷疑人生，但應該對陛下有利就行。」',
                    effect: { stamina: 3, lovePoints: 4 },
                    response: '妳苦笑：「苦到讓人懷疑人生，不過想想若是為了陛下，苦一點也還能忍。」皇帝側過頭看了妳一眼，眼神變得柔和些。',
                    flag: 'kingpotion_joke'
                },
                {
                    text: 'C. 反問：「這樣的藥湯，皇上喝過嗎？」',
                    effect: { intelligence: 4, lovePoints: 3 },
                    response: '妳忽然問：「陛下，這種藥，您喝過嗎？」皇帝一愣，隨即失笑：「朕若也要照例喝，太醫院怕是早就造反了。」',
                    flag: 'kingpotion_rebound'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '宮中許多規矩，都是前朝留下的。不喝，會有人說違曠先例；喝多了，又傷了人。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那皇上打算怎麼辦？'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '先記在心裡。日後若有機會改，朕不想留下太多讓人怨的「例」。'
        },
        {
            type: 'narration',
            text: '他說這話時，眼神落在湖面那些被燈火劃出碎光的水紋上，像是看見了某種未來的形狀。'
        },

        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '妳很怕苦？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '怕，但更怕不知道自己為什麼要吃苦。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '若這苦是為了保護妳，而非限制妳呢？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那至少，得有人先告訴我真相。'
        },
        {
            type: 'narration',
            text: '皇帝愣了一瞬，隨即笑了笑，沒有再深究。只是那晚散場時，他特地吩咐太監：御花園回程路上，不必再點那麼多燈，免得刺眼。'
        },

        // 收尾：本章的心境總結
        {
            type: 'narration',
            text: '回到碎玉軒時，夜已深，海棠樹在月下靜靜地站著。妳抬頭看它，忽然覺得自己和那樹有點像——被種在這裡，風雨怎樣都得扛。'
        },
        {
            type: 'choice',
            question: '經過藥湯、小灶、佛堂與暖閣這幾日，妳對後宮的理解又多了一層：',
            choices: [
                {
                    text: 'A. 規矩像一層看不見的網，連甜食都可能被算進去。',
                    effect: { intelligence: 4 },
                    response: '妳想起那串糖葫蘆，又想起那碗黑得發亮的藥湯，心裡明白了：在這裡，甜與苦從來不分家。',
                    flag: 'see_net'
                },
                {
                    text: 'B. 皇后、華妃、太醫院、御膳房，每一條線都牽著妳。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳開始在心裡畫線：哪條通往坤寧宮，哪條繞去華妃宮，哪條是太醫院，哪條是御膳房。自己，就站在這些線交錯的中心。',
                    flag: 'see_lines'
                },
                {
                    text: 'C. 不管局面多複雜，至少還能決定自己笑不笑、吃不吃、說不說。',
                    effect: { stamina: 4, intelligence: 2 },
                    response: '妳握緊袖子，對自己說：只要還能選擇「今天要不要吐槽一句」，那就還沒全輸。',
                    flag: 'see_choice'
                }
            ]
        },
        {
            type: 'narration',
            text: '【第六章完】妳學會了在甜與苦之間挑一點點主動：可以是藏在袖子裡的帕子，也可以是一句不肯閉嘴的問題。後宮的局，還遠沒真正開打，但棋盤已經悄悄佈好。'
        }
    ]
};
