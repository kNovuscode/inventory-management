import { Routes } from "@angular/router";
import { PaymentSummaryComponent } from "./payment-summary/payment-summary.component";

export const ReportsRoutingModule: Routes = [
  { path: 'payment-summary', component: PaymentSummaryComponent },
]
