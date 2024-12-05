# Expense Tracker

The **Expense Tracker** is a full-stack web application that helps users manage their budget and expenses. It allows users to create budgets, track expenses, and monitor the remaining budget and progress.

## Features

- **Create a Budget**: Set a budget amount for a specific period (monthly).
- **Add Expenses**: Add expenses with categories, amounts, and descriptions.
- **View Budget Status**: Displays the total budget, total expenses, remaining budget, and budget progress.
- **Over Budget Alert**: If the total expenses exceed the budget, an alert is shown, and the progress bar turns red.
- **Expense List**: Displays a table with a list of all added expenses including the date, category, amount, and description.

## Setup Instructions

### Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js**: You can download it from [Node.js](https://nodejs.org/).
- **Angular CLI**
- .NET SDK: Download and install the required version.




## running the app step by step

-clone the git repo using : git clone https://github.com/Youssef-22/Expense_Tracker.git
-for the frontend you should start by cd /Expense_tracker/client
-Install Dependencies with : npm install 
-after that you can run the frontend with ng serve
-moving now to the backend using cd /Expense_tracker/backend
-restore the Nuget packages using dotnet restore
-apply migrations using dotnet ef database update
-finally start the server using dotnet run




## Limitations 

-No Authentication: Currently, no user authentication is implemented.



## Future Improvements
-Adding authentication and user management.
-Implementing advanced filtering and analytics for expenses.

