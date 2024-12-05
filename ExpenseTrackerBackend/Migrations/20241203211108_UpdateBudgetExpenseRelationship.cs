using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExpenseTrackerBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBudgetExpenseRelationship : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BudgetId",
                table: "Expenses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_BudgetId",
                table: "Expenses",
                column: "BudgetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_Budgets_BudgetId",
                table: "Expenses",
                column: "BudgetId",
                principalTable: "Budgets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_Budgets_BudgetId",
                table: "Expenses");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_BudgetId",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "BudgetId",
                table: "Expenses");
        }
    }
}
