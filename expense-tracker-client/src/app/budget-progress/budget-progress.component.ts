import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget-progress',
  standalone: true,
  imports: [CommonModule,FormsModule],  // Import CommonModule
  templateUrl: './budget-progress.component.html',
  styleUrls: ['./budget-progress.component.css']
})
export class BudgetProgressComponent {
  @Input() budget: any = null;
  @Input() expenses: any[] = [];

  get remainingBudget() {
    const totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return this.budget.totalBudget - totalExpenses;
  }

  get progress() {
    const totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return (totalExpenses / this.budget.totalBudget) * 100;
  }

  get isOverBudget() {
    return this.remainingBudget < 0;
  }
}
