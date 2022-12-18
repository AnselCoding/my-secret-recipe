using BE_my_secret_recipe.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BE_my_secret_recipe.Controllers
{
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public HomeController(RecipeDbContext context)
        {
            _context = context;
        }

        // GET: api/Home
        [HttpGet]
        public IActionResult GetMySecretRecipe()
        {
            Tool[] tools = _context.Tools.ToArray();
            Food[] food = _context.Foods.ToArray();
            Carousel[] carousels = _context.Carousels.ToArray();
            RecipesM[] recipesM = _context.RecipesMs.ToArray();
            Ingredient[] ingredients = _context.Ingredients.ToArray();
            RecipesD[] recipesD = _context.RecipesDs.ToArray();

            // 匿名類型 Anonymous types，不需要先建立類別class藍圖
            var db = new
            {
                tools,food,carousels,recipesM,ingredients,recipesD
            };

            return Ok(db);
        }
    }
}
