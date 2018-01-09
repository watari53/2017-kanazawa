// global value
walk        = "fa-blind";
bicycle     = "fa-bicycle";
bus         = "fa-bus";
goal        = "fa-flag-o";
rain        = "fa-umbrella";
traffic_jam = "fa-ban";
no_bicycle  = "fa-meh-o";
wp_color    = {
                walk: "#ccc",
              };

// sample data
var sample = {

  surroundings : [
    {
      "spot_name": "金沢駅(鼓門・もてなしドーム)",
      "distance": "87m"
    },
    {
      "spot_name": "旧玉井町（たまのいまち）",
      "distance": "138m"
    },
    {
      "spot_name": "旧木ノ新保（きのしんぼ）",
      "distance": "181m"
    },
    {
      "spot_name": "金沢市アートホール",
      "distance": "248m"
    },
    {
      "spot_name": "旧広岡町（ひろおかまち）",
      "distance": "352m"
    },
    {
      "spot_name": "旧田丸町（たまるまち）",
      "distance": "364m"
    },
    {
      "spot_name": "旧醒ヶ井町（さめがいちょう）",
      "distance": "375m"
    },
    {
      "spot_name": "島田町（しまだまち）",
      "distance": "383m"
    },
    {
      "spot_name": "旧日吉町（ひよしまち）",
      "distance": "392m"
    },
    {
      "spot_name": "旧柳町（やなぎまち）",
      "distance": "429m"
    },
    {
      "spot_name": "中橋町（なかばしまち）",
      "distance": "445m"
    },
    {
      "spot_name": "旧荒町（あらまち）",
      "distance": "456m"
    },
    {
      "spot_name": "折違町（すじかいまち）",
      "distance": "466m"
    },
    {
      "spot_name": "六枚町（ろくまいまち）",
      "distance": "506m"
    },
    {
      "spot_name": "旧英町（はなふさちょう）",
      "distance": "512m"
    },
    {
      "spot_name": "旧古道（ふるみち）",
      "distance": "517m"
    },
    {
      "spot_name": "笠市町（かさいちまち）",
      "distance": "519m"
    },
    {
      "spot_name": "旧鍛冶町（かじまち）",
      "distance": "523m"
    },
    {
      "spot_name": "堀川町（ほりかわまち）",
      "distance": "558m"
    },
    {
      "spot_name": "旧大隅町（おおすみちょう）",
      "distance": "561m"
    },
    {
      "spot_name": "旧弓ノ町（ゆみのまち）",
      "distance": "561m"
    },
    {
      "spot_name": "旧白銀町（しろがねちょう）",
      "distance": "591m"
    },
    {
      "spot_name": "旧象眼町（ぞうがねまち）",
      "distance": "607m"
    },
    {
      "spot_name": "芳斉町（ほうさいまち）",
      "distance": "624m"
    },
    {
      "spot_name": "旧巴町（ともえまち）",
      "distance": "665m"
    },
    {
      "spot_name": "旧淵上町（ふちのえまち）",
      "distance": "672m"
    },
    {
      "spot_name": "旧三構（みつがまえ）",
      "distance": "678m"
    },
    {
      "spot_name": "旧五宝町（ごぼうまち）",
      "distance": "742m"
    },
    {
      "spot_name": "三社町（さんじゃまち）",
      "distance": "820m"
    },
    {
      "spot_name": "旧石屋小路（いしやしょうじ）",
      "distance": "863m"
    },
    {
      "spot_name": "瓢箪町（ひょうたんまち）",
      "distance": "885m"
    },
    {
      "spot_name": "旧塩屋町（しおやまち）",
      "distance": "903m"
    },
    {
      "spot_name": "旧宗叔町（そうしゅくちょう）",
      "distance": "924m"
    },
    {
      "spot_name": "旧三社五十人町（さんじゃごじゅうにんまち）",
      "distance": "932m"
    },
    {
      "spot_name": "旧栄町（さかえまち）",
      "distance": "983m"
    },
    {
      "spot_name": "旧蔦町（つたまち）",
      "distance": "984m"
    },
    {
      "spot_name": "袋町（ふくろまち）",
      "distance": "999m"
    },
    {
      "spot_name": "七ツ屋町（ななつやまち）",
      "distance": "1.0km"
    },
    {
      "spot_name": "旧桶町（おけちょう）",
      "distance": "1.0km"
    },
    {
      "spot_name": "旧穴水町（あなみずまち）",
      "distance": "1.1km"
    },
    {
      "spot_name": "旧藺田町（いだまち）",
      "distance": "1.1km"
    },
    {
      "spot_name": "旧七曲り（ななまがり）",
      "distance": "1.1km"
    },
    {
      "spot_name": "長土塀（ながどへ）",
      "distance": "1.2km"
    },
    {
      "spot_name": "旧博労町（ばくろまち）",
      "distance": "1.2km"
    },
    {
      "spot_name": "旧岩根町（いわねまち）",
      "distance": "1.2km"
    },
    {
      "spot_name": "十間町（じっけんまち）",
      "distance": "1.2km"
    },
    {
      "spot_name": "尾張町（おわりちょう）",
      "distance": "1.2km"
    },
    {
      "spot_name": "彦三町（ひこそまち）",
      "distance": "1.3km"
    },
    {
      "spot_name": "小橋町（こばしまち）",
      "distance": "1.3km"
    },
    {
      "spot_name": "尾張町老舗交流館",
      "distance": "1.3km"
    },
    {
      "spot_name": "金沢市民芸術村",
      "distance": "1.3km"
    },
    {
      "spot_name": "旧水車町（みずぐるままち）",
      "distance": "1.3km"
    },
    {
      "spot_name": "旧竹田町（たけだまち）",
      "distance": "1.3km"
    },
    {
      "spot_name": "甚右衛門坂（じんえもんざか）",
      "distance": "1.3km"
    },
    {
      "spot_name": "旧松原町（まつばらちょう）",
      "distance": "1.3km"
    },
    {
      "spot_name": "高岡町（たかおかまち）",
      "distance": "1.3km"
    },
    {
      "spot_name": "彦三緑地",
      "distance": "1.3km"
    },
    {
      "spot_name": "金沢市文化ホール",
      "distance": "1.3km"
    },
    {
      "spot_name": "新町（しんちょう）",
      "distance": "1.4km"
    },
    {
      "spot_name": "足軽資料館",
      "distance": "1.4km"
    },
    {
      "spot_name": "旧高儀町（こうぎまち）",
      "distance": "1.4km"
    },
    {
      "spot_name": "旧母衣町（ほろまち）",
      "distance": "1.4km"
    },
    {
      "spot_name": "旧元車町（もとぐるままち）",
      "distance": "1.4km"
    },
    {
      "spot_name": "南町（みなみちょう）",
      "distance": "1.4km"
    },
    {
      "spot_name": "旧富本町（とみもとちょう）",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧中町（なかまち）",
      "distance": "1.5km"
    },
    {
      "spot_name": "中の橋",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧加賀藩士高田家跡",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧西町（にしちょう）",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧梅本町（うめもとちょう）",
      "distance": "1.5km"
    },
    {
      "spot_name": "大野庄用水",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧御仲間町（おちゅうげんまち）",
      "distance": "1.5km"
    },
    {
      "spot_name": "金沢蓄音器館",
      "distance": "1.5km"
    },
    {
      "spot_name": "暗がり坂（くらがりざか）",
      "distance": "1.5km"
    },
    {
      "spot_name": "長町武家屋敷休憩館",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧宝船路町（ほうせんじまち）",
      "distance": "1.5km"
    },
    {
      "spot_name": "主計町茶屋街",
      "distance": "1.5km"
    },
    {
      "spot_name": "泉鏡花記念館",
      "distance": "1.5km"
    },
    {
      "spot_name": "旧殿町（とのまち）",
      "distance": "1.6km"
    },
    {
      "spot_name": "大手町（おおてまち）",
      "distance": "1.6km"
    },
    {
      "spot_name": "長町武家屋敷跡",
      "distance": "1.6km"
    },
    {
      "spot_name": "主計町（かずえまち）",
      "distance": "1.6km"
    },
    {
      "spot_name": "金沢文芸館",
      "distance": "1.6km"
    },
    {
      "spot_name": "橋場町（はしばちょう）",
      "distance": "1.6km"
    },
    {
      "spot_name": "旧森下町（もりもとまち）",
      "distance": "1.7km"
    },
    {
      "spot_name": "長町（ながまち）",
      "distance": "1.7km"
    },
    {
      "spot_name": "金沢市立安江金箔工芸館",
      "distance": "1.7km"
    },
    {
      "spot_name": "寺島蔵人邸",
      "distance": "1.7km"
    },
    {
      "spot_name": "鞍月用水",
      "distance": "1.7km"
    },
    {
      "spot_name": "ひがし茶屋休憩館",
      "distance": "1.7km"
    },
    {
      "spot_name": "旧木町（きまち）",
      "distance": "1.7km"
    },
    {
      "spot_name": "旧塩川町（しおがわちょう）",
      "distance": "1.7km"
    },
    {
      "spot_name": "旧観音町（かんのんまち）",
      "distance": "1.7km"
    },
    {
      "spot_name": "旧大衆免（だいじゅめ）",
      "distance": "1.7km"
    },
    {
      "spot_name": "金沢市老舗記念館",
      "distance": "1.7km"
    },
    {
      "spot_name": "旧仙石町（せんごくまち）",
      "distance": "1.8km"
    },
    {
      "spot_name": "ひがし茶屋街",
      "distance": "1.8km"
    },
    {
      "spot_name": "旧金屋町（かなやちょう）",
      "distance": "1.8km"
    },
    {
      "spot_name": "前田土佐守家資料館",
      "distance": "1.8km"
    },
    {
      "spot_name": "旧石浦町（いしうらまち）",
      "distance": "1.8km"
    },
    {
      "spot_name": "白鳥路",
      "distance": "1.8km"
    },
    {
      "spot_name": "旧八幡町（はちまんまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧大藪小路（おおやぶしょうじ）",
      "distance": "1.9km"
    },
    {
      "spot_name": "卯辰山山麓寺院群",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧高道町（たかみちまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "木倉町（きぐらまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "徳田秋聲記念館",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧御歩町（おかちまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧小川町（おがわちょう）",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧味噌蔵町（みそぐらちょう）",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧長門町（ながとまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "並木町（なみきまち）",
      "distance": "1.9km"
    },
    {
      "spot_name": "子来坂（こぎざか）",
      "distance": "1.9km"
    },
    {
      "spot_name": "旧九人橋下通（くにんばししたどおり）",
      "distance": "1.9km"
    },
    {
      "spot_name": "紺屋坂（こんやざか）",
      "distance": "2.0km"
    },
    {
      "spot_name": "片町（かたまち）",
      "distance": "2.0km"
    },
    {
      "spot_name": "旧上田町（うえだまち）",
      "distance": "2.0km"
    },
    {
      "spot_name": "旧胡桃町（くるみちょう）",
      "distance": "2.0km"
    },
    {
      "spot_name": "辰巳用水",
      "distance": "2.0km"
    },
    {
      "spot_name": "山ノ上町（やまのうえまち）",
      "distance": "2.0km"
    },
    {
      "spot_name": "旧古寺町（ふるでらまち）",
      "distance": "2.0km"
    },
    {
      "spot_name": "柿木畠（かきのきばたけ）",
      "distance": "2.0km"
    },
    {
      "spot_name": "鶯町（うぐいすまち）",
      "distance": "2.0km"
    },
    {
      "spot_name": "観音坂（かんのんざか）",
      "distance": "2.0km"
    },
    {
      "spot_name": "金沢能楽美術館",
      "distance": "2.1km"
    },
    {
      "spot_name": "材木町（ざいもくちょう）",
      "distance": "2.1km"
    },
    {
      "spot_name": "旧玄蕃町（げんばまち）",
      "distance": "2.1km"
    },
    {
      "spot_name": "旧伝馬町（で（て）んままち）",
      "distance": "2.1km"
    },
    {
      "spot_name": "旧豊国町（とよくにまち）",
      "distance": "2.1km"
    },
    {
      "spot_name": "白菊町（しらぎくちょう）",
      "distance": "2.1km"
    },
    {
      "spot_name": "旧同心町（どうしんまち）",
      "distance": "2.1km"
    },
    {
      "spot_name": "室生犀星記念館",
      "distance": "2.1km"
    },
    {
      "spot_name": "金沢21世紀美術館",
      "distance": "2.1km"
    },
    {
      "spot_name": "旧又五郎町（またごろうちょう）",
      "distance": "2.1km"
    },
    {
      "spot_name": "広坂（ひろさか）",
      "distance": "2.2km"
    },
    {
      "spot_name": "旧大工町（だいくまち）",
      "distance": "2.2km"
    },
    {
      "spot_name": "小将町（こしょうまち）",
      "distance": "2.2km"
    },
    {
      "spot_name": "帰厚坂（きこうざか）",
      "distance": "2.2km"
    },
    {
      "spot_name": "千日町（せんにちまち）",
      "distance": "2.2km"
    },
    {
      "spot_name": "旧五十人町（ごじゅうにんまち）",
      "distance": "2.2km"
    },
    {
      "spot_name": "旧河原町（かわらまち）",
      "distance": "2.2km"
    },
    {
      "spot_name": "泉鏡花句碑",
      "distance": "2.2km"
    },
    {
      "spot_name": "里見町（さとみちょう）",
      "distance": "2.2km"
    },
    {
      "spot_name": "金沢ふるさと偉人館",
      "distance": "2.3km"
    },
    {
      "spot_name": "蛤坂（はまぐりざか）",
      "distance": "2.3km"
    },
    {
      "spot_name": "旧備中町（びっちゅうまち）",
      "distance": "2.3km"
    },
    {
      "spot_name": "旧助九郎町（すけくろまち）",
      "distance": "2.3km"
    },
    {
      "spot_name": "横山町（よこやまちょう）",
      "distance": "2.3km"
    },
    {
      "spot_name": "池田町（いけだまち）",
      "distance": "2.3km"
    },
    {
      "spot_name": "小尻谷坂（こじりたにざか）",
      "distance": "2.3km"
    },
    {
      "spot_name": "金沢歌劇座",
      "distance": "2.4km"
    },
    {
      "spot_name": "竪町（たてまち）",
      "distance": "2.4km"
    },
    {
      "spot_name": "にし茶屋街",
      "distance": "2.4km"
    },
    {
      "spot_name": "西茶屋資料館",
      "distance": "2.4km"
    },
    {
      "spot_name": "油車（あぶらぐるま）",
      "distance": "2.4km"
    },
    {
      "spot_name": "茨木町（いばらきちょう）",
      "distance": "2.4km"
    },
    {
      "spot_name": "春日町（かすがまち）",
      "distance": "2.4km"
    },
    {
      "spot_name": "八坂五山",
      "distance": "2.4km"
    },
    {
      "spot_name": "八坂（はっさか）",
      "distance": "2.4km"
    },
    {
      "spot_name": "金沢市立中村記念美術館",
      "distance": "2.4km"
    },
    {
      "spot_name": "本多町（ほんだまち）",
      "distance": "2.4km"
    },
    {
      "spot_name": "旧御小人町（おこびとまち）",
      "distance": "2.5km"
    },
    {
      "spot_name": "金沢卯辰山工芸工房",
      "distance": "2.5km"
    },
    {
      "spot_name": "水溜町（みずためまち）",
      "distance": "2.5km"
    },
    {
      "spot_name": "鈴木大拙館",
      "distance": "2.6km"
    },
    {
      "spot_name": "出羽町（でわまち）",
      "distance": "2.6km"
    },
    {
      "spot_name": "鱗町（うろこまち）",
      "distance": "2.6km"
    },
    {
      "spot_name": "杉浦町（すぎうらまち）",
      "distance": "2.6km"
    },
    {
      "spot_name": "旧成瀬町（なるせまち）",
      "distance": "2.6km"
    },
    {
      "spot_name": "旧馬場崎町（ばばさきちょう）",
      "distance": "2.6km"
    },
    {
      "spot_name": "三宅雪嶺生家跡",
      "distance": "2.6km"
    },
    {
      "spot_name": "鈴木大拙誕生地記念碑",
      "distance": "2.7km"
    },
    {
      "spot_name": "室生犀星文学碑",
      "distance": "2.7km"
    },
    {
      "spot_name": "旧九枚町（くまいまち）",
      "distance": "2.7km"
    },
    {
      "spot_name": "犀川",
      "distance": "2.7km"
    },
    {
      "spot_name": "大乗寺坂（だいじょうじざか）",
      "distance": "2.7km"
    },
    {
      "spot_name": "飛梅町（とびうめちょう）",
      "distance": "2.7km"
    },
    {
      "spot_name": "大樋町（おおひまち）",
      "distance": "2.7km"
    },
    {
      "spot_name": "野町（のまち）",
      "distance": "2.7km"
    },
    {
      "spot_name": "旧山田屋小路（やまだやしょうじ）",
      "distance": "2.7km"
    },
    {
      "spot_name": "旧火除町（ひよけまち）",
      "distance": "2.7km"
    },
    {
      "spot_name": "石引町（いしびきまち）",
      "distance": "2.8km"
    },
    {
      "spot_name": "徳田秋聲文学碑",
      "distance": "2.8km"
    },
    {
      "spot_name": "木曽坂（きそざか）",
      "distance": "2.8km"
    },
    {
      "spot_name": "旧六斗林（ろくとばやし）",
      "distance": "2.8km"
    },
    {
      "spot_name": "木曽坂",
      "distance": "2.8km"
    },
    {
      "spot_name": "旧柿木町（かきのきまち）",
      "distance": "2.8km"
    },
    {
      "spot_name": "旧笹下町（ささかまち）",
      "distance": "2.8km"
    },
    {
      "spot_name": "旧百姓町（ひゃくしょうまち）",
      "distance": "2.8km"
    },
    {
      "spot_name": "望湖台(卯辰山公園)",
      "distance": "2.8km"
    },
    {
      "spot_name": "旧銀杏町（ぎんなんちょう）",
      "distance": "2.8km"
    },
    {
      "spot_name": "金沢くらしの博物館",
      "distance": "2.9km"
    },
    {
      "spot_name": "桜坂（さくらざか）",
      "distance": "2.9km"
    },
    {
      "spot_name": "石伐坂（いしきりざか）",
      "distance": "2.9km"
    },
    {
      "spot_name": "旧板前町（いたまえまち）",
      "distance": "2.9km"
    },
    {
      "spot_name": "馬坂",
      "distance": "2.9km"
    },
    {
      "spot_name": "馬坂（うまざか）",
      "distance": "2.9km"
    },
    {
      "spot_name": "旧桃畠町（ももばたけまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "嫁坂（よめざか）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧大音町（おとうまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧沼田町（ぬまだまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "嫁坂",
      "distance": "3.0km"
    },
    {
      "spot_name": "寺町（てらまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧吹屋町（ふきやまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧早道町（はやみちまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧手木町（てこまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "泉町（いずみまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧鷹匠町（たかじょうまち）",
      "distance": "3.0km"
    },
    {
      "spot_name": "旧桜畠（さくらばたけ）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧品川町（しながわちょう）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧主馬町（しゅめまち）",
      "distance": "3.1km"
    },
    {
      "spot_name": "天神町通り",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧安藤町（あんどうまち）",
      "distance": "3.1km"
    },
    {
      "spot_name": "新坂（しんさか）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧茶畠（ちゃばたけ）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧百々女木町（どどめきちょう）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧芦中町（あしなかまち）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧欠原町（がけはらまち）",
      "distance": "3.1km"
    },
    {
      "spot_name": "旧桜木小路（さくらぎしょうじ）",
      "distance": "3.2km"
    },
    {
      "spot_name": "旧二十人町（にじゅうにんまち）",
      "distance": "3.2km"
    },
    {
      "spot_name": "二十人坂",
      "distance": "3.2km"
    },
    {
      "spot_name": "天神坂（てんじんざか）",
      "distance": "3.3km"
    },
    {
      "spot_name": "旧長柄町（ながえまち）",
      "distance": "3.3km"
    },
    {
      "spot_name": "旧一本松（いっぽんまつ）",
      "distance": "3.3km"
    },
    {
      "spot_name": "旧仙人町（せんにんまち）",
      "distance": "3.3km"
    },
    {
      "spot_name": "堤町（つつみちょう）",
      "distance": "3.3km"
    },
    {
      "spot_name": "旧河内町（かわちまち）",
      "distance": "3.3km"
    },
    {
      "spot_name": "菊川町（きくがわちょう）",
      "distance": "3.3km"
    },
    {
      "spot_name": "旧白山町（しらやまちょう）",
      "distance": "3.3km"
    },
    {
      "spot_name": "天神坂",
      "distance": "3.4km"
    },
    {
      "spot_name": "旧台所町（だいどころまち）",
      "distance": "3.4km"
    },
    {
      "spot_name": "長良坂（ながらざか）",
      "distance": "3.4km"
    },
    {
      "spot_name": "旧土取場（つちとりば）",
      "distance": "3.5km"
    },
    {
      "spot_name": "下馬地蔵",
      "distance": "3.6km"
    },
    {
      "spot_name": "旧地黄煎町（じおうせんまち）",
      "distance": "3.7km"
    },
    {
      "spot_name": "不老坂（ふろうさか）",
      "distance": "3.7km"
    },
    {
      "spot_name": "亀坂（がめざか）",
      "distance": "3.7km"
    },
    {
      "spot_name": "鶴間坂（つるまざか）",
      "distance": "3.8km"
    },
    {
      "spot_name": "有松町（ありまつまち）",
      "distance": "3.8km"
    },
    {
      "spot_name": "旧上弓ノ町（かみゆみのまち）",
      "distance": "3.9km"
    },
    {
      "spot_name": "旧藤棚（ふじだな）",
      "distance": "4.0km"
    },
    {
      "spot_name": "旧上野町（うえのまち）",
      "distance": "4.2km"
    },
    {
      "spot_name": "善光寺坂（ぜんこうじざか）",
      "distance": "4.3km"
    },
    {
      "spot_name": "御参詣坂（ごさんけいざか）",
      "distance": "4.4km"
    },
    {
      "spot_name": "金沢市埋蔵文化財収蔵庫",
      "distance": "4.6km"
    },
    {
      "spot_name": "室生犀星の墓",
      "distance": "5.1km"
    },
    {
      "spot_name": "大瀧坂（おおたきざか）",
      "distance": "5.2km"
    },
    {
      "spot_name": "野田山(墓地)",
      "distance": "5.4km"
    },
    {
      "spot_name": "みなと橋",
      "distance": "5.4km"
    },
    {
      "spot_name": "金沢市埋蔵文化財センター",
      "distance": "5.6km"
    },
    {
      "spot_name": "銭屋五兵衛銅像",
      "distance": "5.6km"
    },
    {
      "spot_name": "金沢湯涌創作の森",
      "distance": "13.0km"
    },
    {
      "spot_name": "金沢湯涌江戸村",
      "distance": "13.7km"
    },
    {
      "spot_name": "金沢湯涌夢二館",
      "distance": "14.2km"
    },
    {
      "spot_name": "白鷺の足湯",
      "distance": "14.2km"
    }
  ],

  timeline : [
       {
        "start_time": "12:00",
        "arrival_time": "12:32",
        "time_required": "32分",
        "fee": "0円",
        "transportation": [
          "fa-blind"
        ],
        "information": [
          "fa-flag-o"
        ],
        "timeline_detail": {
          "time_required": "32分",
          "fee": "0円",
          "src": "現在地",
          "dest": "金沢21世紀美術館",
          "start": {
            "spot_name": "現在地",
            "time": "12:00"
          },
          "waypoint": [
            {
              "spot_name": "金沢21世紀美術館",
              "arrival_time": "12:32",
              "transportation": "fa-blind",
              "transportation_text": "徒歩",
              "fee": "0円",
              "information_icon": "fa-flag-o",
              "information_text": null,
              "time_required": "32分",
              "map_url": "http://maps.apple.com/maps?q=36.560867,136.658258&z=16"
            }
          ]
        }
      },
      {
        "start_time": "12:00",
        "arrival_time": "12:31",
        "time_required": "31分",
        "fee": "500円",
        "transportation": [
          "fa-blind",
          "fa-bus",
          "fa-blind"
        ],
        "information": [
          null,
          null,
          null
        ],
        "timeline_detail": {
          "time_required": "31分",
          "fee": "500円",
          "src": "現在地",
          "dest": "金沢21世紀美術館",
          "start": {
            "spot_name": "現在地",
            "time": "12:00"
          },
          "waypoint": [
            {
              "spot_name": "武蔵ヶ辻・近江町市場",
              "arrival_time": "12:13",
              "transportation": "fa-blind",
              "transportation_text": "徒歩",
              "fee": "0円",
              "information_icon": null,
              "information_text": null,
              "time_required": "14分",
              "map_url": "http://maps.apple.com/maps?q=36.571924,136.655905&z=16"
            },
            {
              "spot_name": "市役所・21世紀美術館",
              "arrival_time": "12:28",
              "transportation": "fa-bus",
              "transportation_text": "材木ルート",
              "fee": "500円",
              "information_icon": null,
              "information_text": null,
              "time_required": "13分",
              "map_url": null
            },
            {
              "spot_name": "金沢21世紀美術館",
              "arrival_time": "12:31",
              "transportation": "fa-blind",
              "transportation_text": "徒歩",
              "fee": "0円",
              "information_icon": null,
              "information_text": null,
              "time_required": "04分",
              "map_url": "http://maps.apple.com/maps?q=36.560867,136.658258&z=16"
            }
          ]
        }
      },
      {
        "start_time": "12:00",
        "arrival_time": "12:15",
        "time_required": "15分",
        "fee": "1000円",
        "transportation": [
          "fa-blind",
          "fa-bicycle",
          "fa-blind"
        ],
        "information": [
          null,
          "no_bicycle",
          null
        ],
        "timeline_detail": {
          "time_required": "15分",
          "fee": "1000円",
          "src": "現在地",
          "dest": "金沢21世紀美術館",
          "start": {
            "spot_name": "現在地",
            "time": "12:00"
          },
          "waypoint": [
            {
              "spot_name": "金沢駅Ｃ",
              "arrival_time": "12:03",
              "transportation": "fa-blind",
              "transportation_text": "徒歩",
              "fee": "0円",
              "information_icon": null,
              "information_text": null,
              "time_required": "03分",
              "map_url": "http://maps.apple.com/maps?q=36.577168896058,136.64741773723&z=16"
            },
            {
              "spot_name": "広坂",
              "arrival_time": "12:14",
              "transportation": "fa-bicycle",
              "transportation_text": null,
              "fee": "1000円",
              "information_icon": "no_bicycle",
              "information_text": "70分待つ恐れがあります。",
              "time_required": "12分",
              "map_url": "http://maps.apple.com/maps?q=36.561412,136.657436&z=16"
            },
            {
              "spot_name": "金沢21世紀美術館",
              "arrival_time": "12:15",
              "transportation": "fa-blind",
              "transportation_text": "徒歩",
              "fee": "0円",
              "information_icon": null,
              "information_text": null,
              "time_required": "01分",
              "map_url": "http://maps.apple.com/maps?q=36.561412,136.657436&z=16"
            }
        ]
      }
    }
  ],
  "spotdata": {
    "name": "金沢21世紀美術館",
    "desc": "金沢21世紀美術館は、兼六園に隣接し、中心部に位置しています。「新しい文化の創造」と「新たなまちの賑わいの創出」を目的に開設されました。ガラス張りの円形の建物で、誰もがいつでも立ち寄ることができる｢まちに開かれた公園のような美術館｣を目指しています。無料ゾーンにも作品があり、体感することができます。",
    "address": "金沢市広坂1-2-1",
    "location": [
      "36.560867",
      "136.658258"
    ],
    "open_hours": "展覧会ゾーン10:00～18:00（金・土は20:00　※チケットの販売は閉場の30分前まで）無料ゾーン9:00～22:00",
    "fee": "美術館の建物への入館（交流ゾーン）　無料コレクション展　一般　360円、大学生・65歳以上　280円、高校生以下　無料※特別展は展覧会毎に異なります。",
    "img": "http://open-imagedata.city.kanazawa.ishikawa.jp/image/thumbnail/83"
  }
};

