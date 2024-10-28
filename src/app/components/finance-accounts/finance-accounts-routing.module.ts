import { Routes } from "@angular/router";
import { ExpensesComponent } from "./expenses/expenses.component";
import { PaymentsComponent } from "./payments/payments.component";

export const FinanceAccountsRoutingModule: Routes = [
  { path: 'expenses', component: ExpensesComponent },
  { path: 'payments', component: PaymentsComponent },
]
