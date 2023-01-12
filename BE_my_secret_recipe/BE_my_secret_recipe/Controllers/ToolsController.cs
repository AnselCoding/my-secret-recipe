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
    public class ToolsController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public ToolsController(RecipeDbContext context)
        {
            _context = context;
        }

        // PUT: api/Tools/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTool(int id, IFormCollection frm)
        {
            if (frm.Keys.Count <= 0)
            {
                return BadRequest();
            }

            Tool tool = JsonConvert.DeserializeObject<Tool>(frm["tool"]);
            if (id != tool.Id)
            {
                return BadRequest();
            }

            if (frm.Files.Count > 0)
            {
                Common.SaveFile(frm.Files[0], "tools");
            }

            _context.Entry(tool).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToolExists(id))
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

        // POST: api/Tools
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tool>> PostTool(IFormCollection frm)
        {
            if (frm.Keys.Count <= 0)
            {
                return BadRequest();
            }

            Tool tool = JsonConvert.DeserializeObject<Tool>(frm["tool"]);

            if (frm.Files.Count > 0)
            {
                Common.SaveFile(frm.Files[0], "tools");
            }

            _context.Tools.Add(tool);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTool", new { id = tool.Id }, tool);
            return tool;
        }

        // DELETE: api/Tools/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTool(int id)
        {
            var tool = await _context.Tools.FindAsync(id);
            if (tool == null)
            {
                return NotFound();
            }

            _context.Tools.Remove(tool);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToolExists(int id)
        {
            return _context.Tools.Any(e => e.Id == id);
        }
    }
}
