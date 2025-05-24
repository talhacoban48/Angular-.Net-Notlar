using Microsoft.EntityFrameworkCore;

namespace ConsoleApp.Data.EfCore
{
    public class CustomerOrder
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public int OrderCount { get; set; }
    }

    public class CustomNorthwindContext: NothwindContext
    {
        public DbSet<CustomerOrder> CustomerOrders { get; set; }

        public CustomNorthwindContext()
        {
            
        }

        public CustomNorthwindContext(DbContextOptions<NothwindContext> options):base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<CustomerOrder>(entity => 
            {
                entity.HasNoKey();

                entity.Property(e => e.FirstName).HasColumnName("first_name");
                entity.Property(e => e.CustomerId).HasColumnName("id");
                entity.Property(e => e.OrderCount).HasColumnName("count");
            });


            
        }
    }
}