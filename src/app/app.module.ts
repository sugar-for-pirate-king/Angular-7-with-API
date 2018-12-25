import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './nav/signin.component';
import { CustComponent } from './cust/cust.component';
import { CustFormComponent } from './cust/form/cust-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCustComponent } from './cust/list/list-cust.component';
import { AddCustComponent } from './cust/add/add-cust.component';
import { AddAccountComponent } from './account/add/add-account.component';
import { PipePipe } from './cust/service/pipe.pipe';
import { LisctAccountComponent } from './account/list/lisct-account.component';
import { ServicePipe } from './account/service.pipe';
import { AccFormEditComponent } from './account/edit/acc-form-edit.component';
import { ListTransactionComponent } from './transaction/list/list-transaction.component';
import { TrxFormEditComponent } from './transaction/edit/trx-form-edit.component';
import { ComboCustomerComponent } from './cust/combo/combo-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    CustComponent,
    CustFormComponent,
    ListCustComponent,
    AddCustComponent,
    AddAccountComponent,
    PipePipe,
    LisctAccountComponent,
    ServicePipe,
    AccFormEditComponent,
    ListTransactionComponent,
    TrxFormEditComponent,
    ComboCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
