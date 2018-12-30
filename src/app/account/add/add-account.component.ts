import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccServiceService } from '../service/acc-service.service';
import { CustService } from 'src/app/cust/service/cust.service';
import { Account } from '../service/account';
import { Customer } from 'src/app/cust/service/cust';
import { Router } from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  listCustomer : Customer [] = [];
  customer : Object;
  addFormAccount: FormGroup;
  @Input()
  account: Account;
  @Output()
  result = new EventEmitter();

  constructor(private accountService: AccServiceService,private formBuilder: FormBuilder, private router: Router, private customerService : CustService) {
    
  }

  ngOnInit() {
    this.addFormAccount = this.formBuilder.group({
      accountNumber:[''],
      openDate : ['', Validators.required],
      balance : ['', Validators.required],
      customer: ['']
    }); 
    this.getCustomerNumber();
  }
    
  getCustomerNumber(){
    this.customerService.getList().subscribe((response)=>{
      this.customer;
      console.log(this.customer);
      Object.assign(this.listCustomer, response['values']);
    },(err)=>{ 
      console.log('Error' + JSON.stringify(err));
    });
  }

  submitAddGroup(){     
    let account = new Account;
    account.accountNumber = this.addFormAccount.controls['accountNumber'].value;
    account.openDate = this.addFormAccount.controls['openDate'].value;
    account.balance = this.addFormAccount.controls['balance'].value;
    
    let cust =  new Customer;
    cust.customerNumber = this.addFormAccount.controls['customer'].value;
    account.customer = cust;

    this.accountService.save(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      this.router.navigate(['account']);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  setSelectedAccount(customer : Customer){
    this.addFormAccount.controls['customer'].setValue(customer.customerNumber);
    alert(customer.customerNumber);
    this.addFormAccount.updateValueAndValidity();  
  }
  cancel(){
    this.result.emit(true);
  }
}
