// 第四章：碎玉軒初夜 - 御花園偷吃事件
const chapter4 = {
    name: '第四章：碎玉軒初夜 - 御花園偷吃事件',
    scenes: [
        {
            type: 'narration',
            text: '太后賞花宴過後第三日，一道簡短卻改變命運的口諭下來：吳氏芃秀，暫錄預備常在，安置碎玉軒，以觀後效。'
        },
        {
            type: 'narration',
            text: '這句話的實際效果是——妳要搬家了，從秀女所那間三人合租的小屋，搬到屬於妳自己的小院子。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐小姐，我剛剛去看了，碎玉軒雖然不大，但院子裡有顆超漂亮的海棠樹。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '聽起來像是「交通方便、環境清幽、小資最愛」，唯一缺點是房東是皇帝。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '有房住就不錯啦，秀女所那邊晚上打呼聲那麼大，奴婢都快背出各位的呼吸頻率了。'
        },

        // 搬進碎玉軒
        {
            type: 'narration',
            text: '午時前，妳帶著不多的行李，跟著內務府的公公來到碎玉軒。這裡位在偏東一隅，離幾處熱鬧的宮門不遠，但院子本身卻格外安靜。'
        },
        {
            type: 'narration',
            text: '院內一棵老海棠，枝幹舒展，雖然還未完全開花，卻已能想像盛開之時的熱鬧；廊下掛著兩盞小紅燈籠，顯得庭院不那麼冷清。'
        },
        {
            type: 'dialogue',
            speaker: '碎玉軒總管嬤嬤',
            text: '奴婢見過小主。老身姓鄭，是這碎玉軒的總管嬤嬤，以後小主在這裡的起居，皆由老身打理。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '這兩個是伺候的小宮女，大的叫芍藥，小的叫雀兒。再加上從府裡跟來的小梨子，便是小主身邊的正經人手了。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '芍藥給小主請安。奴婢手腳算麻利，日後小主有什麼差遣，儘管吩咐。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '雀兒也給小主請安，奴婢擅長……跑腿。真的跑得很快。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '聽起來配置很齊全：一個總指揮、一個效率擔當、一個物流專員，再加一名從小見證我黑歷史的貼身丫鬟。'
        },

        // 選擇妳的主子風格
        {
            type: 'choice',
            question: '作為碎玉軒剛上任的小主，妳打算先給手下留下怎樣的「第一印象」？',
            choices: [
                {
                    text: 'A. 親切好說話，但有底線。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳笑道：「我年紀不大，還要多仰仗大家照應。不過該守的規矩咱們也都守著，人情話都好說。」鄭嬤嬤微微點頭，眼中多了幾分認同。',
                    flag: 'soft_leader'
                },
                {
                    text: 'B. 稍微嚴肅一點，先立個規矩，免得日後不好管。',
                    effect: { intelligence: 4 },
                    response: '妳語氣放緩卻不失分寸：「我性子其實不算嚴，但宮裡不比外頭，免不得要多提醒幾句。望以後各自盡本分，有功有賞，有錯必改。」眾人神色立刻端正不少。',
                    flag: 'strict_leader'
                },
                {
                    text: 'C. 直接擺出「鹹魚主子」形象，讓大家知道妳要求不多。',
                    effect: { stamina: 4 },
                    response: '妳坦白道：「我最大願望是活得久一點、吃得好一點、睡得飽一點。別的要求不多。大家只要別把我搞死，我就覺得很感恩。」雀兒憋笑憋得臉都紅了。',
                    flag: 'saltfish_leader'
                }
            ]
        },

        {
            type: 'narration',
            text: '安置妥當後，妳在新屋裡繞了一圈：正屋一張雕花大床、一張書案、一個衣櫥與一只小小的妝台；側間則是小梨子她們住的耳房。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，奴婢幫妳把行李都放好了。咦，這包糖葫蘆是上次妳藏在箱底那一串嗎？居然還沒被妳吃完？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '小聲點，那是我最後的精神支柱。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主有所不知，宮裡零嘴雖然不少，但也要看時機與場合。吃東西若吃出事來，可就不只是掉幾顆牙那麼簡單了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）原來零食在宮裡也屬於高風險活動。'
        },

        // 下午無聊時間
        {
            type: 'narration',
            text: '午膳過後，碎玉軒安靜得只能聽見風穿過海棠枝葉的聲音。秀女所裡那種人聲鼎沸的熱鬧不見了，只剩妳和幾個丫鬟在院子裡晃來晃去。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '小主，奴婢聽說別院那頭有幾位預備常在今日也搬進去了，日後或許會有來往。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '不過眼下還是先把這裡收拾好，免得哪日有貴人過來，撞見咱們屋裡亂糟糟的。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '貴人？這裡這麼偏，應該不太會有人路過吧……'
        },

        // 如何度過第一個下午
        {
            type: 'choice',
            question: '碎玉軒的第一個下午，有點無聊。妳打算怎麼打發時間？',
            choices: [
                {
                    text: 'A. 坐在屋裡翻一翻經書與宮規，假裝自己很上進。',
                    effect: { intelligence: 4 },
                    response: '妳抱著一本《女則》坐在窗邊，從「婦人當守三從四德」一路看到眼神發直。最後默默在心裡改成「先從自己，後從睡」。'
                },
                {
                    text: 'B. 跟丫鬟們一起整理院子，順便熟悉環境。',
                    effect: { stamina: 3, intelligence: 2 },
                    response: '妳捲起袖子，和芍藥一起拔草、擦欄桿，順便把海棠樹下那塊石頭認領為「以後發呆專用座位」。'
                },
                {
                    text: 'C. 悄悄把糖葫蘆包好，計畫去御花園找個安靜角落慢慢吃。',
                    effect: { stamina: 3 },
                    response: '妳瞄了一眼院門方向，小聲對小梨子說：「走，去視察一下御花園的風景。」小梨子一看那包糖葫蘆，就心領神會地點頭了。',
                    flag: 'snack_plan'
                }
            ]
        },

        {
            type: 'narration',
            text: '不管妳怎麼安排，最後結果都差不多——太陽稍稍偏西，妳的腳步還是很自然地往御花園的方向走去。畢竟，新搬來的人，總想看看「附近環境」。'
        },

        // 御花園偷吃現場
        {
            type: 'narration',
            text: '御花園裡，殘雪未化的石徑間已有幾朵早梅探頭，湖面薄冰將融不融。花架旁吊著的風鈴跟著風輕輕撞在一起發出清脆聲響。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，這邊沒什麼人，妳可以放心……嗯，放心視察風景。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '說得好，我們要低調視察，絕對不是來野餐的。'
        },
        {
            type: 'narration',
            text: '妳在一處半新的鞦韆旁坐下，仔細確認周遭沒人注意，這才小心翼翼地從袖子裡掏出那串已經微微發黏但仍誘人的糖葫蘆。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（低聲）從大理寺後門排隊排來的味道……沒想到能陪我到這裡。'
        },
        {
            type: 'narration',
            text: '妳剛咬下一口，嘴裡酸甜炸開，一道不急不緩的男聲從不遠處傳來——'
        },
        {
            type: 'dialogue',
            speaker: '神秘男子',
            text: '這位小主，怎地一個人在此偷吃，卻不叫上旁人？'
        },
        {
            type: 'narration',
            text: '妳嚇得一抖，鞦韆繩索跟著晃了兩下，糖葫蘆差點飛出去。抬頭一看，只見一名穿著素色常服的男子立在不遠處，身後跟著一個打扇的小太監。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '（在妳身後用氣音）小姐，小心……他氣質有點不太像路人甲……'
        },

        // 面對「神秘男子」的第一反應
        {
            type: 'choice',
            question: '你還沒有完全確定對方身份，第一反應是——',
            choices: [
                {
                    text: 'A. 立刻起身行禮，當成貴人對待。',
                    effect: { intelligence: 3 },
                    response: '妳忙放下糖葫蘆起身行禮：「見過公子。」動作行雲流水，一看就有最近被嬤嬤集中訓練的成果。',
                    flag: 'polite_first'
                },
                {
                    text: 'B. 乾脆大方一點，舉起糖葫蘆：要吃一口嗎？',
                    effect: { stamina: 3, lovePoints: 3 },
                    response: '妳猶豫半瞬，索性把糖葫蘆往上一舉：「要不一起吃？」那男子像是被妳逗到了，眼裡閃過一絲笑意。',
                    flag: 'snack_share'
                },
                {
                    text: 'C. 一時慌亂，把糖葫蘆往袖子裡一塞，結果黏了一手。',
                    effect: { stamina: -2 },
                    response: '妳條件反射地把糖葫蘆往袖子裡一塞，黏得整個手臂都是糖。那男子看在眼裡，輕笑一聲：「無妨，朕又不是御膳房的帳房。」',
                    flag: 'sticky_panic'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '神秘男子',
            text: '抬起頭來。'
        },
        {
            type: 'narration',
            text: '那聲線溫和卻帶著不容違逆的力量，妳心裡「咯噔」一下，慢慢抬眼——正對上一雙熟悉的眼睛。那是在殿選、在賞花宴上都曾遠遠見過的眼睛。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……皇、皇上？'
        },
        {
            type: 'dialogue',
            speaker: '小太監',
            text: '（瞬間屈膝）萬歲爺恕罪，奴才沒攔住——'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '起來吧。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '平身。既然都認出來了，朕也不好再裝什麼路人。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）誰叫你那張臉這麼眼熟，我又不是沒考過歷史。'
        },

        // 和皇帝聊「偷吃」
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '方才看妳在這裡，一邊晃鞦韆一邊吃東西，倒像朕是客人，妳倒像是主子。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '回皇上，這是臣女從家裡帶來的……最後一串糖葫蘆。怕放久壞了，只好……及時行樂。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '及時行樂？這三個字，從秀女之口說出來，倒是新鮮。'
        },

        // 對皇上的「及時行樂」評論
        {
            type: 'choice',
            question: '面對皇帝似笑非笑的神情，妳決定——',
            choices: [
                {
                    text: 'A. 老實補充：「與其擔心明天會不會被刷下，不如先把今天的糖吃完。」',
                    effect: { intelligence: 3, lovePoints: 3 },
                    response: '妳坦然道：「陛下龍心難測，臣女小命不保的可能性永遠存在，故只能先把手上這點甜的用掉。」皇帝愣了一瞬，隨即忍俊不禁。',
                    flag: 'honest_sweet'
                },
                {
                    text: 'B. 試圖轉移話題：「其實臣女主要是在感受御花園的風。」',
                    effect: { stamina: 2 },
                    response: '妳一本正經道：「糖葫蘆只是順便，臣女主要是在體會御花園的風。」皇帝挑眉：「哦？那這風是什麼味道？」妳咬字清楚：「糖的。」',
                    flag: 'wind_taste'
                },
                {
                    text: 'C. 開玩笑自嘲：「臣女身在宮裡，能偷吃一串糖葫蘆已是極致奢華。」',
                    effect: { stamina: 3 },
                    response: '妳笑道：「臣女若能每日安穩吃飯、不被嬤嬤罵，就覺得是上天開恩。這串糖葫蘆已經是人生巔峰。」皇帝笑出聲來：「妳的巔峰也太容易滿足。」',
                    flag: 'self_deprecate'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '朕聽說，妳被安置在碎玉軒。那裡雖不華麗，倒也清靜。可還住得慣？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '回皇上，比起秀女所而言，已是天堂。有自己的床，不用和別人搶被子。只是……安靜得有點像被放生在一個高級牢房。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '高級牢房？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '是。門很精緻，窗戶也漂亮，就是打不開往外跑。'
        },
        {
            type: 'narration',
            text: '皇帝盯著妳看了片刻，眼裡那絲笑意漸漸變得深沉。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '若朕說，這牢房的鑰匙有一半在妳手上，妳信不信？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……臣女不太聰明，怕拿錯鑰匙被人當賊抓走。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '妳倒真不著急。'
        },

        // 皇帝做出今晚的決定
        {
            type: 'narration',
            text: '一陣沉默後，皇帝抬頭看了看天色，微微側身對身後小太監吩咐了幾句。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '今夜，宣碎玉軒吳氏侍寢。'
        },
        {
            type: 'dialogue',
            speaker: '小太監',
            text: '遵旨！'
        },
        {
            type: 'narration',
            text: '妳愣在鞦韆上，腦中短暫一片空白，只來得及想：糖葫蘆還沒吃完。'
        },

        // 得知翻牌後的心情
        {
            type: 'choice',
            question: '被點名侍寢，妳的第一反應是——',
            choices: [
                {
                    text: 'A. 緊張到胃抽筋，只想先找地方深呼吸。',
                    effect: { stamina: -3, lovePoints: 2 },
                    response: '妳覺得心跳一路從胸口跳到喉嚨，嘴裡的糖變得又酸又澀。回神後第一件事，就是抓著小梨子的袖子：「快，帶我回去練呼吸。」',
                    flag: 'panic_first'
                },
                {
                    text: 'B. 既緊張又有點期待：至少，人生不再只是抄規矩了。',
                    effect: { stamina: 2, intelligence: 2, lovePoints: 3 },
                    response: '妳暗暗握拳：比起每天被嬤嬤盯著站樁，或許跟皇帝說說話也不算太糟……前提是不要被當場砍頭。',
                    flag: 'mixed_feeling'
                },
                {
                    text: 'C. 腦子迅速轉動：今晚不能丟臉，得趕快擬好「生存對話稿」。',
                    effect: { intelligence: 4, lovePoints: 2 },
                    response: '妳飛快在腦中列出清單：一、不亂講話；二、不提早起問題；三、適度反應；四、千萬別把御床當自己床滾。感覺比準備科舉還認真。',
                    flag: 'plan_dialogue'
                }
            ]
        },

        // 回碎玉軒準備
        {
            type: 'narration',
            text: '回到碎玉軒後，院子像突然被丟進一陣旋風。鄭嬤嬤的聲音此起彼落，芍藥與雀兒忙前忙後，小梨子則一邊幫妳梳頭一邊碎念。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主，這是內務府送來的晚服，專門用於侍寢。妝不要畫太重，皇上素來不喜濃豔。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '水已備好，小主先沐浴更衣。奴婢會在外間候著。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '那個、那個糖葫蘆……要不要奴婢幫妳收起來？免得一會兒忘了，讓皇上以為小主是來御床上續攤吃宵夜的。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……妳提醒得很有道理。把它供起來，等我活著回來再吃。'
        },

        // 出發前最後的準備選擇
        {
            type: 'choice',
            question: '臨出發前，妳還有一點時間，打算——',
            choices: [
                {
                    text: 'A. 專心調整呼吸，在心裡默背剛擬好的「生存對話稿」。',
                    effect: { intelligence: 3 },
                    response: '妳閉上眼，默默在心裡演練：「皇上萬歲萬歲萬萬歲」「臣女不敢」「臣女知錯」。感覺自己的台詞庫非常實用。',
                    flag: 'focus_mind'
                },
                {
                    text: 'B. 和小梨子說兩句廢話壯膽。',
                    effect: { stamina: 3 },
                    response: '妳抓住小梨子的手：「如果我明早沒回來……」「小姐別說這種話！至多是累一點，應該不會掉頭的。」',
                    flag: 'chat_with_maid'
                },
                {
                    text: 'C. 靜靜看了一眼院裡的海棠樹，對自己說：別忘了初衷。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳走到窗邊，透過紙窗看著那顆還未盛開的海棠。心裡默念：活著，活得像自己。即便要去見皇帝，這一點也不能忘。',
                    flag: 'look_haitang'
                }
            ]
        },

        // 夜赴乾清宮（或暖閣）
        {
            type: 'narration',
            text: '夜色沉了下來，宮燈一盞盞亮起。妳隨傳召太監穿過寂靜的長廊，來到燈火通明的暖閣外。'
        },
        {
            type: 'dialogue',
            speaker: '通傳太監',
            text: '皇上，碎玉軒吳氏帶到。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝（內）',
            text: '宣。'
        },
        {
            type: 'narration',
            text: '門扇被輕輕推開，暖意與淡淡藥香撲面而來。皇帝穿著便服，懶懶地靠在榻上，桌上攤著一卷沒看完的奏折。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣女吳氏，叩見皇上。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '起來罷。這裡又不是早朝，不必跪那麼久。'
        },

        // 夜談：真正的第一晚
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '妳今日在御花園說，宮裡像高級牢房。到了晚上，還是這般想法？'
        },
        {
            type: 'choice',
            question: '面對皇帝主動提起白天的話題，妳怎麼回答？',
            choices: [
                {
                    text: 'A. 誠實版本：「牢房歸牢房，但今晚的牢飯看起來挺不錯。」',
                    effect: { stamina: 3, lovePoints: 4 },
                    response: '妳看了一眼桌上的茶點，老實說：「換個角度想，至少這裡暖和，有吃有喝。」皇帝失笑：「妳倒會自己找樂子。」',
                    flag: 'honest_night'
                },
                {
                    text: 'B. 謹慎版本：「臣女不敢妄言，只盼在宮中不誤規矩。」',
                    effect: { intelligence: 4 },
                    response: '妳低聲道：「今日一時失言。臣女只盼不違祖宗成憲，不辱聖恩。」皇帝微微一頷首，看妳的眼神卻柔和了些。',
                    flag: 'careful_night'
                },
                {
                    text: 'C. 反問版本：「皇上可曾覺得自己也被關在一座更大的牢裡？」',
                    effect: { intelligence: 3, lovePoints: 3 },
                    response: '妳鼓起勇氣抬眼：「若說臣女身在牢中，皇上難道便是牢外人嗎？」皇帝一怔，眼底深處閃過一絲說不清的情緒。',
                    flag: 'bold_night'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '朕自登基以來，日日對著奏摺與人頭，偶爾想找個人說說話，卻發現四周盡是算計與恐懼。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '妳倒好，進宮第一句話是怕起早，今日又在御花園偷吃。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那……皇上覺得臣女該改？'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '不用改。朕正是覺得，有人敢在朕面前做自己，反倒讓人覺得不那麼累。'
        },
        {
            type: 'narration',
            text: '那一刻，妳突然意識到：眼前這位被史書定義為「一國之君」的人，其實也只是一個很累、很需要睡覺的打工人。'
        },

        // 小小的溫柔互動
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '手給朕看看。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '啊？'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '白日裡塞糖葫蘆那一下，想必黏得不輕。'
        },
        {
            type: 'narration',
            text: '妳乖乖伸出手，指尖還有一點洗不乾淨的甜香。皇帝低頭看了看，笑道：「以後想吃什麼，讓御膳房做便是，不必再把自己袖子當糖罐。」'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '可是御膳房做的，可能沒大理寺後門的好吃。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '大理寺後門的糖葫蘆攤……朕記下了。日後若有機會出宮，帶妳去排隊。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '皇上排隊？那一整條街的人可能會嚇到跪成一排。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '那就讓他們跪著聞香好了。'
        },

        // 收尾：今晚不談後宮，只談好睡
        {
            type: 'narration',
            text: '夜更深了，燭火燒得只剩一小截。妳本以為接下來會發生那些宮女們在背後偷偷議論的事，結果皇帝只是讓人收拾了榻上的奏摺，讓妳坐在旁邊。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '朕這幾日沒睡好。妳若不嫌棄，就在這裡陪朕說說話，說累了，一起睡。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……臣女只會說一些很家常的話。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '正好。朕聽膩了朝堂上的大道理。說說妳在秀女所的囧事，或是那顆海棠樹的故事，都成。'
        },
        {
            type: 'narration',
            text: '於是妳從秀女所的規矩講到東二間的夜談，再講到碎玉軒的海棠樹和那串差點犧牲在袖子裡的糖葫蘆。皇帝時而失笑，時而靜靜聽著。'
        },
        {
            type: 'narration',
            text: '說到後來，妳靠在榻邊，聲音漸漸低下去。皇帝披了件披風在妳肩上，輕聲道：「睡罷。」那晚，什麼都沒發生，只是兩個很累的人，睡了一個難得安穩的覺。'
        },

        // 第二天的風聲與官方認定
        {
            type: 'narration',
            text: '翌日一早，碎玉軒便成了宮中小小的話題中心：聖上昨夜留宿碎玉軒的消息，不知怎地就從御前一路飄到了御膳房、繡坊與洗衣處。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐！不對，現在應該叫「小主」了——聽說內務府已經把妳的名冊改成「吳常在」。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '恭喜小主，從今日起，碎玉軒算是真正有主了。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '奴婢會再仔細打點一切，不能讓人說吳常在的院子寒酸。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '那個……糖葫蘆小主還吃嗎？奴婢昨晚看它都快孤單得哭了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '吃。這是我從「無名秀女」升級成「吳常在」的紀念糖。'
        },

        // 對這一切的總結
        {
            type: 'choice',
            question: '回想起昨晚，妳對這段突如其來的變化，有了什麼新的想法？',
            choices: [
                {
                    text: 'A. 原來皇帝並非全然可怕，只是比誰都累的人。',
                    effect: { intelligence: 4, lovePoints: 3 },
                    response: '妳在心裡默默把皇帝的形象，從「高高在上的判人生死機器」，改成了「被奏摺壓到駝背的打工皇帝」。',
                    flag: 'see_human_emperor'
                },
                {
                    text: 'B. 自己好像真的開始被捲入宮中的漩渦了。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳明白，一夜之後，自己不再只是秀女所裡可以隨時被刷掉的名字，而是會被寫進別人口中的「寵妃名單」。這既是機會，也是風險。',
                    flag: 'aware_of_storm'
                },
                {
                    text: 'C. 不管怎樣，能睡個好覺、吃完那串糖，就先當賺到了。',
                    effect: { stamina: 4, lovePoints: 2 },
                    response: '妳伸了個懶腰，對自己說：「活著、吃飽、睡好，再加一點點運氣，暫時就夠了。」',
                    flag: 'simple_happiness'
                }
            ]
        },

        {
            type: 'narration',
            text: '【第四章完】妳從碎玉軒的「預備房客」，成了名冊上真正存在的吳常在。御花園裡那串糖葫蘆成了妳與皇帝之間的小秘密，而真正的後宮故事，才正要從這個安穩的夜晚開始往不安穩的方向延伸。'
        }
    ]
};
