import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaction } from '../service/trx';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AccServiceService } from 'src/app/account/service/acc-service.service';
import { TrxService } from '../service/trx.service';
import { Account } from 'src/app/account/service/account';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  listAccount : Account [] = [];
  account : Object;
  addForm : FormGroup;
  @Input()
  transaction : Transaction;
  @Output()
  result = new EventEmitter();
  constructor(private formBuilder : FormBuilder, private router : Router, private trxService: TrxService, private dataService : AccServiceService ) { }

  ngOnInit( ) {
    this.addForm = this.formBuilder.group({
    //  id : [''],
     type : ['', Validators.required],
     amount : ['', Validators.required],
     amountSign : ['', Validators.required],
     account : ['']
    })
      this.getAccountNumber();
    }

    getAccountNumber(){
      this.dataService.getList().subscribe((response)=>{
        this.account
        console.log(this.account);
        Object.assign(this.listAccount, response['values']);
      }), (err)=>{
        console.log(JSON.stringify(err));
      }
    }

    submitData(){
      let transaction = new Transaction;
      // transaction.id = this.addForm.controls['id'].value;
      transaction.type = this.addForm.controls['type'].value;
      transaction.amount = this.addForm.controls['amount'].value;
      transaction.amountSign = this.addForm.controls['amountSign'].value
      
      let acc = new Account;
      acc.accountNumber = this.addForm.controls['account'].value;
      transaction.account = acc;

      this.trxService.save(transaction).subscribe((response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
        this.router.navigate(['/transaction']);
      }), (err)=>{
        console.log("Error" + JSON.stringify(err));
      }
    }

    setSelectedAccount(account : Account){
      this.addForm.controls['account'].setValue(account.accountNumber);
      alert(account.accountNumber);
      this.addForm.updateValueAndValidity();  
    }
  }
