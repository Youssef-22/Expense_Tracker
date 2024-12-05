namespace ExpenseTrackerBackend.Models
{
    public class Budget
    {
        public int Id { get; set; }
        public string MonthYear { get; set; } // Format: YYYY-MM
        public decimal Amount { get; set; }

        // Navigation property for related expenses
        public ICollection<Expense> Expenses { get; set; } = new List<Expense>();
    }
}
