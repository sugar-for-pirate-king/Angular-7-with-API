import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccServiceService } from '../service/acc-service.service';
import { Account } from '../service/account';
import { Customer } from 'src/app/cust/service/cust';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  customer:Object;
  addFormAccount: FormGroup;
  @Input()
  account: Account;
  @Output()
  result = new EventEmitter();

  constructor(private accountService: AccServiceService,private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(){
    this.addFormAccount = this.formBuilder.group({
      accountNumber: [''],
      openDate : ['', Validators.required],
      balance : ['', Validators.required],
      customer: ['', Validators.required]
    }); this.getAcc();
  }

  getAcc(){
    this.accountService.getListCustomer().subscribe((response)=>{
      this.customer = response;
      console.log(this.customer);
    },(err)=>{ 
      console.log('Error' + JSON.stringify(err));
    });
  }

  submitAddGroup(){     
    let account: Account = new Account();
    account.accountNumber = this.addFormAccount.controls['accountNumber'].value;
    account.openDate = this.addFormAccount.controls['openDate'].value;
    account.balance = this.addFormAccount.controls['balance'].value;
    
    let cust: Customer =  new Customer();
    cust.customerNumber = this.addFormAccount.controls['customer'].value;
    account.customer = cust;

    this.accountService.save(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      this.router.navigate(['account'])
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }
    
  ngOnInit() {
  }

}
