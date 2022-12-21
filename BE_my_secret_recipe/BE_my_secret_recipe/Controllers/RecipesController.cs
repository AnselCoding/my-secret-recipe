using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_my_secret_recipe.Models;
using Microsoft.AspNetCore.Cors;

namespace BE_my_secret_recipe.Controllers
{
    /// <summary>
    /// this class use to contain data from front end.
    /// </summary>
    public partial class Recipe
    {
        public RecipesM RecipesM { get; set; }
        public RecipesD[] RecipesDs { get; set; }
        public Ingredient[] Ingredients { get; set; }
    }

    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public RecipesController(RecipeDbContext context)
        {
            _context = context;
        }




        // PUT: api/Recipes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
        {
            // update RecipesM
            if (id != recipe.RecipesM.Id)
            {
                return BadRequest();
            }
            _context.Entry(recipe.RecipesM).State = EntityState.Modified;

            // update RecipesDs
            int resultRecipesDs = updateRecipesDs(recipe.RecipesDs);
            if(resultRecipesDs == 0)
            {
                return BadRequest();
            }

            // update Ingredients
            int resultIngredients = updateIngredients(recipe.Ingredients);
            if (resultIngredients == 0)
            {
                return BadRequest();
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!recipesMExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private int updateRecipesDs(RecipesD[] recipesDs)
        {
            foreach (var recipesD in recipesDs)
            {
                if (!recipesDExists(recipesD.RecipeId, recipesD.Step))
                {
                    return 0;
                }

                _context.Entry(recipesD).State = EntityState.Modified;
            }
            return 1;
        }

        private int updateIngredients(Ingredient[] ingredients)
        {
            foreach (var ingredient in ingredients)
            {
                if (!ingredientExists(ingredient.Id))
                {
                    return 0;
                }

                _context.Entry(ingredient).State = EntityState.Modified;
            }
            return 1;
        }





        // POST: api/Recipes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(Recipe recipe)
        {
            // add RecipesM
            _context.RecipesMs.Add(recipe.RecipesM);
            // save RecipesM first, to get RecipeId
            await _context.SaveChangesAsync();

            // add RecipesDs
            foreach (var recipesD in recipe.RecipesDs)
            {
                recipesD.RecipeId = recipe.RecipesM.Id;
                _context.RecipesDs.Add(recipesD);
            }
            // add Ingredients
            foreach (var ingredient in recipe.Ingredients)
            {
                ingredient.RecipeId = recipe.RecipesM.Id;
                _context.Ingredients.Add(ingredient);
            }
            await _context.SaveChangesAsync();

            return Ok(recipe);
        }




        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            // delete RecipesM
            var recipesM = await _context.RecipesMs.FindAsync(id);
            if (recipesM == null)
            {
                return NotFound();
            }
            _context.RecipesMs.Remove(recipesM);

            // delete RecipesDs
            deleteRecipesDs(id);

            // delete Ingredients
            deleteIngredients(id);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void deleteRecipesDs(int id)
        {
            RecipesD[] recipesDs =  _context.RecipesDs.Where(x=>x.RecipeId == id).ToArray();
            foreach (var recipesD in recipesDs)
            {
                _context.RecipesDs.Remove(recipesD);
            }
        }
        private void deleteIngredients(int id)
        {
            Ingredient[] ingredients = _context.Ingredients.Where(x=>x.RecipeId==id).ToArray();
            foreach (var ingredient in ingredients)
            {
                _context.Ingredients.Remove(ingredient);
            }
        }




        private bool recipesMExists(int id)
        {
            return _context.RecipesMs.Any(e => e.Id == id);
        }

        private bool recipesDExists(int id, int step)
        {
            return _context.RecipesDs.Any(e => e.RecipeId == id && e.Step == step);
        }
        private bool ingredientExists(int id)
        {
            return _context.Ingredients.Any(e => e.Id == id);
        }
    }
}
