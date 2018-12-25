import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../service/cust';
import { CustService } from '../service/cust.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {
  phonetypes = [
    { name:"option1", value:'Android'}, 
    { name:"option2", value:'IOS'}
  ]
  
  @Input() 
  cust: Customer;
  @Output() 
  result = new EventEmitter();
  
  addForm : FormGroup;
  constructor(private custService: CustService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({ 
      customerNumber: [],
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      phoneNumber: ['', Validators.required],
      phoneType: ['',Validators.required]
    });
    // For update
  }

  submitAddGroup(){
    let customer: Customer = new Customer();
    customer.customerNumber = this.addForm.controls['customerNumber'].value;
    customer.firstName = this.addForm.controls['firstName'].value;
    customer.lastName = this.addForm.controls['lastName'].value;
    customer.birthDate = this.addForm.controls['birthDate'].value;
    customer.username = this.addForm.controls['username'].value;
    customer.password = this.addForm.controls['password'].value;
    customer.phoneNumber = this.addForm.controls['phoneNumber'].value;
    customer.phoneType = this.addForm.controls['phoneType'].value;
    
    this.custService.save(customer).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }
  // for submit from update
  // submitData(){
  //   this.custService.save(this.cust).subscribe((response)=>{
  //     console.log(JSON.stringify(response));
  //     this.result.emit(true);
  //   location.href="/cust";
  //   },(err)=>{
  //     console.log('Error' + JSON.stringify(err));
  //   });
  // }

  cancelChanges(){
    this.result.emit(true);
  }

}
