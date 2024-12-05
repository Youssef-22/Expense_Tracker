import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:5237/api'; // Your backend URL

  constructor(private http: HttpClient) {}

  // Fetch the budget details by budget ID
  getBudgetById(budgetId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Budgets/status/${budgetId}`);
  }

  // Add a new expense
  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Expenses`, expense);
  }

  getBudgetProgress(budgetId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:5237/api/Budgets/progress/${budgetId}`);
  }

  // Get all expenses for a given budget ID
  // getExpenses(budgetId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/Expenses/${budgetId}`);
  // }

  getBudgetStatus(budgetId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Budgets/status/${budgetId}`);
  }
  
  // Add a new budget
  addBudget(budget: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Budgets`, budget);
  }
  
  // Fetch expenses by budget ID
  getExpenses(budgetId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Budgets/${budgetId}/expenses`);
  }
  
  // Add a new expense
  // addExpense(expense: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/Expenses`, expense);
  // }
}
