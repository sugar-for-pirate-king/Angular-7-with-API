import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {

  constructor(private httpClient:HttpClient) { }

  getList(customer?){
    let Params: String = '';
      if(customer){
        Params = '?customer=' + customer;
      return this.httpClient.get('http://localhost:7000/api/account/list' + Params);
    }else{
      return this.httpClient.get('http://localhost:7000/api/account/list');
    }
  }

  save(account : Account){
    return this.httpClient.post('http://localhost:7000/api/account', account);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:7000/api/account/'+ id);
  }
  
  update(account: Account){
    return this.httpClient.put('http://localhost:7000/api/account', account);
  }

  getListByCustomer(){
    return this.httpClient.get('http://localhost:3000/account/list');
  }
}
