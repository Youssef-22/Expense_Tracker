import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  budgetId: number = 1; // Example budget ID
  budget: any = null; // Budget details
  expenses: any[] = []; // List of expenses
  isOverBudget: boolean = false; // Flag for budget status
  newBudgetAmount: number = 0; // Input for new budget
  expenseCategory: string = ''; // Category of the new expense
  expenseAmount: number = 0; // Amount of the new expense
  expenseDescription: string = ''; // Description of the new expense
  expenseDate: string = ''; // Date of the new expense
  totalExpenses: number = 0; // Total expenses

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.fetchBudgetDetails();
    this.fetchExpenses();
    this.fetchBudgetProgress();
  }

  fetchBudgetProgress(): void {
    this.expenseService.getBudgetProgress(this.budgetId).subscribe((data) => {
      console.log('Budget progress fetched:', data);
      this.budget = {
        ...this.budget,
        amount: data.totalBudget,
        totalExpenses: data.totalExpenses,
        remainingBudget: data.remainingBudget,
      };
      this.isOverBudget = data.remainingBudget < 0;

      if (this.isOverBudget) {
        alert('Warning: You are over budget!');
      }

      this.budget.progress = data.progress;
    });
  }

  fetchBudgetDetails(): void {
    this.expenseService.getBudgetStatus(this.budgetId).subscribe((data) => {
      console.log('Fetched budget details:', data);
      this.budget = {
        ...data,
        amount: data.amount || 0,
        totalExpenses: data.totalExpenses || 0,
      };
      this.isOverBudget = this.budget.totalExpenses > this.budget.amount;

      if (this.isOverBudget) {
        alert('Warning: You are over budget!');
      }
    });
  }

  fetchExpenses(): void {
    this.expenseService.getExpenses(this.budgetId).subscribe((data) => {
      console.log('Fetched expenses:', data);
      this.expenses = data || [];
      this.updateTotalExpenses();
    });
  }

  updateTotalExpenses(): void {
    if (this.expenses.length > 0) {
      this.budget.totalExpenses = this.expenses.reduce(
        (total, expense) => total + (expense.amount || 0),
        0
      );
    } else {
      this.budget.totalExpenses = 0;
    }
    this.isOverBudget = this.budget.totalExpenses > (this.budget.amount || 0);

    if (this.isOverBudget) {
      alert('Warning: You are over budget!');
    }
  }

  addBudget(): void {
    const budget = {
      monthYear: new Date().toISOString().slice(0, 7),
      amount: this.newBudgetAmount,
    };

    this.expenseService.addBudget(budget).subscribe((data) => {
      this.budgetId = data.id;
      this.budget = data;
      this.fetchExpenses();
      this.newBudgetAmount = 0;
    });
  }

  addExpense(): void {
    if (!this.expenseAmount || !this.expenseCategory || !this.expenseDate) {
      alert('Please fill in all fields!');
      return;
    }

    const expense = {
      category: this.expenseCategory,
      amount: this.expenseAmount,
      description: this.expenseDescription || '',
      date: this.expenseDate,
      budgetId: this.budgetId,
    };

    this.expenseService.addExpense(expense).subscribe(() => {
      this.fetchExpenses();
      this.fetchBudgetProgress();
      this.clearExpenseForm();
    });
  }

  clearExpenseForm(): void {
    this.expenseCategory = '';
    this.expenseAmount = 0;
    this.expenseDescription = '';
    this.expenseDate = '';
  }
}
