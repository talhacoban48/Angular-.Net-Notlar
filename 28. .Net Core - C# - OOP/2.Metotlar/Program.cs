using System;
using System.Globalization;

namespace ConsoleApp
{

    class Product
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }

    class Program
    {

        class Person
        {
            public string Name { get; set; }
            public int Year { get; set; }

            public string Intro()
            {
                return $"isim: {this.Name} yaş: {this.CalculateAge()}";
            }

            public int CalculateAge()
            {
                return DateTime.Now.Year - this.Year;
            }
        }




        static void Main(string[] args)
        {
            // Class => object (nesne)
            // Ogrenci => ogr1,ogr2

            var p1 = new Person { Name = "Ada", Year = 2012 };
            var p2 = new Person { Name = "Yiğit", Year = 2010 };
            var p3 = new Person { Name = "Sena", Year = 1999 };

            // var str1 = p1.Intro();
            // var str2 = p2.Intro();
            // var str3 = p3.Intro();

            Console.WriteLine(p1.Intro());
            Console.WriteLine(p2.Intro());
            Console.WriteLine(p3.Intro());

            // Console.WriteLine($"name: {p1.Name} age: {2020 - p1.Year}");
            // Console.WriteLine($"name: {p2.Name} age: {2020 - p2.Year}");
            // Console.WriteLine($"name: {p3.Name} age: {2020 - p3.Year}");

        }
    }
}
