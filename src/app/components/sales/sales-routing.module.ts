import { Routes } from "@angular/router";
import { InvoicesListComponent } from "./invoices-list/invoices-list.component";
import { InvoicesAddEditComponent } from "./invoices-list/invoices-add-edit/invoices-add-edit.component";
import { InvoicesTemplateComponent } from "./invoices-list/invoices-template/invoices-template.component";
import { CreditNotesComponent } from "./invoices-list/credit-notes/credit-notes.component";
import { CreditNotesAddEditComponent } from "./invoices-list/credit-notes/credit-notes-add-edit/credit-notes-add-edit.component";

export const SalesRoutingModule: Routes = [
  { path: 'invoices', component: InvoicesListComponent },
  { path: 'invoices-add', component: InvoicesAddEditComponent },
  { path: 'invoices-edit/:id', component: InvoicesAddEditComponent },
  { path: 'invoice-template', component: InvoicesTemplateComponent },
  { path: 'credit-notes', component: CreditNotesComponent },
  { path: 'credit-notes-add', component: CreditNotesAddEditComponent },
  { path: 'credit-notes-edit/:id', component: CreditNotesAddEditComponent },
]
