import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expense-list', component: ExpenseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
