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
    public class RecipesDsController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public RecipesDsController(RecipeDbContext context)
        {
            _context = context;
        }

        //// GET: api/RecipesDs
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<RecipesD>>> GetRecipesDs()
        //{
        //    return await _context.RecipesDs.ToListAsync();
        //}

        //// GET: api/RecipesDs/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<RecipesD>> GetRecipesD(int id)
        //{
        //    var recipesD = await _context.RecipesDs.FindAsync(id);

        //    if (recipesD == null)
        //    {
        //        return NotFound();
        //    }

        //    return recipesD;
        //}

        // PUT: api/RecipesDs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutRecipesD(int id, RecipesD recipesD)
        //{
        //    if (id != recipesD.RecipeId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(recipesD).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!RecipesDExists(id))
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

        //// POST: api/RecipesDs
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<RecipesD>> PostRecipesD(RecipesD recipesD)
        //{
        //    _context.RecipesDs.Add(recipesD);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (RecipesDExists(recipesD.RecipeId))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetRecipesD", new { id = recipesD.RecipeId }, recipesD);
        //}

        //// DELETE: api/RecipesDs/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteRecipesD(int id)
        //{
        //    var recipesD = await _context.RecipesDs.FindAsync(id);
        //    if (recipesD == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.RecipesDs.Remove(recipesD);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool RecipesDExists(int id)
        //{
        //    return _context.RecipesDs.Any(e => e.RecipeId == id);
        //}
    }
}
