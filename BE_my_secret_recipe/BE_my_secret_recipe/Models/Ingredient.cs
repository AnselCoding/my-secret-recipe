﻿using System;
using System.Collections.Generic;

namespace BE_my_secret_recipe.Models
{
    public partial class Ingredient
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public string Name { get; set; } = null!;
        public string Amount { get; set; } = null!;
    }
}
