using System;
namespace ConsoleApp
{
    class Person
    {
        public string Name { get; set; }
        public string SurName { get; set; }

        public Person(string name, string surname)
        {
            this.Name = name;
            this.SurName = surname;
            Console.WriteLine("Person nesnesi oluşturuldu.");
        }

        public virtual void Intro()
        {
            Console.WriteLine($"name: {this.Name} Surname: {this.SurName}");
        }
    }

    class Student: Person
    {
        public string StudentNumber { get; set; }
        public Student(string name, string surname,string studentnumber): base(name,surname)
        {
            this.StudentNumber = studentnumber;
            Console.WriteLine("Student nesnesi oluşturuldu.");
        }

        public override void Intro()
        {
            Console.WriteLine($"name: {this.Name} Surname: {this.SurName} Number: {this.StudentNumber}");
        }
    }


    class Teacher: Person
    {
        public string Branch { get; set; }
        public Teacher(string name, string surname,string branch):base(name,surname)
        {
            this.Branch = branch;
        }

        public void Teach()
        {
            Console.WriteLine("I am teaching...");
        }        

        public override void Intro()
        {
            Console.WriteLine($"name: {this.Name} Surname: {this.SurName} Branch: {this.Branch}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Inheritance (Kalıtım): Miras Alma
            // Person => name, surname, age, eat(), drink(), run()
            // Student(Person) => studentnumber, study()
            // Teacher(Person) => branch, teach()

            var p = new Person("Ali","Yılmaz");
            var s = new Student("Çınar","Turan","120");
            var t = new Teacher("Sadık","Turan","Bilişim");

            t.Intro();
            t.Teach();

            // p.Intro();
            // s.Intro();



        }
    }
}
