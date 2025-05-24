using System;
using System.Data.SqlClient;
using MySql.Data.MySqlClient;

namespace ConsoleApp
{       
    class Program
    {
        static void Main(string[] args)
        {
           GetAllProducts();
        }

        static void GetAllProducts()
        {
            using(var connection = GetMySqlConnection())
            {
                try
                {
                    connection.Open();
                    
                    string sql = "select * from products";

                    MySqlCommand command = new MySqlCommand(sql,connection);

                    MySqlDataReader reader = command.ExecuteReader();

                    while(reader.Read())
                    {
                        Console.WriteLine($"name: {reader[3]} price:{reader[6]}");   
                    }
                    reader.Close();
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        static MySqlConnection GetMySqlConnection()
        {
            string connectionString = @"server=localhost;port=3306;database=northwind;user=root;password=mysql1234;";
            return new MySqlConnection(connectionString);         
        }
        static void GetSqlConnection()
        {
            string connectionString = @"Data Source=.\SQLEXPRESS;Initial Catalog=Northwind;Integrated Security=SSPI;";

            // driver, provider

            using(var connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("bağlantı sağlandı.");
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                finally
                {
                    connection.Close();
                }
            }

        }

      
    }
}
