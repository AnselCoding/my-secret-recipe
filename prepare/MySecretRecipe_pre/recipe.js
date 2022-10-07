var tools = [
    {id:1, status:"onLine", name:"平底鍋", purchaseDate:"2021-09-22",retiredDate:""},
    {id:2, status:"onLine", name:"湯鍋", purchaseDate:"2021-08-22",retiredDate:""},
    {id:3, status:"onLine", name:"鑄鐵鍋", purchaseDate:"2021-08-12",retiredDate:""},
    {id:4, status:"onLine", name:"炒鍋", purchaseDate:"2021-05-01",retiredDate:""},
    {id:5, status:"onLine", name:"攪拌機", purchaseDate:"2021-06-15",retiredDate:""},
    {id:6, status:"onLine", name:"果汁機", purchaseDate:"2021-04-21",retiredDate:""},
];

var food = [
    {id:1, status:"onLine", name:"醬油", purchaseDate:"2021-09-22", expiryDate:"2022-09-23",retiredDate:""},
    {id:2, status:"onLine", name:"白胡椒", purchaseDate:"2021-05-20", expiryDate:"2022-05-23",retiredDate:""},
    {id:3, status:"onLine", name:"辣椒", purchaseDate:"2021-11-22", expiryDate:"2022-11-23",retiredDate:""},
    {id:4, status:"onLine", name:"蜂蜜", purchaseDate:"2021-12-22", expiryDate:"2022-12-23",retiredDate:""},
    {id:5, status:"onLine", name:"咖啡", purchaseDate:"2022-05-22", expiryDate:"2023-05-23",retiredDate:""},
    {id:6, status:"onLine", name:"咖哩粉", purchaseDate:"2021-11-04", expiryDate:"2022-11-05",retiredDate:""},
    {id:7, status:"onLine", name:"鹽巴", purchaseDate:"2021-09-22", expiryDate:"2022-09-23",retiredDate:""},
    {id:8, status:"onLine", name:"玫瑰鹽", purchaseDate:"2022-09-22", expiryDate:"2023-09-23",retiredDate:""},
];

var recipesM = [
    {id:1, name:"酪梨軟酪吐司", status:"onLine", description:"不只需要蛋白質、澱粉，還需要滿滿的維他命C，簡單的蛋土司做些改變，用酪梨與Cream Chese當作主題，搭配水煮蛋與柳橙汁，讓平凡的早餐格外的豐盛。\n\n資料來源:\nhttps://icook.tw/recipes/423267", quantity:"2人份", cookingTime:"10分鐘", headPic:"酪梨軟酪吐司_step_0.jpg"},
    {id:2, name:"奶油蜂蜜吐司條", status:"onLine", description:"吃不完的白吐司變化成好吃的「奶油蜂蜜吐司條」\n沒想到一吃就停不下來！！\n\n資料來源:\nhttps://icook.tw/recipes/404936", quantity:"3人份", cookingTime:"30分鐘", headPic:"奶油蜂蜜吐司條_step_0.jpg"},
    {id:3, name:"味噌松阪豬", status:"onLine", description:"只要三種食材，不用半小時，餐廳等級料理端上桌！\n\n資料來源:\nhttps://icook.tw/recipes/423780", quantity:"2人份", cookingTime:"20分鐘", headPic:"味噌松阪豬_step_0.jpg"},
    {id:4, name:"高麗菜飯", status:"onLine", description:"煮一鍋高麗菜飯\n一打開香氣撲鼻而來，\n米飯吸滿高麗菜的鮮甜\n\n資料來源:\nhttps://icook.tw/recipes/164231", quantity:"4人份", cookingTime:"30分鐘", headPic:"高麗菜飯_step_0.jpg"},
    {id:5, name:"韓式大醬湯", status:"onLine", description:"記得幾年前在深夜的首爾帳篷馬車裡，一位溫柔的韓國奶奶煮的大醬湯，讓我在寒冷的氣溫下，溫了口暖了心！\n\n資料來源:\nhttps://icook.tw/recipes/420486", quantity:"2人份", cookingTime:"20分鐘", headPic:"韓式大醬湯_step_0.jpg"},
]

