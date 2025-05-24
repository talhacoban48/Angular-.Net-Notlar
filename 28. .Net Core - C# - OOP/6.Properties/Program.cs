using System;
using System.Globalization;

namespace ConsoleApp
{ 
    class Product
    {
        private string _name;
        public string Name {
            get 
            {
                return _name;
            }
            set 
            {
                if(!string.IsNullOrEmpty(value))
                {
                    _name = value;
                }
                else
                {
                    throw new Exception("name alanı zorunlu.");
                }
            }
        }
        private double _price;
        public double Price
        {
            get 
            {
                return _price;
            }
            set {
                if(value<0)
                    _price=0;
                else
                    _price=value;
            }
        }

        public bool IsApproved { get; }

        // public void SetPrice(double price)
        // {
        //     if(price<0)
        //         this.Price=0;
        //     else
        //         this.Price = price;
        // }

        // public double GetPrice()
        // {
        //     return this.Price;
        // }

    }

    class Program
    {
        static void Main(string[] args)
        {
            var p = new Product();
            p.Name="Samsung S9";
            p.Price=2000;

            Console.WriteLine(p.Price);
            Console.WriteLine(p.Name);
        }
    }
}
