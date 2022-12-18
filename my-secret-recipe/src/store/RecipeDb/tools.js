// 前端模擬資料
export default [
    { id: 1, status: "onLine", name: "平底鍋", purchaseDate: "2021-09-22", retiredDate: "", pic:require("../../assets/tools/pan.jpg") },
    { id: 2, status: "onLine", name: "湯鍋", purchaseDate: "2021-08-22", retiredDate: "", pic:require("../../assets/tools/soup_pot.jpg") },
    { id: 3, status: "onLine", name: "鑄鐵鍋", purchaseDate: "2021-08-12", retiredDate: "", pic:require("../../assets/tools/cast_iron_skillet.jpg") },
    { id: 4, status: "onLine", name: "炒鍋", purchaseDate: "2021-05-01", retiredDate: "", pic:require("../../assets/tools/wok.jpg") },
    { id: 5, status: "onLine", name: "攪拌機", purchaseDate: "2021-06-15", retiredDate: "", pic:require("../../assets/tools/blender.jpg") },
    { id: 6, status: "onLine", name: "果汁機", purchaseDate: "2021-04-21", retiredDate: "", pic:require("../../assets/tools/juicer.jpg") },
];

// CREATE DATABASE RecipeDb
// GO

// USE recipeDb

// -- Create the table in the specified schema
// CREATE TABLE [dbo].[Tools]
// (
//     [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
//     [Status] VARCHAR(30) NOT NULL,
//     [Name] NVARCHAR(30) NOT NULL,
//     [PurchaseDate] DATE NOT NULL,
//     [RetiredDate] DATE NULL,
//     [Pic] NVARCHAR(100) NOT NULL
//     -- Specify more columns here
// );
// GO

// -- Insert rows into table 'Tools' in schema '[dbo]'
// INSERT INTO [dbo].[Tools]
// ( -- Columns to insert data into
//  [Status], [Name], [PurchaseDate], [RetiredDate], [Pic]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  'onLine', '平底鍋', '2021-09-22',null,'../assets/tools/pan.jpg'
// )
// -- Add more rows here
// GO