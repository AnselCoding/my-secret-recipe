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
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public FoodController(RecipeDbContext context)
        {
            _context = context;
        }

        //// GET: api/Food
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Food>>> GetFoods()
        //{
        //    return await _context.Foods.ToListAsync();
        //}

        //// GET: api/Food/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Food>> GetFood(int id)
        //{
        //    var food = await _context.Foods.FindAsync(id);

        //    if (food == null)
        //    {
        //        return NotFound();
        //    }

        //    return food;
        //}

        // PUT: api/Food/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFood(int id, Food food)
        {
            if (id != food.Id)
            {
                return BadRequest();
            }

            _context.Entry(food).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodExists(id))
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

        // POST: api/Food
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Food>> PostFood(Food food)
        {
            _context.Foods.Add(food);
            await _context.SaveChangesAsync();

            return food;
        }

        //// DELETE: api/Food/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteFood(int id)
        //{
        //    var food = await _context.Foods.FindAsync(id);
        //    if (food == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Foods.Remove(food);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool FoodExists(int id)
        {
            return _context.Foods.Any(e => e.Id == id);
        }
    }
}
