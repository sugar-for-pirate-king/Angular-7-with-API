import { Component, OnInit, ViewChild } from '@angular/core';
import { TrxService } from '../service/trx.service';
import { Transaction } from '../service/trx';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  transaction: Transaction[] = [];
  showDataTrx: boolean = false;
  selectedTransaction: Transaction = new Transaction();
  constructor(private trxService: TrxService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      const account:string =params['account'];
      this.loadData(account);
    })
  }

  loadData(account?){
    this.trxService.getListTrx(account).subscribe((response)=>{
      // console.log(JSON.stringify(response['values']));
      Object.assign(this.transaction, response['values']);
    }, (err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  prosesResult(result){
    if(result){
      this.showDataTrx= false;
      this.loadData();
    }
  }

  showDetails(){
    this.showDataTrx = false;
  }

  selectTransaction(transaction: Transaction){
    let copyTransaction = new Transaction();
    copyTransaction.id = transaction.id;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountSign = transaction.amountSign;
    copyTransaction.account = transaction.account;

    this.selectedTransaction = copyTransaction;
    this.showDataTrx = true;
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
