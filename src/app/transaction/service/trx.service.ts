import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './trx';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrxService {

  constructor(private httpClient:HttpClient) { }

  getListTrx(account?){
    let Params: String = '';
      if(account){
        Params = '?account=' + account;
    return this.httpClient.get('http://localhost:7000/api/transaction/list' + Params);
  } else {
    return this.httpClient.get('http://localhost:7000/api/transaction/list');
  }
}

  save(transaction: Transaction){
    return this.httpClient.post('http://localhost:7000/api/transaction', transaction);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:7000/api/transaction/' + id);
  }

  update(transaction: Transaction){
    return this.httpClient.put('http://localhost:7000/api/transaction', transaction);
  }

  getListAccount(){
    return this.httpClient.get('http://localhost:7000/api/account/list');
  }
}
