// 前端模擬資料
export default [
    {id:1, status:"onLine", name:"醬油", purchaseDate:"2021-09-22", expiryDate:"2022-10-23",retiredDate:"", pic:require("../../assets/food/soy_sauce.jpg")},
    {id:2, status:"onLine", name:"胡椒", purchaseDate:"2021-05-20", expiryDate:"2022-05-23",retiredDate:"", pic:require("../../assets/food/peper.jpg")},
    {id:3, status:"onLine", name:"辣椒", purchaseDate:"2021-11-22", expiryDate:"2022-11-23",retiredDate:"", pic:require("../../assets/food/chili.jpg")},
    {id:4, status:"onLine", name:"蜂蜜", purchaseDate:"2021-12-22", expiryDate:"2022-12-23",retiredDate:"", pic:require("../../assets/food/honey.jpg")},
    {id:5, status:"onLine", name:"咖啡", purchaseDate:"2022-05-22", expiryDate:"2023-05-23",retiredDate:"", pic:require("../../assets/food/coffee.jpg")},
    {id:6, status:"onLine", name:"咖哩粉", purchaseDate:"2021-11-04", expiryDate:"2022-11-05",retiredDate:"", pic:require("../../assets/food/curry_powder.jpg")},
    {id:7, status:"onLine", name:"鹽巴", purchaseDate:"2021-09-22", expiryDate:"2022-11-23",retiredDate:"", pic:require("../../assets/food/salt.jpg")},
    {id:8, status:"onLine", name:"玫瑰鹽", purchaseDate:"2022-09-22", expiryDate:"2023-09-23",retiredDate:"", pic:require("../../assets/food/rose_salt.jpg")},
];

// -- Create the table in the specified schema
// CREATE TABLE [dbo].[Food]
// (
//     [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
//     [Status] VARCHAR(30) NOT NULL,
//     [Name] NVARCHAR(30) NOT NULL,
//     [PurchaseDate] DATE NOT NULL,
//     [ExpiryDate] DATE NOT NULL,
//     [RetiredDate] DATE NULL,
//     [Pic] NVARCHAR(100) NOT NULL
//     -- Specify more columns here
// );
// GO

// -- Insert rows into table 'Food' in schema '[dbo]'
// INSERT INTO [dbo].[Food]
// ( -- Columns to insert data into
//  [Status], [Name], [PurchaseDate], [ExpiryDate], [RetiredDate], [Pic]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  'onLine', '醬油', '2021-09-22','2022-10-23',null,'soy_sauce.jpg'
// )
// -- Add more rows here
// GO