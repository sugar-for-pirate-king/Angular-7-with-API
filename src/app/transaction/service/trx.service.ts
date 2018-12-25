import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './trx';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrxService {

  constructor(private httpClient:HttpClient) { }

  getListTrx(){
    return this.httpClient.get('http://localhost:8080/transaction/trxlist');
  }

  save(transaction: Transaction){
    return this.httpClient.post('http://localhost:8080/transaction/trx', transaction);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:8080/transaction/trx/' + id);
  }

  update(transaction: Transaction){
    return this.httpClient.put('http://localhost:8080/transaction/trxupt', transaction);
  }

  getListAccount(){
    return this.httpClient.get('http://localhost:8080/account/listaccount');
  }
}
