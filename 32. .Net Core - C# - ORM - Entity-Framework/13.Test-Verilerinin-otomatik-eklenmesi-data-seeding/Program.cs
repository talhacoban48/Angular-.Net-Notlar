using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ConsoleApp
{
    public class ShopContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public static readonly ILoggerFactory MyLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(MyLoggerFactory)
                .UseMySql(@"server=localhost;port=3306;database=ShopDb;user=root;password=mysql1234;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                        .HasIndex(u=>u.Username)
                        .IsUnique();

            modelBuilder.Entity<Product>()
                        .ToTable("Urunler");

            modelBuilder.Entity<Customer>()
                        .Property(p=>p.IdentityNumber)
                        .HasMaxLength(11)
                        .IsRequired();

            modelBuilder.Entity<ProductCategory>()
                        .HasKey(t => new { t.ProductId, t.CategoryId });

            modelBuilder.Entity<ProductCategory>()
                        .HasOne(pc => pc.Product)
                        .WithMany(p => p.ProductCategories)
                        .HasForeignKey(pc => pc.ProductId);

            modelBuilder.Entity<ProductCategory>()
                        .HasOne(pc => pc.Category)
                        .WithMany(c => c.ProductCategories)
                        .HasForeignKey(pc => pc.CategoryId);

        }
    }
    
    public static class DataSeeding
    {
        public static void Seed(DbContext context)
        {
            if (context.Database.GetPendingMigrations().Count()==0)
            {
                if (context is ShopContext)
                {
                    ShopContext _context = context as ShopContext;

                    if (_context.Products.Count()==0)
                    {
                        _context.Products.AddRange(Products);
                    }

                    if(_context.Categories.Count()==0)
                    {
                       _context.Categories.AddRange(Categories);
                    }
                }

                context.SaveChanges();

            }
        }
   
        private static Product[] Products = {
            new Product(){Name="Samsun S6",Price=2000},
            new Product(){Name="Samsun S7",Price=3000},
            new Product(){Name="Samsun S8",Price=4000},
            new Product(){Name="Samsun S9",Price=5000}
        };

         private static Category[] Categories = {
            new Category(){Name="Telefon"},
            new Category(){Name="Elektronik"},
            new Category(){Name="Bilgisayar"}
        };
    }
    public class User
    {
        public int Id { get; set; }
        [Required]
        [MinLength(8),MaxLength(15)]
        public string Username { get; set; }
        [Column(TypeName="varchar(20)")]
        public string Email { get; set; }

        public Customer Customer { get; set; }
        public List<Address> Addresses { get; set; }
    }
    public class Customer
    {
        [Column("customer_id")]
        public int Id { get; set; }
        [Required]
        public string IdentityNumber { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [NotMapped]
        public string FullName { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
    public class Supplier
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TaxNumber { get; set; }
    }
    public class Address
    {
        public int Id { get; set; }
        public string Fullname { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }
    }
    public class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime InsertedDate { get; set; } = DateTime.Now;

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime LastUpdatedDate { get; set; } = DateTime.Now;
        public List<ProductCategory> ProductCategories { get; set; }

    }
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<ProductCategory> ProductCategories { get; set; }
    }

    [Table("UrunKategorileri")]
    public class ProductCategory
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            DataSeeding.Seed(new ShopContext());
        }
    }
}
