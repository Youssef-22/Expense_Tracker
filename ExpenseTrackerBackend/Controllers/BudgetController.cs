using Microsoft.AspNetCore.Mvc;
using ExpenseTrackerBackend.Models;
using ExpenseTrackerBackend;



[ApiController]
[Route("api/[controller]")]
public class BudgetsController : ControllerBase
{
    private readonly ExpenseTrackerContext _context;

    public BudgetsController(ExpenseTrackerContext context)
    {
        _context = context;
    }

    

    [HttpGet("{id}")]
    public IActionResult GetBudget(int id)
    {
        var budget = _context.Budgets.FirstOrDefault(b => b.Id == id);
        if (budget == null)
        {
            return NotFound(new { Message = "Budget not found" });
        }
        return Ok(budget);
    }

    [HttpPost]
    public IActionResult AddBudget([FromBody] Budget budget)
    {
        _context.Budgets.Add(budget);
        _context.SaveChanges();
        //eturn CreatedAtAction(nameof(GetBudget), new { monthYear = budget.MonthYear }, budget);
        return CreatedAtAction(nameof(GetBudget), new { id = budget.Id }, budget);
    }




    [HttpGet("progress/{id}")]
    public IActionResult GetBudgetProgress(int id)
    {
        var budget = _context.Budgets.FirstOrDefault(b => b.Id == id);
        if (budget == null)
        {
            return NotFound(new { Message = "Budget not found" });
        }

        var totalExpenses = _context.Expenses
            .Where(e => e.BudgetId == id)
            .Sum(e => e.Amount);

        var remaining = budget.Amount - totalExpenses;

        // Prevent division by zero
        var progress = budget.Amount > 0 ? (totalExpenses / budget.Amount) * 100 : 0;

        return Ok(new
        {
            TotalBudget = budget.Amount,
            TotalExpenses = totalExpenses,
            RemainingBudget = remaining,
            Progress = progress
        });
    }






    [HttpGet("status/{id}")]
public IActionResult GetBudgetStatus(int id)
{
    var budget = _context.Budgets.FirstOrDefault(b => b.Id == id);
    if (budget == null)
    {
        return NotFound(new { Message = "Budget not found" });
    }

    var totalExpenses = _context.Expenses
        .Where(e => e.BudgetId == id)
        .Sum(e => e.Amount);

    return Ok(new
    {
        IsOverBudget = totalExpenses > budget.Amount,
        TotalBudget = budget.Amount,
        TotalExpenses = totalExpenses
    });
}



    [HttpGet("{id}/expenses")]
    public IActionResult GetExpensesForBudget(int id)
    {
        var budget = _context.Budgets.FirstOrDefault(b => b.Id == id);
        if (budget == null)
        {
            return NotFound(new { Message = "Budget not found" });
        }

        var expenses = _context.Expenses.Where(e => e.BudgetId == id).ToList();
        return Ok(expenses);
    }



}

