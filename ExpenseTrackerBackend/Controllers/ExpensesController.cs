using Microsoft.AspNetCore.Mvc;
using ExpenseTrackerBackend.Models;
using ExpenseTrackerBackend;

[ApiController]
[Route("api/[controller]")]
public class ExpensesController : ControllerBase
{
    private readonly ExpenseTrackerContext _context;

    public ExpensesController(ExpenseTrackerContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAllExpenses()
    {
        var expenses = _context.Expenses.ToList();
        return Ok(expenses);
    }

    /*
    [HttpPost]
    public IActionResult AddExpense([FromBody] Expense expense)
    {
        _context.Expenses.Add(expense);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetAllExpenses), new { id = expense.Id }, expense);
    }
    */

    [HttpPost]
    public IActionResult AddExpense([FromBody] Expense expense)
    {
        var budget = _context.Budgets.FirstOrDefault(b => b.Id == expense.BudgetId);
        if (budget == null)
        {
            return NotFound(new { Message = "Budget not found for the specified BudgetId" });
        }

        _context.Expenses.Add(expense);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetAllExpenses), new { id = expense.Id }, expense);
    }


    [HttpDelete("{id}")]
    public IActionResult DeleteExpense(int id)
    {
        var expense = _context.Expenses.FirstOrDefault(e => e.Id == id);
        if (expense == null)
        {
            return NotFound(new { Message = "Expense not found" });
        }

        _context.Expenses.Remove(expense);
        _context.SaveChanges();
        return NoContent();
    }



    [HttpGet("category/{category}")]
    public IActionResult GetExpensesByCategory(string category)
    {
        var expenses = _context.Expenses.Where(e => e.Category == category).ToList();
        return Ok(expenses);
    }


}
