import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../service/cust';
import { CustService } from '../service/cust.service';

@Component({
  selector: 'app-combo-customer',
  templateUrl: './combo-customer.component.html',
  styleUrls: ['./combo-customer.component.css']
})
export class ComboCustomerComponent implements OnInit {
  
  listCustomer: Customer[] = [];
  @Output()
  customer = new EventEmitter<Customer>();
  @Input()
  selectedCustomer: Customer;
  constructor(private customerService : CustService) { }

  ngOnInit() {
    this.loadData();
  }

  onChange(index){
    console.log('selected : ' + index ? JSON.stringify(index): "");
    if(this.listCustomer && this.listCustomer.length > 0){
      this.customer.emit(this.listCustomer[index]);
    }
  }

  loadData(){
    this.customerService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      Object.assign(this.listCustomer, response);
    },(err)=>{
      alert('error : ' + JSON.stringify(err))
    });
  }

}