ons.bootstrap()
  .service('DataService', function() {
    var service = {};

    service.getSurroundings = function() {
      return sample.surroundings;
    };
    service.getTimeLines = function() {
      return sample.timeline;
    };
    service.getSpotData = function() {
      return sample.spotdata;
    };
    return service;
  })
  .controller('AppController', function($scope) {
    $scope.application_name = "金沢乗換案内";
    $scope.search = {src: "出発地を選択", dest: "到着地を選択"};
    $scope.time = "現在時刻";

    $scope.people_n = 1;
    this.go_search = function(search_type) {
      navi.pushPage('search.html', {data: {search_type: search_type}});
    };
    this.setTime = function() {
      var time = new Date();

      // Same handling for iPhone and Android
      window.plugins.datePicker.show({
          date : time,
          mode : 'time', // date or time or blank for both
          allowOldDates : true
      }, function(returnDate) {
          var newTime = new Date(returnDate);
          // alert(newTime.toString());
          $scope.time = newTime;
          $scope.$apply();
      });
    };
    this.go_timeline = function() {
      modal.show();
      setTimeout(function() {
        modal.hide();
        navi.pushPage('timeline.html');
      }, 0);
    };
  })
  .controller('SearchController', function($scope, DataService) {
    var type = {src: "出発地", dest: "到着地"};
    var search_type = navi.topPage.data.search_type; // src or dest
    this.title = type[search_type];
    this.surroundings = DataService.getSurroundings();
    this.setSpot = function(spot_name) {
      $scope.search[search_type] = spot_name;
      navi.popPage();
    };
  })
  .controller('TimeLineController', function(DataService) {
    this.search_type = "出発";
    this.time = "2018年2月17日 14:30";
    this.src = "現在地";
    this.dest = "兼六園";
    this.result = DataService.getTimeLines();
    this.go_timelineDetail = function(timeline_detail) {
      navi.pushPage('timeline_detail.html', {data: {timeline_detail: timeline_detail}});
    };
  }).controller('TimeLineDetailController', function(DataService) {
    this.detail = navi.topPage.data.timeline_detail;
  })
  .controller('SpotController', function(DataService) {
    this.data = DataService.getSpotData();
  });
ons.ready(function() {
  console.log("Onsen UI is ready!");
});
