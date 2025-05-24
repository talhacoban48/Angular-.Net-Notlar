﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp
{   
    class Program
    {
        static void Main(string[] args)
        {           
           // Dictionary<TKey, TValue>

           Dictionary<int,string> plakalar = new Dictionary<int, string>();

           plakalar.Add(34,"istanbul");
           plakalar.Add(35,"izmir");
           plakalar.Add(53,"rize");

           Dictionary<int,string> sayilar = new Dictionary<int, string>()
           {
               {1,"Bir"},
               {2,"İki"},
               {3,"Üç"}
           };

           Console.WriteLine(sayilar[1]);

           foreach (KeyValuePair<int,string> plaka in plakalar)
           {
               Console.WriteLine($"{plaka.Key} {plaka.Value}");
           }

           for (int i = 0; i < plakalar.Count; i++)
           {
               Console.WriteLine($"{plakalar.Keys.ElementAt(i)} {plakalar[plakalar.Keys.ElementAt(i)]}");
           }

            Console.WriteLine(plakalar.ContainsKey(34));
            Console.WriteLine(plakalar.Contains(new KeyValuePair<int,string>(34,"istanbul")));

            plakalar.Remove(34);
            plakalar.Remove(53);

            Hashtable ht = new Hashtable()
            {
                
            };

            ht.Add(1,"ali");
            ht.Add(2,"ahmet");
            ht.Add("3","ali");

        }
    }
}
