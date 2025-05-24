using System;
using System.ComponentModel.DataAnnotations;

namespace ConsoleApp
{     
    // Entity Classes
    // Product (Id,Name,Price) => Product(Id,Name,Price)

    public class Product
    { 
        // primary key (Id, <type_name>Id)
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
            
        }
    }
}
