using System;
using System.Collections.Generic;

namespace BE_my_secret_recipe.Models
{
    public partial class Tool
    {
        public int Id { get; set; }
        public string Status { get; set; } = null!;
        public string Name { get; set; } = null!;
        public DateTime PurchaseDate { get; set; }
        public DateTime? RetiredDate { get; set; }
        public string Pic { get; set; } = null!;
    }
}
