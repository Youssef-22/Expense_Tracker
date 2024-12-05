import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses: any[] = [];

  ngOnInit(): void {}
}
