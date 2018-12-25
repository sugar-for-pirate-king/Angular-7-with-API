import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './cust';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://localhost:8080/customer/cust');
  }

  update(cust: Customer){
    return this.httpClient.put('http://localhost:8080/customer/custbc',cust);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:8080/customer/delete/'+ id);
  }

  save(cust: Customer){
    return this.httpClient.post('http://localhost:8080/customer/go', cust);
  }


  // save(cust: Customer){
  //   return this.httpClient.post('http://localhost:8080/customer/save', cust);
  // }
}
