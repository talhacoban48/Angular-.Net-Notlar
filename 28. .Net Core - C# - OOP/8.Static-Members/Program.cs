using System;
using System.Globalization;

namespace ConsoleApp
{
    class Student
    {
        public string Name { get; set; }
        public int StudentNumber { get; set; }

        public static string School = "my school";
        public static string Address = "my school address";

        public Student(string name, int studentnumber)
        {
            this.Name = name;
            this.StudentNumber=studentnumber;
        }

        public void DisplayStudentDetails()
        {
            Console.WriteLine($"name: {this.Name} number: {this.StudentNumber}");
        }

        public static void DisplaySchoolDetails()
        {
            Console.WriteLine($"school name: {School} address: {Address}");
        }
    }

    static class HelperMethods
    {
        public static string KarakterDuzelt(string str)
        {
            return str
                    .Replace("ö","o")
                    .Replace("ü","u")
                    .Replace("ç","c")
                    .Replace(" ","-")
                    .Replace("ğ","g");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // var s1 = new Student("Çınar",100);
            // var s2 = new Student("Sena",101);
            // var s3 = new Student("Yiğit",102);

            // Student.DisplaySchoolDetails();

            // s1.DisplayStudentDetails();
            // s2.DisplayStudentDetails();
            // s3.DisplayStudentDetails();


            string str = "ölçme ve değerlendirme";
            var result = HelperMethods.KarakterDuzelt(str);
            Console.WriteLine(result);
            
        }
    }
}
