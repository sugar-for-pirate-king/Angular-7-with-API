import { Component, OnInit, ViewChild } from '@angular/core';
import { TrxService } from '../service/trx.service';
import { Transaction } from '../service/trx';
import { TrxFormEditComponent } from '../edit/trx-form-edit.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  @ViewChild('formTransaction')
  formTransaction: TrxFormEditComponent;
  listTransaction: Transaction[] = [];
  showDataTrx: boolean = false;
  selectedTransaction: Transaction = new Transaction();
  constructor(private trxService: TrxService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.trxService.getListTrx().subscribe((response)=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listTransaction, response);
    }, (err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  processResult(result){
    if(result){
      this.showDataTrx= false;
      this.loadData();
    }
  }

  showDetails(){
    this.showDataTrx = false;
  }

  selectTransaction(transaction: Transaction){
    let copyTransaction = new Transaction;
    copyTransaction.id = transaction.id;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountSign = transaction.amountSign;
    copyTransaction.account = transaction.account;

    this.selectedTransaction = copyTransaction;
    this.showDataTrx = true;
    this.formTransaction.UpdateData();
  }

  deleteTransaction(id){
    if (confirm("Are you sure to delete this record?")){
    this.trxService.delete(id).subscribe((response)=>{
      location.reload();
    },(err)=>{
      alert(JSON.stringify(err));
    });
  }
}
}
