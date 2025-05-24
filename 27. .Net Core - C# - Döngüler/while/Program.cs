using System;
using System.Globalization;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // while

            // for (int i = 1; i < 10; i++)
            // {
            //     Console.WriteLine(i);
            // }

            // int i=0;
            // while (i < 10)
            // {
            //     if (i%2==0)
            //         Console.WriteLine("sayı çift: "+i);
            //     else
            //         Console.WriteLine("sayı tek: "+i);
            //     i++;
            // }

            // string name = " ";

            // while (string.IsNullOrEmpty(name))
            // {
            //     Console.Write("isminiz: ");
            //     name = Console.ReadLine();
            // }

            // Console.Write($"merhaba {name}");


            // do-while

            string name = "";
            do
            {
                Console.Write("isminiz: ");
                name = Console.ReadLine();

            } while (string.IsNullOrEmpty(name));

             Console.Write($"merhaba {name}");
            // foreach

        }
    }
}
