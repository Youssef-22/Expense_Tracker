import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { BudgetProgressComponent } from './budget-progress/budget-progress.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppComponent, // Import standalone components
    HomeComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    BudgetProgressComponent,
    
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
