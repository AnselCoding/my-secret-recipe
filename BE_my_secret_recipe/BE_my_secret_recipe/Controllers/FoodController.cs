using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BE_my_secret_recipe.Models;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;

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

        // PUT: api/Food/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFood(int id, IFormCollection frm)
        {
            if (frm.Keys.Count <= 0) { 
                return BadRequest(); 
            }

            Food food = JsonConvert.DeserializeObject<Food>(frm["food"]);
            if (id != food.Id)
            {
                return BadRequest();
            }

            if (frm.Files.Count > 0)
            {
                Common.SaveFile(frm.Files[0], "food");
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
        public async Task<ActionResult<Food>> PostFood(IFormCollection frm)
        {
            if (frm.Keys.Count <= 0)
            {
                return BadRequest();
            }

            Food food = JsonConvert.DeserializeObject<Food>(frm["food"]);

            if (frm.Files.Count > 0)
            {
                Common.SaveFile(frm.Files[0], "food");
            }

            _context.Foods.Add(food);
            await _context.SaveChangesAsync();

            return food;
        }        

        private bool FoodExists(int id)
        {
            return _context.Foods.Any(e => e.Id == id);
        }
    }
}
