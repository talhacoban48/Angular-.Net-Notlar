using System;
using System.Globalization;

namespace ConsoleApp
{
    class Araba
    {        
        public Araba()
        {
            this.MaxHiz = 180;
            Console.WriteLine("yapıcı metot çalıştırıldı.");
        }
        public Araba(int maxhiz)
        {
            this.MaxHiz = maxhiz;
        }

        public Araba(string marka,string model,string renk,bool otomatik,int maxhiz)
        {
            this.Marka = marka;
            this.Model = model;
            this.Renk = renk;
            this.Otomatik = otomatik;
            this.MaxHiz = maxhiz;
        }

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

    class Program
    {
        static void Main(string[] args)
        {
            var opel = new Araba(200);
            Console.WriteLine(opel.MaxHiz);

            // opel.Marka = "Opel";
            // opel.Model = "Astra";
            // opel.Renk = "Beyaz";
            // opel.Otomatik = true;

            var mazda = new Araba("Mazda","CX3","Kırmızı",true,220);
            
            Console.WriteLine(mazda.Marka);
            Console.WriteLine(mazda.Model);
            Console.WriteLine(mazda.Renk);
            Console.WriteLine(mazda.Otomatik);
            Console.WriteLine(mazda.MaxHiz); 

            
            // mazda.Menu();

        }
    }
}
