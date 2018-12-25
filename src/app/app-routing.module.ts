import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './nav/signin.component';
import { ListCustComponent } from './cust/list/list-cust.component';
import { CustFormComponent } from './cust/form/cust-form.component';
import { AddCustComponent } from './cust/add/add-cust.component';
import { LisctAccountComponent } from './account/list/lisct-account.component';
import { AddAccountComponent} from './account/add/add-account.component';
import { AccFormEditComponent } from './account/edit/acc-form-edit.component';
import { ListTransactionComponent } from './transaction/list/list-transaction.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {path :'nav', component: NavComponent},
  {path : 'signin', component : SigninComponent},
  {path : 'cust', component : ListCustComponent},
  {path : 'formCustomer', component : CustFormComponent},
  {path : 'formAdd', component: AddCustComponent},
  {path : 'account', component : LisctAccountComponent},
  {path : 'formAddAccount', component : AddAccountComponent},
  {path : 'formEditAcc', component : AccFormEditComponent},
  {path : 'transaction', component : ListTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
