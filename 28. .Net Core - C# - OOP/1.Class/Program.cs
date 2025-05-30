﻿using System;
using System.Globalization;

namespace ConsoleApp
{

    class Ogrenci
    {
        public int OgrNo { get; set; }
        public string Ad { get; set; }
        public string Sube { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int[] ogrno = {100,200,300};
            string[] ad = {"Çınar","Ada","Yiğit"};            
            string[] sube = {"10A","10B","11A"};

            Console.WriteLine($"no: {ogrno[0]} ad: {ad[0]} sube: {sube[0]}");
            Console.WriteLine($"no: {ogrno[1]} ad: {ad[1]} sube: {sube[1]}");
            Console.WriteLine($"no: {ogrno[2]} ad: {ad[2]} sube: {sube[2]}");


            Ogrenci ogr1 = new Ogrenci();
            ogr1.OgrNo = 100;
            ogr1.Ad = "Çınar";
            ogr1.Sube ="10A";

            Console.WriteLine($"no: {ogr1.OgrNo} ad: {ogr1.Ad} sube: {ogr1.Sube}");

            Ogrenci ogr2 = new Ogrenci()
            {
                OgrNo = 200,
                Ad="Ada",
                Sube="10B" 
            };

            Console.WriteLine($"no: {ogr2.OgrNo} ad: {ogr2.Ad} sube: {ogr2.Sube}");
            
            Ogrenci ogr3 = new Ogrenci()
            {
                OgrNo = 300,
                Ad="Yiğit",
                Sube="11A" 
            };

            Console.WriteLine($"no: {ogr3.OgrNo} ad: {ogr3.Ad} sube: {ogr3.Sube}");

            Console.WriteLine("**************************");

            Ogrenci[] ogrenciler = new Ogrenci[3];

            ogrenciler[0] = ogr1;
            ogrenciler[1] = ogr2;
            ogrenciler[2] = ogr3;

            for (int i = 0; i < ogrenciler.Length; i++)
            {
                 Console.WriteLine($"no: {ogrenciler[i].OgrNo} ad: {ogrenciler[i].Ad} sube: {ogrenciler[i].Sube}");
            }


        }
    }
}
