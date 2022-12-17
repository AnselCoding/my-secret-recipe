using System;
using System.Collections.Generic;

namespace BE_my_secret_recipe.Models
{
    public partial class RecipesD
    {
        public int RecipeId { get; set; }
        public int Step { get; set; }
        public string Description { get; set; } = null!;
        public string Pic { get; set; } = null!;
    }
}
