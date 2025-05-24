﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ConsoleApp
{     
    public class ShopContext: DbContext
    {        
        public DbSet<Product> Products {get;set;}
        public DbSet<Category> Categories { get; set; }

        public static readonly ILoggerFactory MyLoggerFactory
            = LoggerFactory.Create(builder => { builder.AddConsole(); });   
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(MyLoggerFactory)
                .UseSqlite("Data Source=shop.db");
        }
    }

    public class Product
    { 
        public int Id { get; set; }
       
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        public decimal Price { get; set; }

    }

    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            UpdateProduct();
        }

        static void UpdateProduct()
        {

            using(var db = new ShopContext())
            {
                var p = db.Products.Where(i=>i.Id==1).FirstOrDefault();

                if(p!=null)
                {
                    p.Price = 2400;
                    
                    db.Products.Update(p);
                    db.SaveChanges();
                }
            }

            // using(var db = new ShopContext())
            // {
            //     var entity = new Product(){Id=1};
                
            //     db.Products.Attach(entity);

            //     entity.Price = 3000;

            //     db.SaveChanges();
            // }   



            //   using(var db = new ShopContext())
            //   {
            //       // change tracking
            //       var p = db
            //                 .Products
            //                 //.AsNoTracking()
            //                 .Where(i=>i.Id==1)
            //                 .FirstOrDefault();

            //       if (p!=null)
            //       {
            //             p.Price *= 1.2m;
            //             db.SaveChanges();
            //             Console.WriteLine("güncelleme yapıldı.");

            //       }
            //   }  
        }

        static void GetProductByName(string name)
        {
            using(var context = new ShopContext())
            {
                var products = context
                                .Products
                                .Where(p => p.Name.ToLower().Contains(name.ToLower()))
                                .Select(p => 
                                        new {
                                            p.Name,
                                            p.Price
                                        })
                                .ToList();
             
                foreach (var p in products)
                {
                    Console.WriteLine($"name: {p.Name} price: {p.Price}");
                }
                
            }
        }
        static void GetProductById(int id)
        {
            using(var context = new ShopContext())
            {
                var result = context
                                .Products
                                .Where(p => p.Id == id)
                                .Select(p => 
                                        new {
                                            p.Name,
                                            p.Price
                                        })
                                .FirstOrDefault();
             

                
                Console.WriteLine($"name: {result.Name} price: {result.Price}");
                
            }
        }
        static void GetAllProducts()
        {
            using(var context = new ShopContext())
            {
                var products = context
                .Products
                .Select(p => 
                    new {
                        p.Name,
                        p.Price
                    })
                .ToList();

                foreach (var p in products)
                {
                    Console.WriteLine($"name: {p.Name} price: {p.Price}");
                }
            }
        }
        static void AddProducts()
        {
            using(var db = new ShopContext())
            {
                var products = new List<Product>()
                {
                    new Product { Name = "Samsung S6", Price=3000 },
                    new Product { Name = "Samsung S7", Price=4000 },
                    new Product { Name = "Samsung S8", Price=5000 },
                    new Product { Name = "Samsung S9", Price=6000 }
                };          

                db.Products.AddRange(products);                
                db.SaveChanges();

                Console.WriteLine("veriler eklendi.");
            }
        }
        static void AddProduct()
        {
            using(var db = new ShopContext())
            {
                var p = new Product { Name = "Samsung S10", Price=8000 }; 

                db.Products.Add(p);                
                db.SaveChanges();

                Console.WriteLine("veriler eklendi.");
            }
        }
   
    }
}
