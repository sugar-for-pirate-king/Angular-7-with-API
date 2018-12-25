import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccServiceService } from '../service/acc-service.service';
import { Account } from '../service/account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/cust/service/cust';

@Component({
  selector: 'app-acc-form-edit',
  templateUrl: './acc-form-edit.component.html',
  styleUrls: ['./acc-form-edit.component.css']
})
export class AccFormEditComponent implements OnInit {
  @Input()
  account: Account;
  @Output()
  result= new EventEmitter;
  accountUpdateForm : FormGroup;
  customer: Object;
  constructor(private accountService: AccServiceService,private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.accountUpdateForm = this.formBuilder.group({
      accountNumber: [''],
      openDate: ['',Validators.required],
      balance: ['', Validators.required],
      customer: ['', Validators.required]
    });
    this.getCustomer();
  }

  getCustomer(){
    this.accountService.getListCustomer().subscribe(response=>{
      this.customer = response;
      console.log(this.customer);
    }, err=>{
      console.log("Error" + JSON.stringify(err));
    });
  }
  
  submitData(){
    let account = new Account();
    account.accountNumber = this.accountUpdateForm.controls['accountNumber'].value;
    account.openDate = this.accountUpdateForm.controls['openDate'].value;
    account.balance = this.accountUpdateForm.controls['balance'].value;

    let customer = new Customer();
    customer.customerNumber = this.accountUpdateForm.controls['customer'].value;
    account.customer = customer;
    
    this.accountService.update(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  UpdateData(){
    if(this.account){
      this.accountUpdateForm.controls['accountNumber'].setValue(this.account.accountNumber);
      this.accountUpdateForm.controls['openDate'].setValue(this.account.openDate);
      this.accountUpdateForm.controls['balance'].setValue(this.account.balance);
      this.accountUpdateForm.controls['customer'].setValue(this.account.customer);
    }
  }

}
