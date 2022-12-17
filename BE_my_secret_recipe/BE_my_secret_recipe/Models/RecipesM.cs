using System;
using System.Collections.Generic;

namespace BE_my_secret_recipe.Models
{
    public partial class RecipesM
    {
        public int Id { get; set; }
        public string Status { get; set; } = null!;
        public string Name { get; set; } = null!;
        public DateTime? RetiredDate { get; set; }
        public string Description { get; set; } = null!;
        public string Quantity { get; set; } = null!;
        public string CookingTime { get; set; } = null!;
        public string HeadPic { get; set; } = null!;
    }
}
