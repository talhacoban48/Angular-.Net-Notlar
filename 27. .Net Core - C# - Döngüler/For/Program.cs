using System;
using System.Globalization;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
         
            // for
            // int toplam=0;

            // for (int i = 0; i < 100; i++)
            // {
            //     if (i%2==0)
            //     {
            //         toplam += i;
            //     }
            // }            
            // Console.WriteLine(toplam); 

            string[] isimler = {"ada","yiğit","sena","çınar","emel"};

            // Console.WriteLine(isimler[0]);
            // Console.WriteLine(isimler[1]);
            // Console.WriteLine(isimler[2]);
            // Console.WriteLine(isimler[3]);

            for (int i = 0; i < isimler.Length; i++)
            {
                Console.WriteLine(isimler[i]);   
            }
            Console.WriteLine("for bitti");

            // while
            // do-while
            // foreach

        }
    }
}
