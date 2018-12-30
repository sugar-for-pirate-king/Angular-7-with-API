import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './cust';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    // return this.httpClient.get('http://localhost:3000/customer/list');
    return this.httpClient.get('http://localhost:7000/api/customer/list');
  }

  update(customer: Customer){
    return this.httpClient.put('http://localhost:7000/api/customer',customer);
  }

  delete(id){
    return this.httpClient.delete('http://localhost:7000/api/customer/'+ id);
  }

  save(customer: Customer){
    return this.httpClient.post('http://localhost:7000/api/customer', customer);
  }
}
