import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustService } from '../service/cust.service';
import { Customer } from '../service/cust';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {
  phonetypes = ['Android', 'IOS'];
  @Input()
  cust: Customer;
  @Output() 
  result = new EventEmitter();
  customerUpdateFormGroup : FormGroup;
  constructor(private custService: CustService, private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.customerUpdateFormGroup = this.formBuilder.group({ 
      customerNumber: [''],
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      birthDate: [Date],
      username: [''],
      password: [''],
      phoneNumber: ['', Validators.required],
      phoneType: ['',Validators.required]
    });
    this.UpdateData()
  }

  UpdateData(){
    this.setDataToForm(this.cust);
  }
  
  setDataToForm(cust){
    if(cust){
      this.customerUpdateFormGroup.controls['customerNumber'].setValue(cust.customerNumber);
      this.customerUpdateFormGroup.controls['firstName'].setValue(cust.firstName);
      this.customerUpdateFormGroup.controls['lastName'].setValue(cust.lastName);
      this.customerUpdateFormGroup.controls['birthDate'].setValue(cust.birthDate);
      this.customerUpdateFormGroup.controls['username'].setValue(cust.username);
      this.customerUpdateFormGroup.controls['password'].setValue(cust.password);
      this.customerUpdateFormGroup.controls['phoneNumber'].setValue(cust.phoneNumber);
      this.customerUpdateFormGroup.controls['phoneType'].setValue(cust.phoneType);
    }
  }

  submitUpdateGroup(){
    let customer: Customer = new Customer();
    customer.customerNumber = this.customerUpdateFormGroup.controls['customerNumber'].value;
    customer.firstName = this.customerUpdateFormGroup.controls['firstName'].value;
    customer.lastName = this.customerUpdateFormGroup.controls['lastName'].value;
    customer.birthDate = this.customerUpdateFormGroup.controls['birthDate'].value;
    customer.username = this.customerUpdateFormGroup.controls['username'].value;
    customer.password = this.customerUpdateFormGroup.controls['password'].value;
    customer.phoneNumber = this.customerUpdateFormGroup.controls['phoneNumber'].value;
    customer.phoneType = this.customerUpdateFormGroup.controls['phoneType'].value;
    
    this.custService.update(customer).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  submitData(){
    this.custService.update(this.cust).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      console.log('Error' + JSON.stringify(err));
    });
  }

  cancel(){
    this.result.emit(true);
  }
}
