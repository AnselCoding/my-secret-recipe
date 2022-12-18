using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_my_secret_recipe.Models;

namespace BE_my_secret_recipe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesMsController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public RecipesMsController(RecipeDbContext context)
        {
            _context = context;
        }

        //// GET: api/RecipesMs
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<RecipesM>>> GetRecipesMs()
        //{
        //    return await _context.RecipesMs.ToListAsync();
        //}

        //// GET: api/RecipesMs/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<RecipesM>> GetRecipesM(int id)
        //{
        //    var recipesM = await _context.RecipesMs.FindAsync(id);

        //    if (recipesM == null)
        //    {
        //        return NotFound();
        //    }

        //    return recipesM;
        //}

        //// PUT: api/RecipesMs/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutRecipesM(int id, RecipesM recipesM)
        //{
        //    if (id != recipesM.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(recipesM).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!RecipesMExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/RecipesMs
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<RecipesM>> PostRecipesM(RecipesM recipesM)
        //{
        //    _context.RecipesMs.Add(recipesM);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetRecipesM", new { id = recipesM.Id }, recipesM);
        //}

        //// DELETE: api/RecipesMs/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteRecipesM(int id)
        //{
        //    var recipesM = await _context.RecipesMs.FindAsync(id);
        //    if (recipesM == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.RecipesMs.Remove(recipesM);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool RecipesMExists(int id)
        //{
        //    return _context.RecipesMs.Any(e => e.Id == id);
        //}
    }
}
