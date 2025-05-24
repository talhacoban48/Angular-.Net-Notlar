using System;
using System.Globalization;

namespace ConsoleApp
{
    class Araba
    {
        public string Marka { get; set; }
        public string Model { get; set; }
        public string Renk { get; set; }
        public bool Otomatik { get; set; }
        public int MaxHiz { get; set; }

        public void Start()
        {
            Console.WriteLine($"{this.Marka} {this.Model} çalıştırıldı.");
        }

        public void Stop()
        {
            Console.WriteLine($"{this.Marka} {this.Model} stop edildi.");
        }

        public void Yavasla()
        {
            Console.WriteLine($"{this.Marka} {this.Model}a yavaşlıyor");
        }

        public void Hizlan()
        {
            Console.WriteLine($"{this.Marka} {this.Model} hızlanıyor");
        }

        public void Hizlan(int km)
        {
            if (km > this.MaxHiz)
                Console.WriteLine("Maksimum hızı aşamayız");
            else
                Console.WriteLine($"{this.Marka} {this.Model} {km} km hıza getiriliyor.");
        }

        public void Menu()
        {
            string komut = "";

            do
            {
                Console.WriteLine("1-Start 2-Hızlan 3-Yavaşla 4-Stop Çıkış: Ç");
                Console.Write("Seçiminiz: ");
                komut = Console.ReadLine();

                switch (komut)
                {
                    case "1":
                        this.Start();
                        break;
                    case "2":
                        Console.Write("hız bilgisi girmek istiyor musunuz: ");
                        string secim = Console.ReadLine();

                        if (secim == "e")
                        {
                            Console.Write("hız: ");
                            int km = int.Parse(Console.ReadLine());
                            this.Hizlan(km);
                        }
                        else
                        {
                            this.Hizlan();
                        }
                        break;
                    case "3":
                        this.Yavasla();
                        break;
                    case "4":
                        this.Stop();
                        break;
                    default:
                        Console.WriteLine("uygulamadan çıkıldı.");
                        break;
                }

            } while (komut != "Ç");

        }
    }

    class Islem
    {
        public int Toplama(int a, int b)
        {
            return a + b;
        }
        public int Toplama(int a, int b, int c)
        {
            return a + b + c;
        }

        public int Toplama(int a, int b, int c, int d)
        {
            return a + b + c + d;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // var islem = new Islem();

            // Console.WriteLine(islem.Toplama(10,20)); 
            // Console.WriteLine(islem.Toplama(10,20,30)); 
            // Console.WriteLine(islem.Toplama(10,20,30,40)); 



            // var opel = new Araba();
            // opel.Marka = "Opel";
            // opel.Model = "Astra";
            // opel.Renk = "Beyaz";
            // opel.Otomatik = true;

            // opel.Start();
            // opel.Hizlan();
            // opel.Yavasla();
            // opel.Stop();

            var mazda = new Araba();
            mazda.Marka="Mazda";
            mazda.Model="CX3";
            mazda.Renk="Kırmızı";
            mazda.Otomatik=true;
            mazda.MaxHiz=220;

            mazda.Menu();

        }
    }
}
