// 前端模擬資料
export default [
    {id:1, url:"https://www.youtube.com/c/jamieoliver", header:"Jamie Oliver", description:"We are all about beautiful recipes, expert tutorials, fresh talent, wonderful food and funny videos every week plus loads of your other favourite YouTubers dropping by to say hello.\nPLUS this channel is about you too. Tell us what you want to see, what's cool and how we can do better and we'll talk straight back. Get involved and subscribe for the latest!", pic:require("../assets/jamie-oliver.jpg")},
    {id:2, url:"https://www.youtube.com/user/gordonramsay", header:"Gordon James Ramsay", description:"The home of Gordon Ramsay on YouTube. Recipe tutorials, tips, techniques and the best bits from the archives. New uploads every week - subscribe now to stay up to date!", pic:require("../assets/gordon-ramsay.jpg")},
    {id:3, url:"https://icook.tw/", header:"愛料理", description:"iCook愛料理是由台灣寶利拾股份有限公司營運、提供網友上傳料理食譜的網路分享服務平台。使用者可以免費上傳自己的料理食譜與成品照片，部份食譜亦提供影音版本，後續開設愛料理市集、愛料理生活誌，提供大眾有關廚房用具、食品與食材等資訊，以充實料理、健康、生活等相關知識。", pic:require("../assets/icook.jpg")},
]

// -- Create the table in the specified schema
// CREATE TABLE [dbo].[Carousel]
// (
//     [Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), -- Primary Key column
//     [Url] VARCHAR(100) NOT NULL,
//     [Header] NVARCHAR(50) NOT NULL,
//     [Description] NVARCHAR(MAX) NOT NULL,
//     [Pic] NVARCHAR(100) NOT NULL
//     -- Specify more columns here
// );
// GO

// -- Insert rows into table 'Carousel' in schema '[dbo]'
// INSERT INTO [dbo].[Carousel]
// ( -- Columns to insert data into
//  [Url], [Header], [Description], [Pic]
// )
// VALUES
// ( -- First row: values for the columns in the list above
//  'https://www.youtube.com/c/jamieoliver',
//  'Jamie Oliver', 
//  'We are all about beautiful recipes, expert tutorials, fresh talent, wonderful food and funny videos every week plus loads of your other favourite YouTubers dropping by to say hello.\nPLUS this channel is about you too. Tell us what you want to see, what`s cool and how we can do better and we`ll talk straight back. Get involved and subscribe for the latest!', 
//  '../assets/jamie-oliver.jpg'
// )
// -- Add more rows here
// GO