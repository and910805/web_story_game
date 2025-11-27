// 第三章：太后賞花宴 - 初次登場的小透明
const chapter3 = {
    name: '第三章：太后賞花宴 - 初次登場的小透明',
    scenes: [
        {
            type: 'narration',
            text: '自從傳出太后要辦「賞花小宴」，秀女所的空氣就變得比天氣還緊繃。'
        },
        {
            type: 'narration',
            text: '嬤嬤們加碼訓練，從走路、站姿、笑容到「如何優雅地拿茶杯」，全部重練一遍。'
        },
        {
            type: 'dialogue',
            speaker: '禮儀嬤嬤',
            text: '記住，今日只是「小宴」，不是妳們自己家辦喜酒。誰敢太放肆，太后娘娘一個眼神，就能把妳們打回原形。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）原形是什麼？是大理寺門口排隊買燒餅的那個我嗎？'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '吳姐姐，我好緊張，我怕一緊張就會把茶杯打翻。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '不必太慌，記住幾件事：少說話、少動手、多觀察。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '簡單來說，就是當個會呼吸的花瓶。'
        },

        // 準備造型
        {
            type: 'narration',
            text: '賞花宴當日一早，秀女所就被各路梳頭宮女、借來的首飾、還有緊張的喘氣聲塞滿。'
        },
        {
            type: 'dialogue',
            speaker: '梳頭宮女甲',
            text: '這位小主，妳的頭型不錯，可以梳高一點顯得精神。'
        },
        {
            type: 'dialogue',
            speaker: '梳頭宮女乙',
            text: '那位眉眼溫柔的，就走素淡路線吧，別跟人搶風頭。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，奴婢幫妳選了這支簪子，不算太重，又有點小花，合妳的性子。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '上次那支差點把我壓成烤鴨，這次輕一點的就好。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '放心，這支即使掉下來，頂多砸到旁邊的人。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……妳這樣說，我更緊張了。'
        },

        // 選今天的風格
        {
            type: 'choice',
            question: '面對賞花宴，妳想為自己定下今天的「出場風格」：',
            choices: [
                {
                    text: 'A. 清爽素淨，走低調路線。',
                    effect: { intelligence: 3 },
                    response: '妳選了顏色溫柔的淺綠衣裳，只插了一支小花簪。站在人群裡，不算醒目，卻很耐看。',
                    flag: 'look_simple'
                },
                {
                    text: 'B. 稍微用心打扮一下，顯得精神又不招搖。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳挑了一身淡杏色紗裙，袖口與衣襟繡了細小花紋，配上輕巧頭飾，看起來像是有認真準備，但還算收斂。',
                    flag: 'look_balanced'
                },
                {
                    text: 'C. 難得機會，稍微亮眼一點，讓人至少記得妳存在。',
                    effect: { stamina: 3 },
                    response: '妳換上略鮮明的桃粉色裙子，搭配幾朵小花點綴。照鏡子時，連妳自己都愣了一下：今天的妳，看起來不像平時那麼想躺平。',
                    flag: 'look_bold'
                }
            ]
        },

        {
            type: 'narration',
            text: '一行新人依序排好隊，隨著帶路宮女往御花園方向走去。冬末的風仍有些冷，但花架下已經掛滿了各色琳瑯，顯然有人提前佈置過。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '待會兒進園，先給太后娘娘、皇后娘娘行禮，再聽宣示。沒有點名，不可隨意上前。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '我、我怕一緊張行禮行錯。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '那妳就跟著我們一起，一個動作都別自己創作就好。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '對，這不是才藝表演，不需要即興發揮。'
        },

        // 入場，太后與皇后初登場
        {
            type: 'narration',
            text: '御花園內，錦帳微垂，景榭上鋪著軟墊與暖爐。太后居中而坐，皇后端莊地坐在一側，另一側稍後一點的位置，是衣著華麗的華妃。其他嬪妃依序落座。'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '新入宮秀女，叩見太后娘娘、皇后娘娘、各位娘娘——'
        },
        {
            type: 'narration',
            text: '妳跟著眾人一起跪下，額頭幾乎貼到冰冷的石板上。'
        },
        {
            type: 'dialogue',
            speaker: '眾秀女',
            text: '恭祝太后娘娘萬福金安，皇后娘娘千歲千歲千千歲。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '起來罷。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '今兒個叫爾等來，不過是看看年輕面孔，也讓宮裡熱鬧幾分。別太拘束。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '是啊，本宮也好久沒看見這麼多新臉了。後宮嘛，得時常添點新鮮花兒。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）怎麼聽著像在逛花市挑花……'
        },

        // 初次集體「被掃描」
        {
            type: 'narration',
            text: '太后目光從人群前排慢慢掃過，一路看向後排。妳努力維持之前練好的「標準微笑」，假裝自己只是背景。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '那個穿淺綠的，抬抬頭。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……是。'
        },
        {
            type: 'narration',
            text: '所有視線一起刷地集中到妳身上。妳只覺得後背一陣發涼。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '是大理寺吳少卿之女？前幾日殿選時，說自己「怕起早」的，就是妳？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……回太后，是。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '哎呀，好大的膽子。入宮第一句話就是怕起早，這還想不想在宮裡活？'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '妹妹莫要嚇著孩子。年紀小，說話直些，也不見得是壞事。'
        },

        // 在太后前的第一段回應
        {
            type: 'choice',
            question: '面對太后與華妃，你得說點什麼來挽回形象：',
            choices: [
                {
                    text: 'A. 走老實路線：「臣女確實怕起早，但更怕壞了規矩。」',
                    effect: { intelligence: 3 },
                    response: '妳穩住心神道：「臣女怕起早，是怕精神不濟誤了宮中規矩。但既入宮，自當按時起身，不敢懈怠。」太后「哼」了一聲，卻沒再追究。',
                    flag: 'front_honest'
                },
                {
                    text: 'B. 走幽默自嘲：「臣女現在已經被嬤嬤訓練得，比雞還早起了。」',
                    effect: { stamina: 3 },
                    response: '妳小心翼翼地笑了笑：「這幾日被嬤嬤們教導，臣女起得比雞早，睡得比狗晚，如今早起已成習慣。」華妃笑出聲來，太后也露出一絲不易察覺的笑意。',
                    flag: 'front_humor'
                },
                {
                    text: 'C. 走可憐路線：「臣女一時緊張失言，日後必多加約束。」',
                    effect: { stamina: 2, intelligence: 2 },
                    response: '妳垂下眼：「臣女那日初入宮見聖顏，一時緊張說錯了話，實不敢怠忽宮規。還望太后娘娘恕罪。」太后淡淡道：「知錯能改，還算懂事。」',
                    flag: 'front_soft'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '太后',
            text: '罷了，且看日後表現吧。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '這樣也好，後宮總得有幾個會說實話的才有趣。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '退下罷。'
        },
        {
            type: 'narration',
            text: '妳終於重新退回隊伍，感覺自己剛剛在鬼門關口走了一圈。'
        },

        // 宴席進行，前排才藝表演
        {
            type: 'narration',
            text: '賞花宴正式開始。御膳房送上清淡點心與茶水，前排幾位出身高、才藝好的秀女被點名上前獻藝。'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '刑部侍郎之女沈氏，擅琴，奉太后與皇后之命，前來一曲。'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '（起身，向妳們微微一笑）我先去了。'
        },
        {
            type: 'narration',
            text: '沈眉柔坐到琴前，指尖落下，曲聲婉轉如流水，整個御花園都安靜了一瞬。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '好厲害……我光看就手心冒汗。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我手心冒汗是因為在想：萬一被點到我要表演什麼。'
        },

        // 你會不會被點名？
        {
            type: 'choice',
            question: '才藝表演一個接一個，妳心裡有點打鼓。此時妳的期望是：',
            choices: [
                {
                    text: 'A. 拜託不要點我，我只想平安度過今天。',
                    effect: { stamina: 3 },
                    response: '妳在心裡瘋狂許願：點誰都可以，別點我。每當禮官吸氣，你的心就跟著一縮。',
                    flag: 'no_spotlight'
                },
                {
                    text: 'B. 有點想被點，看這是不是機會。',
                    effect: { intelligence: 3 },
                    response: '妳握緊衣角：若能好好表現，也許能在太后面前留下印象。只是手心的汗，出賣了妳其實很緊張。',
                    flag: 'want_spotlight'
                },
                {
                    text: 'C. 既期待又怕受傷害，純看命運安排。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳在心裡想：若被點，就拼一把；若沒點，那就表示天意讓妳再多躲一會兒。',
                    flag: 'fate_spotlight'
                }
            ]
        },

        {
            type: 'narration',
            text: '幸好，這輪才藝表演最後還是停在前幾排，妳安然無恙，成功當到了「安靜吃瓜群眾」。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '這幾個倒還像樣。只是，太過規矩了些，少了點趣味。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '後宮要的是安穩，不是戲班子。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '太后說的是。'
        },

        // 臭咘咘來客串
        {
            type: 'narration',
            text: '正當宴席漸入後段，一陣太監清亮的通傳聲自遠處響起。'
        },
        {
            type: 'dialogue',
            speaker: '太監甲',
            text: '皇上駕到——'
        },
        {
            type: 'narration',
            text: '妳心裡一驚，又跟著所有人一齊起身行禮。'
        },
        {
            type: 'dialogue',
            speaker: '眾人',
            text: '恭迎皇上。'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '母后、皇后，以及諸位愛妃免禮。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '怎地今日得空來賞花？不忙著處理奏摺了？'
        },
        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '聽說母后辦了場賞花宴，挑了不少新人入宮，兒臣也想來瞧瞧。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '皇上既來，這園子可就真正熱鬧了。'
        },

        {
            type: 'narration',
            text: '皇帝落座後，視線不著痕跡地掃過下方的秀女隊伍。妳努力讓自己融入背景，卻又忍不住在心裡默念：別看我別看我別看我——'
        },

        // 有沒有對到眼？
        {
            type: 'choice',
            question: '皇帝目光掃過來的一瞬間，妳的反應是：',
            choices: [
                {
                    text: 'A. 完全不抬眼，當作自己是御花園裡的一顆石頭。',
                    effect: { intelligence: 3 },
                    response: '妳維持著完美教科書式的低頭角度，只看得見自己裙擺的一角。皇帝視線略過妳，沒有停留。',
                    flag: 'no_eye_contact'
                },
                {
                    text: 'B. 微微抬眼，剛好對上他的視線一瞬間。',
                    effect: { lovePoints: 5 },
                    response: '妳鼓起勇氣抬了抬眼。那人眼神略帶探尋與笑意，與妳短暫相撞。妳立刻又低下頭，心跳莫名加快。',
                    flag: 'eye_contact_short'
                },
                {
                    text: 'C. 抬頭太久，被旁邊嬤嬤輕咳提醒。',
                    effect: { stamina: -2, lovePoints: 3 },
                    response: '妳看得有點出神，直到禮儀嬤嬤在旁邊輕咳了一聲，妳才猛地低頭。皇帝似乎注意到這點小插曲，嘴角微微上揚。',
                    flag: 'eye_contact_long'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '臭咘咘皇帝',
            text: '母后，這些新進秀女，可有人讓您覺得順眼？'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '有幾個還成。其餘的，還得日後慢慢看。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '皇上若有看中的，不如趁今天就留下名冊，省得日後還要打聽。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '妹妹說笑了，後宮之事向來講究緣分。'
        },

        // 小插曲：茶杯事件
        {
            type: 'narration',
            text: '正說話間，前排某位緊張的秀女手一抖，竟將茶杯打翻，茶水濺到自己裙角與地上的花瓣上。'
        },
        {
            type: 'dialogue',
            speaker: '緊張秀女',
            text: '臣、臣女該死！'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '哎呀，這才剛進宮就手腳不利索，往後還不知要闖多少禍。'
        },
        {
            type: 'dialogue',
            speaker: '太后',
            text: '拖下去，罰抄規矩三十遍。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '且讓她記個教訓罷。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）突然覺得自己能坐好不翻杯，就是很大的福氣。'
        },

        // 第六個選項：你心裡怎麼看這件小事故
        {
            type: 'choice',
            question: '看到這一幕，妳心裡的想法是：',
            choices: [
                {
                    text: 'A. 規矩太可怕了，以後一定要跟茶杯保持安全距離。',
                    effect: { stamina: 3 },
                    response: '妳默默在心裡提醒自己：持杯三分力，穩手保平安。'
                },
                {
                    text: 'B. 記下太后、皇后、華妃各自的反應，當作性格觀察。',
                    effect: { intelligence: 4 },
                    response: '妳敏銳地察覺：太后重規矩，皇后講情面，華妃愛看笑話。這些，日後說不定都用得上。',
                    flag: 'observe_three'
                },
                {
                    text: 'C. 突然很慶幸自己今天沒被點名上前表演。',
                    effect: { stamina: 2, intelligence: 2 },
                    response: '妳在心裡對命運比了個大拇指：謝謝沒點名。'
                }
            ]
        },

        // 宴後宣旨：秀女留用分配
        {
            type: 'narration',
            text: '賞花宴在一片歌聲與寒風中漸漸接近尾聲。太后與皇后離席後，皇帝也起身告退。眾人再次行禮，只剩御花園裡散落的花瓣與茶香。'
        },
        {
            type: 'dialogue',
            speaker: '帶路小宮女',
            text: '諸位小主，別急著走，還有宣旨。'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '奉太后與皇后娘娘懿旨——'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '今次殿選新進秀女，凡品行端正、儀態尚可者，暫錄為「預備常在」，分別安置於各處偏院，以觀後效。'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '吳氏芃秀——'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……臣女在。'
        },
        {
            type: 'dialogue',
            speaker: '禮官',
            text: '暫錄為預備常在，安置碎玉軒候補，待日後再議封號。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '吳姐姐，恭喜妳……'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '碎玉軒雖不算最華貴，卻清靜。對妳來說，未必不是好事。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '等等，「碎玉軒」聽起來像是以後我會常常在那裡摔碎東西的地方。'
        },

        // 第七個選項：對「被安排住處」的心情
        {
            type: 'choice',
            question: '聽到自己要搬去碎玉軒，妳的第一感受是：',
            choices: [
                {
                    text: 'A. 有種「升級了」的實感——終於不是新人宿舍了。',
                    effect: { stamina: 3 },
                    response: '妳想起秀女所擁擠的房間，心裡有種說不上來的輕鬆：至少，接下來會有屬於自己的院子。'
                },
                {
                    text: 'B. 感覺壓力變大了，因為被點名了，就再也不是純背景板。',
                    effect: { intelligence: 3 },
                    response: '妳在心裡默默想：之前的自己，只對自己的失敗負責。以後，說不定有人會因為妳的每一步而起風。'
                },
                {
                    text: 'C. 又期待又害怕，覺得人生開始進入「實習期」。',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳覺得這一切有點像被迫轉職：從「秀女新手村」畢業，進入「預備常在實習期」。'
                }
            ]
        },

        {
            type: 'narration',
            text: '宴席散去，妳跟著東二間的小伙伴回到秀女所。行李還沒打包，心卻已經先住進了那個陌生的名字裡——碎玉軒。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '妳搬走之後，我會不會很寂寞……'
        },
        {
            type: 'dialogue',
            speaker: '沈眉柔',
            text: '安寧，宮裡人來人去是常事。我們與其怕別人離開，不如想想怎樣能保持聯繫。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '說得好像我要出嫁一樣……不過放心，我又不是搬到月球。閒時還是可以偷偷來找你們抱怨人生。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧',
            text: '那說好了，不許忘記我們。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我這人記仇特別久，怎麼會忘記一起被嬤嬤罵的戰友。'
        },

        {
            type: 'narration',
            text: '夜裡，秀女所的燈火一盞盞熄滅。妳在鋪上躺下，腦中卻滿是今日御花園中的畫面：太后的目光、皇后的笑、華妃的揶揄，還有那道短暫與妳視線相遇的身影。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（內心）臭咘咘皇帝，今天只是我這個新人在宮裡的第三天。以後的日子，我們慢慢再算帳。'
        },
        {
            type: 'narration',
            text: '【第三章完】妳從「秀女新手村」正式邁出半步，朝著真正的後宮生活走去。碎玉軒在前方等著妳，而故事，才剛從序曲進入第一樂章。'
        }
    ]
};
