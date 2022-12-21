// 前端模擬資料
export default [
    {recipeId:1, step:1, description:"備料\n將吐司放入烤箱烤", pic:require("../../assets/recipes/酪梨軟酪吐司_step_1.jpg")},
    {recipeId:1, step:2, description:"熱水鍋\n煮滾熱水後，將雞蛋放入，計時8分鐘後，將蛋放入冷水中剝殼備用", pic:require("../../assets/recipes/酪梨軟酪吐司_step_2.jpg")},
    {recipeId:1, step:3, description:"柳橙汁\n將柳橙洗淨後對半切", pic:require("../../assets/recipes/酪梨軟酪吐司_step_3.jpg")},
    {recipeId:1, step:4, description:"柳橙汁\n榨汁後倒入杯中", pic:require("../../assets/recipes/酪梨軟酪吐司_step_4.jpg")},
    {recipeId:1, step:5, description:"酪梨泥\n將酪梨對切", pic:require("../../assets/recipes/酪梨軟酪吐司_step_5.jpg")},
    {recipeId:1, step:6, description:"酪梨泥\n放入料理盆中，用S 型刀片切碎，放入Cream Chese融合", pic:require("../../assets/recipes/酪梨軟酪吐司_step_6.jpg")},
    {recipeId:1, step:7, description:"擺盤\n將吐司對切四份，放上酪梨泥，水煮蛋對切，即完成！", pic:require("../../assets/recipes/酪梨軟酪吐司_step_7.jpg")},

    {recipeId:2, step:1, description:"先將奶油融化後與蜂蜜拌勻備用", pic:require("../../assets/recipes/奶油蜂蜜吐司條_step_1.jpg")},
    {recipeId:2, step:2, description:"吐司切成條後抹上奶油蜂蜜醬並撒上砂糖，放入預熱170度烤箱約15-20分鐘。（照片為兩片吐司的量）", pic:require("../../assets/recipes/奶油蜂蜜吐司條_step_2.jpg")},
    {recipeId:2, step:3, description:"光是看就覺得香香的「奶油蜂蜜吐司條」出爐囉！！", pic:require("../../assets/recipes/奶油蜂蜜吐司條_step_3.jpg")},

    {recipeId:3, step:1, description:"混合味噌及味醂後，放進松阪豬肉，充分塗抺味噌醬後，放進冰箱冷藏2小時", pic:require("../../assets/recipes/味噌松阪豬_step_1.jpg")},
    {recipeId:3, step:2, description:"醃好的松阪豬放進氣炸鍋，以180度2面各氣炸8分鐘", pic:require("../../assets/recipes/味噌松阪豬_step_2.jpg")},
    {recipeId:3, step:3, description:"起鍋切片就完成囉！", pic:require("../../assets/recipes/味噌松阪豬_step_3.jpg")},
    
    {recipeId:4, step:1, description:"香菇泡水後切絲，蝦米洗淨，高麗菜洗淨切小片，白米洗淨瀝乾水份備用", pic:require("../../assets/recipes/高麗菜飯_step_1.jpg")},
    {recipeId:4, step:2, description:"起油鍋香菇絲與蝦米爆香後倒入油蔥酥炒香", pic:require("../../assets/recipes/高麗菜飯_step_2.jpg")},
    {recipeId:4, step:3, description:"將白米倒入步驟2拌炒一下加入3杯香菇水\n及適量調味料", pic:require("../../assets/recipes/高麗菜飯_step_3.jpg")},
    {recipeId:4, step:4, description:"將步驟三移到電鍋內鍋後將高麗菜鋪滿\n外鍋2杯水，煮好後燜10分再打開蓋子拌勻完成", pic:require("../../assets/recipes/高麗菜飯_step_4.jpg")},

    {recipeId:5, step:1, description:"無印良品販售的昆布湯包加上小魚乾煮約10分鐘後濾渣，保留湯底。", pic:require("../../assets/recipes/韓式大醬湯_step_1.jpg")},
    {recipeId:5, step:2, description:"1.熬湯過程將豆腐、櫛瓜、杏鮑菇切小塊狀。\n2.洋蔥、蒜頭、辣椒、青龍椒、蔥切末。", pic:require("../../assets/recipes/韓式大醬湯_step_2.jpg")},
    {recipeId:5, step:3, description:"另起平底鍋加入2匙大醬後加入牛肉片、杏鮑菇、洋蔥、辣椒、蒜末、3/2蔥末、並且加入少許熬好的高湯燉約2分鐘後倒入石鍋。", pic:require("../../assets/recipes/韓式大醬湯_step_3.jpg")},
    {recipeId:5, step:4, description:"加入豆腐熬煮。", pic:require("../../assets/recipes/韓式大醬湯_step_4.jpg")},
    {recipeId:5, step:5, description:"加入櫛瓜。中小火燉煮約8分鐘", pic:require("../../assets/recipes/韓式大醬湯_step_5.jpg")},
    {recipeId:5, step:6, description:"待櫛瓜呈透明時，放入蛤蜊煮開。", pic:require("../../assets/recipes/韓式大醬湯_step_6.jpg")},
    {recipeId:5, step:7, description:"最後加入剩餘的1/3蔥花即可熄火上桌。", pic:require("../../assets/recipes/韓式大醬湯_step_7.jpg")},
]

// -- Create the table in the specified schema
// CREATE TABLE [dbo].[RecipesD]
// (
//     [RecipeId] INT NOT NULL, -- Primary Key
//     [Step] INT NOT NULL, -- Primary Key
//     [Description] NVARCHAR(MAX) NOT NULL,
//     [Pic] NVARCHAR(100) NOT NULL,
//     -- Specify more columns here
//     CONSTRAINT [PK_RecipesD] PRIMARY KEY CLUSTERED 
//     (
//         [RecipeId] ASC,
//         [Step] ASC
//     )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
// ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
// GO

// -- Insert rows into table 'RecipesD' in schema '[dbo]'
// INSERT INTO [dbo].[RecipesD]
// ( -- Columns to insert data into
//   [RecipeId], [Step],[Description], [Pic]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  1,
//  1,
//  '備料\n將吐司放入烤箱烤', 
//  '酪梨軟酪吐司_step_1.jpg'
// )
// -- Add more rows here
// GO