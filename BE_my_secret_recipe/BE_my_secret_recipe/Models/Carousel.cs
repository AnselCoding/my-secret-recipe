using System;
using System.Collections.Generic;

namespace BE_my_secret_recipe.Models
{
    public partial class Carousel
    {
        public int Id { get; set; }
        public string Url { get; set; } = null!;
        public string Header { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Pic { get; set; } = null!;
    }
}
