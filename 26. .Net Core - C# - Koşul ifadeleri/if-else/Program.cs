using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //    Console.Write("x: ");
            //    int x = int.Parse(Console.ReadLine());
            
            //    Console.Write("y: ");
            //    int y =int.Parse(Console.ReadLine());

            //     if (x>y)
            //         Console.WriteLine("x y den büyük");
            //     else if (x==y)
            //         Console.WriteLine("x y eşit");
            //     else
            //         Console.WriteLine("y x den büyük");

            Console.Write("sayı: ");
            int sayi = int.Parse(Console.ReadLine());

            if (sayi>0)
                Console.WriteLine("sayı pozitif");
            else if (sayi==0)
                Console.WriteLine("sayı sıfır");
            else 
                Console.WriteLine("sayı negatif");

        }
    }
}
