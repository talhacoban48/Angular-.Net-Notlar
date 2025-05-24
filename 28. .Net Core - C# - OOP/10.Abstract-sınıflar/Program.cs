using System;
namespace ConsoleApp
{
    abstract class Person
    {
        public string Name { get; set; }
        public string SurName { get; set; }

        public Person(string name, string surname)
        {
            this.Name = name;
            this.SurName = surname;
            Console.WriteLine("Person nesnesi oluşturuldu.");
        }

        public void Greeting()
        {
            Console.WriteLine("I am a person");
        }
        public abstract void Intro();
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


    abstract class Shape
    {
        public int Width { get; set; }
        public int Height { get; set; }

        public Shape(int w, int h)
        {
            this.Width = w;
            this.Height= h;        
        }

        public int CalculateArea()
        {
            return this.Width * this.Height;
        }
        public abstract void Draw();      
    }

    class Square: Shape
    {

        public Square(int w, int h):base(w,h)
        {        
        }
        public override void Draw()
        {
            Console.WriteLine("Draw a square");
        }
    }

    class Rectangle: Shape
    {
        public Rectangle(int w, int h):base(w,h)
        {        
        }
        public override void Draw()
        {
            Console.WriteLine("Draw a rectangle");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {           
            // Abstract Class: Soyut Sınıf      

            var shapes = new Shape[3];

            shapes[0] = new Rectangle(10,15);
            shapes[1] = new Square(15,15);
            shapes[2] = new Rectangle(15,20);

            foreach (var shape in shapes)
            {
                shape.Draw();
                Console.WriteLine($"alan: {shape.CalculateArea()}");
            }

        }
    }
}
