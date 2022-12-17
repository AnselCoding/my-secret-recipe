// 前端模擬資料
export default [
    { id: 1, name: "酪梨軟酪吐司", status: "onLine",retiredDate:"", description: "不只需要蛋白質、澱粉，還需要滿滿的維他命C，簡單的蛋土司做些改變，用酪梨與Cream Chese當作主題，搭配水煮蛋與柳橙汁，讓平凡的早餐格外的豐盛。<br><br>資料來源:<br>https://icook.tw/recipes/423267", quantity: "2人份", cookingTime: "10分鐘", headPic: require("../assets/recipes/酪梨軟酪吐司_step_0.jpg") },
    { id: 2, name: "奶油蜂蜜吐司條", status: "onLine",retiredDate:"", description: "吃不完的白吐司變化成好吃的「奶油蜂蜜吐司條」<br>沒想到一吃就停不下來！！<br><br>資料來源:<br>https://icook.tw/recipes/404936", quantity: "3人份", cookingTime: "30分鐘", headPic: require("../assets/recipes/奶油蜂蜜吐司條_step_0.jpg") },
    { id: 3, name: "味噌松阪豬", status: "onLine",retiredDate:"", description: "只要三種食材，不用半小時，餐廳等級料理端上桌！<br><br>資料來源:<br>https://icook.tw/recipes/423780", quantity: "2人份", cookingTime: "20分鐘", headPic: require("../assets/recipes/味噌松阪豬_step_0.jpg") },
    { id: 4, name: "高麗菜飯", status: "onLine",retiredDate:"", description: "煮一鍋高麗菜飯<br>一打開香氣撲鼻而來，<br>米飯吸滿高麗菜的鮮甜<br><br>資料來源:<br>https://icook.tw/recipes/164231", quantity: "4人份", cookingTime: "30分鐘", headPic: require("../assets/recipes/高麗菜飯_step_0.jpg") },
    { id: 5, name: "韓式大醬湯", status: "onLine",retiredDate:"", description: "記得幾年前在深夜的首爾帳篷馬車裡，一位溫柔的韓國奶奶煮的大醬湯，讓我在寒冷的氣溫下，溫了口暖了心！<br><br>資料來源:<br>https://icook.tw/recipes/420486", quantity: "2人份", cookingTime: "20分鐘", headPic: require("../assets/recipes/韓式大醬湯_step_0.jpg") },
]


// -- 與Tools table 格式確認
// -- Create the table in the specified schema
// CREATE TABLE [dbo].[RecipesM]
// (
//     [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
//     [Status] VARCHAR(30) NOT NULL,
//     [Name] NVARCHAR(30) NOT NULL,
//     [RetiredDate] Date NULL,
//     [Description] NVARCHAR(MAX) NOT NULL,
//     [Quantity] NVARCHAR(10) NOT NULL,
//     [CookingTime] NVARCHAR(10) NOT NULL,
//     [HeadPic] NVARCHAR(100) NOT NULL
//     -- Specify more columns here
// );
// GO

// INSERT INTO [dbo].[RecipesM]
// ( -- Columns to insert data into
//  [Name], [Status], [RetiredDate], [Description], [Quantity], [CookingTime], [HeadPic]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  '酪梨軟酪吐司',
//  'onLine', 
//  null, 
//  '不只需要蛋白質、澱粉，還需要滿滿的維他命C，簡單的蛋土司做些改變，用酪梨與Cream Chese當作主題，搭配水煮蛋與柳橙汁，讓平凡的早餐格外的豐盛。<br><br>資料來源:<br>https://icook.tw/recipes/423267',
//  '2人份',
//  '20分鐘',
//  '../assets/recipes/味噌松阪豬_step_0.jpg'
// )
// -- Add more rows here
// GO