var recipesD = [
    {recipeId:1, step:1, description:"備料\n將吐司放入烤箱烤", pic:"酪梨軟酪吐司_step_1.jpg"},
    {recipeId:1, step:2, description:"熱水鍋\n煮滾熱水後，將雞蛋放入，計時8分鐘後，將蛋放入冷水中剝殼備用", pic:"酪梨軟酪吐司_step_2.jpg"},
    {recipeId:1, step:3, description:"柳橙汁\n將柳橙洗淨後對半切", pic:"酪梨軟酪吐司_step_3.jpg"},
    {recipeId:1, step:4, description:"柳橙汁\n榨汁後倒入杯中", pic:"酪梨軟酪吐司_step_4.jpg"},
    {recipeId:1, step:5, description:"酪梨泥\n將酪梨對切", pic:"酪梨軟酪吐司_step_5.jpg"},
    {recipeId:1, step:6, description:"酪梨泥\n放入料理盆中，用S 型刀片切碎，放入Cream Chese融合", pic:"酪梨軟酪吐司_step_6.jpg"},
    {recipeId:1, step:7, description:"擺盤\n將吐司對切四份，放上酪梨泥，水煮蛋對切，即完成！", pic:"酪梨軟酪吐司_step_7.jpg"},

    {recipeId:2, step:1, description:"先將奶油融化後與蜂蜜拌勻備用", pic:"奶油蜂蜜吐司條_step_1.jpg"},
    {recipeId:2, step:2, description:"吐司切成條後抹上奶油蜂蜜醬並撒上砂糖，放入預熱170度烤箱約15-20分鐘。（照片為兩片吐司的量）", pic:"奶油蜂蜜吐司條_step_2.jpg"},
    {recipeId:2, step:3, description:"光是看就覺得香香的「奶油蜂蜜吐司條」出爐囉！！", pic:"奶油蜂蜜吐司條_step_3.jpg"},

    {recipeId:3, step:1, description:"混合味噌及味醂後，放進松阪豬肉，充分塗抺味噌醬後，放進冰箱冷藏2小時", pic:"味噌松阪豬_step_1.jpg"},
    {recipeId:3, step:2, description:"醃好的松阪豬放進氣炸鍋，以180度2面各氣炸8分鐘", pic:"味噌松阪豬_step_2.jpg"},
    {recipeId:3, step:3, description:"起鍋切片就完成囉！", pic:"味噌松阪豬_step_3.jpg"},
    
    {recipeId:4, step:1, description:"香菇泡水後切絲，蝦米洗淨，高麗菜洗淨切小片，白米洗淨瀝乾水份備用", pic:"高麗菜飯_step_1.jpg"},
    {recipeId:4, step:2, description:"起油鍋香菇絲與蝦米爆香後倒入油蔥酥炒香", pic:"高麗菜飯_step_2.jpg"},
    {recipeId:4, step:3, description:"將白米倒入步驟2拌炒一下加入3杯香菇水\n及適量調味料", pic:"高麗菜飯_step_3.jpg"},
    {recipeId:4, step:4, description:"將步驟三移到電鍋內鍋後將高麗菜鋪滿\n外鍋2杯水，煮好後燜10分再打開蓋子拌勻完成", pic:"高麗菜飯_step_4.jpg"},

    {recipeId:5, step:1, description:"無印良品販售的昆布湯包加上小魚乾煮約10分鐘後濾渣，保留湯底。", pic:"韓式大醬湯_step_1.jpg"},
    {recipeId:5, step:2, description:"1.熬湯過程將豆腐、櫛瓜、杏鮑菇切小塊狀。\n2.洋蔥、蒜頭、辣椒、青龍椒、蔥切末。", pic:"韓式大醬湯_step_2.jpg"},
    {recipeId:5, step:3, description:"另起平底鍋加入2匙大醬後加入牛肉片、杏鮑菇、洋蔥、辣椒、蒜末、3/2蔥末、並且加入少許熬好的高湯燉約2分鐘後倒入石鍋。", pic:"韓式大醬湯_step_3.jpg"},
    {recipeId:5, step:4, description:"加入豆腐熬煮。", pic:"韓式大醬湯_step_4.jpg"},
    {recipeId:5, step:5, description:"加入櫛瓜。中小火燉煮約8分鐘", pic:"韓式大醬湯_step_5.jpg"},
    {recipeId:5, step:6, description:"待櫛瓜呈透明時，放入蛤蜊煮開。", pic:"韓式大醬湯_step_6.jpg"},
    {recipeId:5, step:7, description:"最後加入剩餘的1/3蔥花即可熄火上桌。", pic:"韓式大醬湯_step_7.jpg"},
]

