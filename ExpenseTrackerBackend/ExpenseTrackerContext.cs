using ExpenseTrackerBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTrackerBackend
{
    public class ExpenseTrackerContext : DbContext
    {
        public ExpenseTrackerContext(DbContextOptions<ExpenseTrackerContext> options)
           : base(options)
        {
        }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<Budget> Budgets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                "Server=localhost;Database=expense_tracker;User=root;Password=;",
                new MySqlServerVersion(new Version(8, 0, 31))
            );
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Expense>()
                .HasOne(e => e.Budget) // An Expense has one Budget
                .WithMany(b => b.Expenses) // A Budget has many Expenses
                .HasForeignKey(e => e.BudgetId) // Foreign key
                .OnDelete(DeleteBehavior.Cascade); // Cascade delete
        }
    }
}
