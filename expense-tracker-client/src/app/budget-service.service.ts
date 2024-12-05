import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private budget: any = null;

  constructor() {}

  
  setBudget(budget: any): void {
    this.budget = budget;
  }


  getBudget(): any {
    return this.budget;
  }
}
