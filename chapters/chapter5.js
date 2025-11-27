// 第五章：碎玉軒風聲 - 小常在也要上班
const chapter5 = {
    name: '第五章：碎玉軒風聲 - 小常在也要上班',
    scenes: [
        {
            type: 'narration',
            text: '成為「吳常在」的第一個清晨，妳是被一股若有若無的香味與過分輕手輕腳的腳步聲吵醒的。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '小、小主……天快亮了，奴婢、奴婢來看看妳睡得好不好……'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（迷迷糊糊）睡得好好的，被妳看的就不太好睡了……'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主若是再不起來，一會兒各處來道喜的人怕要把碎玉軒門檻踩斷了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……什麼道喜？哦，我想起來了，我昨天升職了。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐，妳現在是「吳常在」。昨晚奴婢在外頭守了一夜，回來就聽御膳房說，早晨起來全宮都知道「碎玉軒開張大吉」。'
        },

        // 第一次面對「被寵之後的眼光」
        {
            type: 'choice',
            question: '丫鬟們看妳的眼神都不太一樣，妳打算怎麼定調自己的態度？',
            choices: [
                {
                    text: 'A. 裝沒事一樣，還是原本的鹹魚模式。',
                    effect: { stamina: 3 },
                    response: '妳打了個呵欠：「我還是昨天那條鹹魚，多睡一會兒比較實在。」幾個丫鬟憋笑，氣氛倒輕鬆了些。',
                    flag: 'lowkey_after_favor'
                },
                {
                    text: 'B. 微微收斂，語氣比以前更穩重些。',
                    effect: { intelligence: 3 },
                    response: '妳坐起身，語氣淡淡：「不過是吳常在，算不得什麼大事，該做什麼還是照舊。」鄭嬤嬤在一旁看著，眼神頗為欣賞。',
                    flag: 'steady_after_favor'
                },
                {
                    text: 'C. 開玩笑帶過：「大家這樣看我，我會以為自己變成佛像。」',
                    effect: { stamina: 2, intelligence: 2 },
                    response: '妳捂著臉笑：「別那樣看我，我又沒有金身，只是昨晚睡在比較貴的床上。」丫鬟們齊齊笑出聲，緊張氣氛消散不少。',
                    flag: 'joke_after_favor'
                }
            ]
        },

        {
            type: 'narration',
            text: '梳洗過後，碎玉軒門外果然熱鬧起來。內務府送來新的名冊，御膳房送來特別加菜的早膳，尚衣局也派人來重新量了妳的尺寸。'
        },
        {
            type: 'dialogue',
            speaker: '內務府管事',
            text: '吳常在，這是今後每月的例銀與月例，請小主過目畫押。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '這麼厚一疊……是我這輩子第一次正式領工資。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主，這叫俸祿，不叫工資。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '說白了，不都是上班換來的錢。'
        },

        // 如何運用第一筆「宮中薪水」
        {
            type: 'choice',
            question: '面對第一筆真正意義上的「宮中俸祿」，妳打算怎麼用？',
            choices: [
                {
                    text: 'A. 先分一部分獎勵身邊的人，收買人心。',
                    effect: { intelligence: 3, stamina: 1 },
                    response: '妳笑道：「這回大家辛苦了，各人都分些銀子去添件新衣裳。」丫鬟們喜出望外，對妳的忠誠度肉眼可見地上升。',
                    flag: 'share_salary'
                },
                {
                    text: 'B. 全部記在小帳本裡，準備慢慢存著。安全感最重要。',
                    effect: { intelligence: 4 },
                    response: '妳取出一個小本子，把銀數一筆筆記好，默默在心中算著：如果我不亂花，大概能活多久不挨餓。',
                    flag: 'save_salary'
                },
                {
                    text: 'C. 留一點身邊用，剩下的托信回娘家，讓家人寬心。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳吩咐鄭嬤嬤：「勞煩替我寫封家書，附上一點銀兩。讓家裡知道，我在宮裡吃得飽。」心裡也踏實了些。',
                    flag: 'send_home_salary'
                }
            ]
        },

        // 早膳與宮中八卦
        {
            type: 'narration',
            text: '早膳比平日豐盛一些，多了兩道精緻小菜和一碗銀耳蓮子羹。飯桌上，話題自然離不開昨晚。'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '奴婢一大早去打水，路過御膳房，聽那邊的人說，現在連洗菜的小廝都知道「碎玉軒這位常在食量不小」。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……為什麼連這種情報都會流通？'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '宮裡沒別的消遣，自然是八卦流通得最快。今日是說小主吃得好，明日說不定就是說誰被冷落了。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主記著，風聲向來比人腳快。現在風往哪吹不打緊，關鍵是，妳自己要站穩。'
        },

        // 接到「入宮謝恩」任務
        {
            type: 'narration',
            text: '話還沒說完，門外傳來通報聲。'
        },
        {
            type: 'dialogue',
            speaker: '帶話小太監',
            text: '吳常在在否？奉皇后娘娘旨意，吳常在得寵之後，按例需入宮謝恩，午時前往坤寧宮請安。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '……原來得寵之後有「上班流程」要跑。'
        },
        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '這是規矩。皇后是中宮之主，後宮得寵的嬪妃，都要先過中宮這一關。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主，這一遭可不能再像在御花園那樣隨口亂說了。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '我會努力把嘴巴當成高危區管理。'
        },

        // 出發前的心理建設
        {
            type: 'choice',
            question: '要去見皇后，妳心裡有點緊張。準備走哪種路線？',
            choices: [
                {
                    text: 'A. 溫順乖巧型：全程謙卑，絕不頂嘴。',
                    effect: { intelligence: 3 },
                    response: '妳在心裡默念：「聽話、不頂嘴、不加戲。」這三條像咒語一樣在腦中迴響。',
                    flag: 'queen_soft'
                },
                {
                    text: 'B. 理性冷靜型：尊重規矩，但保持自己的底線。',
                    effect: { intelligence: 4 },
                    response: '妳想著：「不與人爭鋒，但也不故作卑微。」既是臣也是人，該有的尊嚴不能丟。',
                    flag: 'queen_calm'
                },
                {
                    text: 'C. 微妙幽默型：只要對方不生氣，就輕鬆幾句化解距離。',
                    effect: { stamina: 3 },
                    response: '妳暗暗盤算幾句不會惹禍的小玩笑，準備看情況丟出去讓氣氛鬆一點。',
                    flag: 'queen_humor'
                }
            ]
        },

        // 坤寧宮初見皇后
        {
            type: 'narration',
            text: '坤寧宮內布置素雅，並不如想像中金碧輝煌。皇后坐在上首，身後是端正的山水屏風，眉目溫和，卻自有一股不容輕犯的威儀。'
        },
        {
            type: 'dialogue',
            speaker: '通報嬤嬤',
            text: '吳常在到——'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣妾吳氏，給皇后娘娘請安。願娘娘千歲千歲千千歲。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '平身。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '這就是那日賞花宴上，曾被太后喚起身說話的吳氏？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '回皇后娘娘，是。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '聽說妳進宮前，脾氣頗為懶散，還說過什麼「怕起早」的話？'
        },

        // 對皇后問題的回答
        {
            type: 'choice',
            question: '皇后問起妳以前的「黑歷史」，妳怎麼回？',
            choices: [
                {
                    text: 'A. 直接認了，順便補一句現在已經被訓練得很會早起。',
                    effect: { stamina: 2, intelligence: 2 },
                    response: '妳乖乖道：「臣妾確實說過那句話，如今在嬤嬤教導下，已能和雞一樣早起。只是叫得沒雞響亮。」皇后失笑，語氣也和緩了幾分。',
                    flag: 'queen_answer_honest'
                },
                {
                    text: 'B. 稍微美化：「那日只是失言，其實懂得宮中分寸。」',
                    effect: { intelligence: 4 },
                    response: '妳低聲道：「那日初入宮見聖顏，一時緊張失言。如今日日學規矩，才知宮中一步一腳印，絲毫不敢怠慢。」皇后點頭：「知錯便好。」',
                    flag: 'queen_answer_polite'
                },
                {
                    text: 'C. 巧妙轉彎：「怕起早，是怕精神不好，侍奉不周。」',
                    effect: { intelligence: 3 },
                    response: '妳抬眼道：「臣妾怕起早，是怕精神不濟，反誤了侍奉聖上與宮規。如今已學會先管好自己的精神，再談別的。」皇后眼中露出幾分讚許。',
                    flag: 'queen_answer_smart'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '皇后',
            text: '後宮雖不理政，卻也關係著天下風氣。妳既已得聖寵，更該收斂性子，不可恃寵而驕。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣妾謹記娘娘教誨。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '聞說妳性子直爽，倒不像那些只會逢迎的。有什麼想法，可以與本宮說說。只要不越矩，本宮不會為難妳。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '那臣妾就先從一句開始：多謝娘娘今日肯見臣妾。至少讓臣妾知道，後宮不是只有風吹草動和流言蜚語。'
        },
        {
            type: 'dialogue',
            speaker: '皇后',
            text: '……妳倒會說話。退下吧，好好守著碎玉軒。'
        },

        // 回程路上遇見華妃
        {
            type: 'narration',
            text: '從坤寧宮出來，經過一段回廊時，一陣濃烈卻好聞的香味先一步飄來。華妃一身華麗宮裝，帶著一串宮女嬤嬤迎面而來。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '這不是碎玉軒新上任的吳常在嗎？怎地剛得聖寵，就在宮裡到處跑？'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣妾給華妃娘娘請安。方才是奉皇后娘娘之命入宮謝恩，並非隨意走動。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '哎呀，本宮隨口一說，妳倒一本正經起來。宮裡向來是新人來了又走，妳倒是挺有意思的。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '聽說皇上昨夜在碎玉軒留宿？可別讓人說，本宮一個妃子，還比不上妳這常在醒目。'
        },

        // 面對華妃的嘲諷
        {
            type: 'choice',
            question: '華妃話裡帶針，妳打算如何回應？',
            choices: [
                {
                    text: 'A. 完全示弱：「臣妾哪裡敢跟娘娘比。」',
                    effect: { intelligence: 2, stamina: 2 },
                    response: '妳立刻低頭：「臣妾不過一介小常在，哪裡敢與娘娘相比。昨夜之事，純屬聖上垂憐。」華妃哼了一聲，似乎頗為受用這種態度。',
                    flag: 'hua_answer_soft'
                },
                {
                    text: 'B. 半真半假地奉承：「臣妾頂多算小火星，娘娘才是真正的日頭。」',
                    effect: { intelligence: 3 },
                    response: '妳笑道：「後宮若是天，娘娘是正午日頭，臣妾頂多是偶爾一點小火星，照亮不了幾步路。」華妃被逗笑：「嘴倒挺甜。」',
                    flag: 'hua_answer_flatter'
                },
                {
                    text: 'C. 微妙回擊：「有娘娘在，臣妾很樂意當個不顯眼的人。」',
                    effect: { stamina: 3 },
                    response: '妳鎮定地說：「有娘娘鎮著，臣妾只求在角落裡安安分分過日子，不惹人注意更好。」華妃眯了眯眼，不知在想什麼。',
                    flag: 'hua_answer_neutral'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '華妃',
            text: '碎玉軒那頭偏了些，若是日後覺得冷清，倒可以常來本宮這裡坐坐。'
        },
        {
            type: 'dialogue',
            speaker: '華妃',
            text: '只是——本宮那裡熱鬧，妳可得有相應的膽子去承受。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '臣妾受寵若驚，日後必恪守本分。'
        },
        {
            type: 'narration',
            text: '華妃帶笑離去，衣袖翻飛，留下一地濃得化不開的香氣，也留下一句聽不出是邀請還是警告的話。'
        },

        // 回到碎玉軒，發現小異樣
        {
            type: 'narration',
            text: '回到碎玉軒時，院子裡稍顯凌亂。芍藥正帶著兩個小太監收拾地上的碎瓷片。'
        },
        {
            type: 'dialogue',
            speaker: '芍藥',
            text: '小主恕罪，奴婢看顧不周。方才送炭的太監說手一滑，打破了妳書案上的那只舊筆洗。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '那是小姐從家裡帶來的……'
        },
        {
            type: 'dialogue',
            speaker: '雀兒',
            text: '奴婢追問那太監，他只是一味磕頭說自己腳滑。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '腳滑能滑得這麼準，專挑我那個。'
        },

        // 對這種「意外」的處理方式
        {
            type: 'choice',
            question: '這明顯不只是簡單的「腳滑」，妳打算怎麼處理？',
            choices: [
                {
                    text: 'A. 暫時不追究，讓大家先記在心裡，以觀後效。',
                    effect: { intelligence: 4 },
                    response: '妳淡淡道：「不用追了，碎的只是筆洗，不是我們的命。記住這張臉，以後再撞上同樣的事，就知道帳往哪裡算。」',
                    flag: 'deal_soft'
                },
                {
                    text: 'B. 叫人去打聽，至少摸清對方是誰的人。',
                    effect: { intelligence: 3 },
                    response: '妳吩咐芍藥：「去查清是哪個房頭的人，別鬧大，但要知道名字。」妳很清楚，在宮裡記住仇人，往往比立刻報仇更重要。',
                    flag: 'deal_investigate'
                },
                {
                    text: 'C. 當場發一點火，讓人知道妳不是好欺負的。',
                    effect: { stamina: 3 },
                    response: '妳冷聲道：「傳話回去，說下回若再打破什麼，就拿他們那頭的月例來照價賠。」院裡的人都嚇了一跳，也重新估量起妳這位新常在。',
                    flag: 'deal_hard'
                }
            ]
        },

        {
            type: 'dialogue',
            speaker: '鄭嬤嬤',
            text: '小主今日的做法，不錯。後宮的水不深不淺，掌舵的人若一味軟，就會被人當成軟柿子。'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '軟柿子雖好捏，但我至少還有核。'
        },
        {
            type: 'dialogue',
            speaker: '小梨子',
            text: '小姐的核挺硬的。'
        },

        // 夜裡與自己對話
        {
            type: 'narration',
            text: '夜深，碎玉軒安靜下來。皇帝並未立刻再臨，只留下一院子的風與海棠枝影。'
        },
        {
            type: 'dialogue',
            speaker: '林安寧（回憶）',
            text: '「妳搬走之後，我會不會很寂寞……」'
        },
        {
            type: 'dialogue',
            speaker: '吳芃秀',
            text: '（低聲自語）安寧、眉柔，不知道妳們今天過得怎樣。'
        },
        {
            type: 'narration',
            text: '妳走到海棠樹下，仰頭看著還未綻放的花苞，心裡有點酸，也有點平靜。'
        },

        // 本章收尾心境選擇
        {
            type: 'choice',
            question: '經歷一整天的「風聲」，妳對自己的處境有了什麼新的理解？',
            choices: [
                {
                    text: 'A. 得寵不只是甜，還伴隨著被看見與被針對。',
                    effect: { intelligence: 4 },
                    response: '妳明白，昨夜那份安穩與甜意，今天就變成了別人口中的風向與眼中的刺。喜歡也好，忌妒也罷，都是代價的一部分。',
                    flag: 'understand_cost'
                },
                {
                    text: 'B. 自己雖然還想躺平，但不能再當完全不動的鹹魚。',
                    effect: { stamina: 4 },
                    response: '妳苦笑：原本以為可以躺著過完這一生，結果發現，至少要學會翻個面，才能烤得不那麼焦。',
                    flag: 'saltfish_awaken'
                },
                {
                    text: 'C. 與其被局勢推著走，不如慢慢學會掌握一點點主動。',
                    effect: { intelligence: 3, stamina: 2 },
                    response: '妳看著自己的手，悄悄握成拳：哪怕只能決定今晚吃什麼、明日與誰說話，那也是一點主動。',
                    flag: 'want_control'
                }
            ]
        },

        {
            type: 'narration',
            text: '風從宮牆那頭吹來，海棠枝微微晃動。妳站在碎玉軒的小院裡，忽然有種很清楚的感覺——'
        },
        {
            type: 'narration',
            text: '妳已經不再只是「被選進來的那個誰」，而是一個開始被計算、被討論、也慢慢學會計算與選擇的吳常在。'
        },
        {
            type: 'narration',
            text: '【第五章完】風聲已起，但真正的風暴尚遠。妳還有時間學著怎麼在風裡站穩腳步。'
        }
    ]
};
