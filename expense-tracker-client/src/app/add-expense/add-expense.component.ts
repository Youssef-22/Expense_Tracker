import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule,CommonModule],  // Import FormsModule
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter<any>();

  expense = {
    category: '',
    amount: 0,
    description: '',
    date: new Date().toISOString().split('T')[0], 
  };

  onSubmit(): void {
    this.expenseAdded.emit(this.expense);
    this.expense = { category: '', amount: 0, description: '', date: new Date().toISOString().split('T')[0] };
  }
}
