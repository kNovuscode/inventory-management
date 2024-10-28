
import { Routes } from "@angular/router";
import { SignatureListComponent } from "./signature-list/signature-list.component";
import { SignatureInvoiceComponent } from "./signature-invoice/signature-invoice.component";

export const SignatureRoutingModule: Routes = [
  { path: 'signature-list', component: SignatureListComponent },
  { path: 'signature-invoice', component: SignatureInvoiceComponent },
]
