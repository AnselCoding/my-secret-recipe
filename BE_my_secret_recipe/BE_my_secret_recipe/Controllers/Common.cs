namespace BE_my_secret_recipe.Controllers
{
    static public class Common
    {
        public static void SaveFile(IFormFile imageFile, string PathFloder)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot\\Image\\{PathFloder}") + "\\" + imageFile.FileName; //檔案存放位置
            
            using (var stream = System.IO.File.Create(filePath))
            {
                imageFile.CopyToAsync(stream);
            }
        }
    }
}
