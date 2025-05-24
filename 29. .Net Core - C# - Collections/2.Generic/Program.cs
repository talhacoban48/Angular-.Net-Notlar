﻿using System;
using System.Collections.Generic;

namespace ConsoleApp
{

    class Product
    {
        public string Name { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {           
            // Generic List
            List<int> sayilar = new List<int>();
            sayilar.Add(10);
            sayilar.Add(20);
            sayilar.Add(30);

            List<string> isimler = new List<string>();
            isimler.Add("ali");
            isimler.Add("ahmet");
            isimler.Add("yağmur");
            isimler.Add(null);

            List<Product> urunler1 = new List<Product>()
            {
                new Product(){Name="Samsung S6"},
                new Product(){Name="Samsung S7"},
                new Product(){Name="Samsung S8"},
                new Product(){Name="Samsung S9"}                
            };

            IList<Product> urunler2 = new List<Product>()
            {
                new Product(){Name="IPhone 6"},
                new Product(){Name="IPhone 7"},
                new Product(){Name="IPhone 8"},
                new Product(){Name="IPhone 10"}                
            };

            // urunler1.AddRange(urunler2);

            // foreach (var sayi in sayilar)
            // {
            //     Console.WriteLine(sayi);
            // }

            // foreach (var product in urunler1)
            // {
            //     Console.WriteLine(product.Name);
            // }

            // urunler1.ForEach(p=> {
            //         Console.WriteLine(p.Name);
            // });

            int count = urunler1.Count;

            // Console.WriteLine(count);
            // Console.WriteLine(urunler2[0].Name);

            // for (int i = 0; i < urunler2.Count; i++)
            // {
            //     Console.WriteLine(urunler2[i].Name);   
            // }

            // insert items

            // sayilar.Insert(1,100);

            // foreach (var sayi in sayilar)
            // {
            //     Console.WriteLine(sayi);
            // }

            // urunler1.InsertRange(1,urunler2);

            // for (int i = 0; i < urunler1.Count; i++)
            // {
            //     Console.WriteLine(urunler1[i].Name);   
            // }

            sayilar.RemoveAt(sayilar.Count-1);

             foreach (var sayi in sayilar)
            {
                Console.WriteLine(sayi);
            }

        }
    }
}
