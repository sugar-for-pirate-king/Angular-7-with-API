import { Component, OnInit, ViewChild } from '@angular/core';
import { AccServiceService } from '../service/acc-service.service';
import { Account } from '../service/account';
import { AccFormEditComponent } from '../edit/acc-form-edit.component';
  import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lisct-account',
  templateUrl: './lisct-account.component.html',
  styleUrls: ['./lisct-account.component.css']
})
export class LisctAccountComponent implements OnInit {
  @ViewChild('formAccount')
  formAccount: AccFormEditComponent ;
  listAccount: Account[] = [];
  showDataAccount:boolean= false;
  selectedAccount: Account = new Account();
  constructor(private accountService: AccServiceService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      const customer:string = params ['customer'];
      this.loadData(customer);
    });
  }
  
  loadData(customer){
    this.accountService.getList(customer).subscribe((response)=>{
    console.log(JSON.stringify(response));
    Object.assign(this.listAccount, response);
    },(err)=>{
      alert('Error' + JSON.stringify(err));
    });
  }
  // Result data account
  prosesResult(result){
    if(result){
      this.showDataAccount=false;
      this.loadData;
    }
  }

  showDetails(){
    this.showDataAccount = true;
  }

  selectAccount(account: Account){
    let copyAccount = new Account;
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;

    this.selectedAccount = copyAccount;
    this.showDataAccount = true;
    this.formAccount.UpdateData();
  }

  deleteAccount(id){
    if (confirm("Are you sure to delete this record?")){
    this.accountService.delete(id).subscribe((response)=>{
      location.reload();
    },(err)=>{
      alert(JSON.stringify(err));
    });
  }
}

}
