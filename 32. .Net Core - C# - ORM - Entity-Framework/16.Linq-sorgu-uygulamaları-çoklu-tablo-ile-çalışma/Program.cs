﻿using System;
using System.Collections.Generic;
using System.Linq;
using ConsoleApp.Data.EfCore;
using Microsoft.EntityFrameworkCore;

namespace ConsoleApp
{
    public class CustomerDemo
    {
        public CustomerDemo()
        {
            Orders = new List<OrderDemo>();
        }
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public int OrderCount { get; set; }
        public List<OrderDemo> Orders { get; set; }
    }

    public class OrderDemo
    {
        public int OrderId { get; set; }
        public decimal Total { get; set; }
        public List<ProductDemo> Products { get; set; }
    }
    public class ProductDemo
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new NothwindContext())
            {
                var customers = db.Customers
                    .Where(i => i.Id == 3)
                    .Select(i => new CustomerDemo
                    {
                        CustomerId = i.Id,
                        Name = i.FirstName,
                        OrderCount = i.Orders.Count(),
                        Orders = i.Orders.Select(a => new OrderDemo
                        {
                            OrderId = a.Id,
                            Total = (decimal)a.OrderDetails.Sum(od => od.Quantity * od.UnitPrice),
                            Products = a.OrderDetails.Select(p => new ProductDemo
                            {
                                ProductId = (int)p.ProductId,
                                Name = p.Product.ProductName
                            }).ToList()
                        }).ToList()
                    })
                    .OrderBy(i => i.OrderCount)
                    .ToList();

                foreach (var customer in customers)
                {
                    Console.WriteLine($"id: {customer.CustomerId} name: {customer.Name} count: {customer.OrderCount}");
                    foreach (var order in customer.Orders)
                    {
                        Console.WriteLine($"order id: {order.OrderId} total: {order.Total}");

                        foreach (var product in order.Products)
                        {
                            Console.WriteLine($"product id: {product.ProductId} name: {product.Name}");
                        }
                    }
                }

            }
        }
    }
}
