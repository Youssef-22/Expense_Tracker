using System.Text.Json.Serialization;

namespace ExpenseTrackerBackend.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string? Description { get; set; }

        
        public int BudgetId { get; set; }
        //blic Budget Budget { get; set; } 
        [JsonIgnore]
        public Budget? Budget { get; set; }
    }
}
