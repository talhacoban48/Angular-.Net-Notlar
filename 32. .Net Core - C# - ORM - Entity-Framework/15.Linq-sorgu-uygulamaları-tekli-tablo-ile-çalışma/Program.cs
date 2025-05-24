﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using ConsoleApp.Data.EfCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new NothwindContext())
            {
                // Tüm müşteri kayıtlarını getiriniz.

                // var customers = db.Customers.ToList();

                // foreach (var item in customers)
                // {
                //     Console.WriteLine(item.FirstName +" "+ item.LastName);
                // }

                // Tüm müşteri kayıtlarının sadece first_name ve last_name bilgilerini getiriniz.

                // var customers = db.Customers.Select(c=>new {
                //       c.FirstName,
                //       c.LastName  
                // });

                // foreach (var item in customers)
                // {
                //     Console.WriteLine(item.FirstName +" "+ item.LastName);
                // }


                // New York' da yaşayan müşterileri isim sırasına göre getiriniz.

                // var customers = db.Customers
                //                 .Where(i=>i.City == "New York")
                //                 .Select(s=> new {s.FirstName,s.LastName})
                //                 .ToList();

                // foreach (var item in customers)
                // {
                //     Console.WriteLine(item.FirstName +" "+ item.LastName);
                // }

                // "Beverages" kategorisine ait ürünlerin isimlerini getiriniz.

                // var productnames = db.Products
                //                 .Where(i=>i.Category=="Beverages")
                //                 .Select(i=>i.ProductName)
                //                 .ToList();

                // foreach (var name in productnames)
                // {
                //     Console.WriteLine(name);
                // }


                // En son eklenen 5 ürün bilgisini alınız.

                // var products = db.Products.OrderByDescending(i=>i.Id).Take(5);

                // foreach (var p in products)
                // {
                //     Console.WriteLine(p.ProductName);
                // }

                // Fiyatı 10 ile 30 arasında olan ürünlerin isim, fiyat bilgilerini azalan şekilde getiriniz.

                // var products = db.Products
                //                 .Where(i=> i.ListPrice>=10 && i.ListPrice<=30)
                //                 .Select(i=> new {
                //                      i.ProductName,
                //                      i.ListPrice  
                //                 }).ToList();


                // foreach (var item in products)
                // {
                //     Console.WriteLine(item.ProductName + " - " +item.ListPrice );
                // }


                // "Beverages" kategorisindeki ürünlerin ortalama fiyatı nedir?

                // var ortalama = db.Products
                //     .Where(i=>i.Category=="Beverages")
                //     .Average(i=>i.ListPrice);

                // Console.WriteLine("ortalama: {0}", ortalama);

                // "Beverages" kategorisinde kaç ürün vardır?

                // var adet = db.Products.Count(i=>i.Category=="Beverages");
                // Console.WriteLine("adet: {0}", adet);

                // "Beverages" veya "Condiments" kategorilerindeki ürünlerin toplam fiyatı nedir?

                // var toplam = db.Products
                // .Where(i=>i.Category == "Beverages" || i.Category=="Condiments")
                // .Sum(i=>i.ListPrice);

                // Console.WriteLine("toplam: {0}", toplam);

                // 'Tea' kelimesini içeren ürünleri getiriniz.

                // var products = db.Products
                //                 .Where(i=>i.ProductName.ToLower().Contains("Tea".ToLower()) || i.Description.Contains("Tea"))
                //                 .ToList();

                // foreach (var item in products)
                // {
                //     Console.WriteLine(item.ProductName);
                // }

                // En pahalı ürün ve en ucuz ürün hangisidir?

                var minPrice = db.Products.Min(i=>i.ListPrice);
                var maxPrice = db.Products.Max(i=>i.ListPrice);

                Console.WriteLine("min: {0} max: {1}", minPrice,maxPrice);


                var minproduct = db.Products
                .Where(i=> i.ListPrice == (db.Products.Min(a=>a.ListPrice)))
                .FirstOrDefault();
                
                Console.WriteLine($"name: {minproduct.ProductName} price: {minproduct.ListPrice}");

                
                var maxproduct = db.Products
                .Where(i=> i.ListPrice == (db.Products.Max(a=>a.ListPrice)))
                .FirstOrDefault();
                
                Console.WriteLine($"name: {maxproduct.ProductName} price: {maxproduct.ListPrice}");

            }
        }
    }
}
