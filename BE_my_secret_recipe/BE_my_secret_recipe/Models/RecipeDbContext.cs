using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BE_my_secret_recipe.Models
{
    public partial class RecipeDbContext : DbContext
    {
        public RecipeDbContext()
        {
        }

        public RecipeDbContext(DbContextOptions<RecipeDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Carousel> Carousels { get; set; } = null!;
        public virtual DbSet<Food> Foods { get; set; } = null!;
        public virtual DbSet<Ingredient> Ingredients { get; set; } = null!;
        public virtual DbSet<RecipesD> RecipesDs { get; set; } = null!;
        public virtual DbSet<RecipesM> RecipesMs { get; set; } = null!;
        public virtual DbSet<Tool> Tools { get; set; } = null!;

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Server=DESKTOP-MTV5J13\\SQLSEVER_2018R2;Database=RecipeDb;Integrated Security=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Carousel>(entity =>
            {
                entity.Property(e => e.Header).HasMaxLength(50);

                entity.Property(e => e.Pic).HasMaxLength(100);

                entity.Property(e => e.Url)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Food>(entity =>
            {
                entity.ToTable("Food");

                entity.Property(e => e.ExpiryDate).HasColumnType("date");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Pic).HasMaxLength(100);

                entity.Property(e => e.PurchaseDate).HasColumnType("date");

                entity.Property(e => e.RetiredDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Ingredient>(entity =>
            {
                entity.Property(e => e.Amount).HasMaxLength(30);

                entity.Property(e => e.Name).HasMaxLength(30);
            });

            modelBuilder.Entity<RecipesD>(entity =>
            {
                entity.HasKey(e => new { e.RecipeId, e.Step });

                entity.ToTable("RecipesD");

                entity.Property(e => e.Pic).HasMaxLength(100);
            });

            modelBuilder.Entity<RecipesM>(entity =>
            {
                entity.ToTable("RecipesM");

                entity.Property(e => e.CookingTime).HasMaxLength(10);

                entity.Property(e => e.HeadPic).HasMaxLength(100);

                entity.Property(e => e.Name).HasMaxLength(30);

                entity.Property(e => e.Quantity).HasMaxLength(10);

                entity.Property(e => e.RetiredDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tool>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(30);

                entity.Property(e => e.Pic).HasMaxLength(100);

                entity.Property(e => e.PurchaseDate).HasColumnType("date");

                entity.Property(e => e.RetiredDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
