import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccServiceService {

  constructor(private httpClient:HttpClient) { }

  getList(customer){
    let params : String = "";
    if(customer){
      params = '?customer=' + customer
    }
    return this.httpClient.get('http://localhost:8080/account/listaccount' + params);
  }
  
  save(account : Account){
    return this.httpClient.post('http://localhost:8080/account/acc', account);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:8080/account/acc/'+ id);
  }

  getListCustomer(){
    return this.httpClient.get('http://localhost:8080/customer/cust');
  }
  
  update(account: Account){
    return this.httpClient.put('http://localhost:8080/account/accupd', account);
  }
}
