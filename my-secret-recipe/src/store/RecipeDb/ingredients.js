// 前端模擬資料
export default [
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

// -- Create the table in the specified schema
// CREATE TABLE [dbo].[Ingredients]
// (
//     [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
//     [RecipeId] INT NOT NULL,
//     [Name] NVARCHAR(30) NOT NULL,
//     [Amount] NVARCHAR(30) NOT NULL,
//     -- Specify more columns here
// );
// GO

// -- Insert rows into table 'Ingredients' in schema '[dbo]'
// INSERT INTO [dbo].[Ingredients]
// ( -- Columns to insert data into
//  [RecipeId], [Name], [Amount]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  1,
//  '酪梨', 
//  '1顆'
// )
// -- Add more rows here
// GO