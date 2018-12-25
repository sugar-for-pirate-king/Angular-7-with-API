import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrxService } from '../service/trx.service';
import { Transaction } from '../service/trx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/account/service/account';
  import { from } from 'rxjs';

@Component({
  selector: 'app-trx-form-edit',
  templateUrl: './trx-form-edit.component.html',
  styleUrls: ['./trx-form-edit.component.css']
})
export class TrxFormEditComponent implements OnInit {
  @Input()
  transaction: Transaction;
  @Output()
  result = new EventEmitter;
  transactionUpdateForm: FormGroup;
  account: Object;
  constructor(private trxService: TrxService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transactionUpdateForm = this.formBuilder.group({
      id:[''],
      type:['',Validators.required],
      amount: ['',Validators.required],
      amountSign: ['',Validators.required],
      account: ['',Validators.required]
    });
    this.getTransaction();
  }

  getTransaction(){
    this.trxService.getListAccount().subscribe(response=>{
      this.account = response;
      console.log(this.account);
    }, err=>{
      console.log("Error" + JSON.stringify(err));
    });
  }

  submitData(){
    let transaction = new Transaction();
    transaction.id = this.transactionUpdateForm.controls['id'].value;
    transaction.type = this.transactionUpdateForm.controls['type'].value;
    transaction.amount = this.transactionUpdateForm.controls['amount'].value;
    transaction.amountSign = this.transactionUpdateForm.controls['amountSign'].value;

    let account = new Account();
    account.accountNumber = this.transactionUpdateForm.controls['account'].value;
    transaction.account = account;

    this.trxService.update(transaction).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  UpdateData(){
    if(this.transaction){
      this.transactionUpdateForm.controls['id'].setValue(this.transaction.id);
      this.transactionUpdateForm.controls['type'].setValue(this.transaction.type);
      this.transactionUpdateForm.controls['amount'].setValue(this.transaction.amount);
      this.transactionUpdateForm.controls['amountSign'].setValue(this.transaction.amountSign);
      this.transactionUpdateForm.controls['account'].setValue(this.transaction.account);
    }
  }
}
