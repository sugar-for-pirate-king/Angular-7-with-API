import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Customer } from '../service/cust';
import { CustService } from '../service/cust.service';
import { from } from 'rxjs';
import { CustFormComponent } from '../form/cust-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cust',
  templateUrl: './list-cust.component.html',
  styleUrls: ['./list-cust.component.css']
})
export class ListCustComponent implements OnInit {
  @ViewChild('formCustomer')
  formCustomer: CustFormComponent;
  listCust: Customer[] = [];
  showDetail:boolean = false;
  showCreated : boolean = false ;
  selectedCust: Customer = new Customer();
  constructor(private custService: CustService, private route: Router) {}

  ngOnInit() {
    this.loadData();
  }

  showDetails(){
    this.showDetail = true;
    this.showCreated = false;
  }
  showCreate(){
    this.showCreated = true;
    this.showDetail =false;
  }

  selectCust(cust: Customer){
    let copyCust = new Customer;
    copyCust.customerNumber = cust.customerNumber;
    copyCust.firstName = cust.firstName;
    copyCust.lastName = cust.lastName;
    copyCust.birthDate = cust.birthDate;
    copyCust.username = cust.username;
    copyCust.password = cust.password;
    copyCust.phoneNumber = cust.phoneNumber;
    copyCust.phoneType = cust.phoneType;

    this.selectedCust = copyCust;
    this.showDetail = true;
    this.showCreated = false;
    if(this.formCustomer){
      this.formCustomer.UpdateData()
    };
  }

  loadData(){
    this.custService.getList().subscribe((response)=>{
    console.log(JSON.stringify(response));
    Object.assign(this.listCust, response['values']);
    
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }

  deleteId(id){
    if (confirm("Are you sure to delete this record?")){
    this.custService.delete(id).subscribe((response)=>{
      location.reload();
    },(err)=>{
      alert(JSON.stringify(err));
    });
  }
}

  viewAccount( customer: Customer){
    console.log('customer' + customer.customerNumber);
    this.route.navigate(['account',{customer: customer.customerNumber}]);
  }
}