var ingredients = [
    {id:1, recipeId:1, name:"酪梨", amount: "1顆"},
    {id:2, recipeId:1, name:"Cream Chese", amount: "20g"},
    {id:3, recipeId:1, name:"白吐司", amount: "2片"},
    {id:4, recipeId:1, name:"雞蛋", amount: "2顆"},
    {id:5, recipeId:1, name:"柳橙", amount: "2顆"},

    {id:6, recipeId:2, name:"白吐司", amount: "4片"},
    {id:7, recipeId:2, name:"奶油", amount: "1小塊"},
    {id:8, recipeId:2, name:"蜂蜜", amount: "2-3大匙"},
    {id:9, recipeId:2, name:"砂糖", amount: "適量"},

    {id:10, recipeId:3, name:"松阪豬肉", amount: "約250g"},
    {id:11, recipeId:3, name:"味噌", amount: "2大匙"},
    {id:12, recipeId:3, name:"味醂", amount: "2大匙"},

    {id:13, recipeId:4, name:"高麗菜", amount: "半顆"},
    {id:14, recipeId:4, name:"白米", amount: "3杯"},
    {id:15, recipeId:4, name:"香菇", amount: "15朵"},
    {id:16, recipeId:4, name:"蝦米", amount: "2大匙"},
    {id:17, recipeId:4, name:"油蔥酥", amount: "1大匙"},
    {id:18, recipeId:4, name:"三色豆", amount: "1碗"},
    {id:19, recipeId:4, name:"水", amount: "3杯"},
    {id:20, recipeId:4, name:"鹽巴，白胡椒粉", amount: "適量"},
    
    {id:21, recipeId:5, name:"韓國大醬", amount: "2大匙"},
    {id:22, recipeId:5, name:"櫛瓜（小）", amount: "1條"},
    {id:23, recipeId:5, name:"豆腐", amount: "0.5塊"},
    {id:24, recipeId:5, name:"杏鮑菇（小）", amount: "3條"},
    {id:25, recipeId:5, name:"洋蔥", amount: "0.25顆"},
    {id:26, recipeId:5, name:"蒜頭", amount: "3瓣"},
    {id:27, recipeId:5, name:"朝天椒", amount: "1條"},
    {id:28, recipeId:5, name:"青龍椒", amount: "3條"},
    {id:29, recipeId:5, name:"蛤蜊", amount: "6～8顆"},
    {id:30, recipeId:5, name:"牛肉片", amount: "0.5盒"},
    {id:31, recipeId:5, name:"小魚乾", amount: "2g"},
    {id:32, recipeId:5, name:"昆布高湯包", amount: "1包"},
    {id:33, recipeId:5, name:"蔥", amount: "適量"},
    {id:34, recipeId:5, name:"糖", amount: "1小匙"},
]