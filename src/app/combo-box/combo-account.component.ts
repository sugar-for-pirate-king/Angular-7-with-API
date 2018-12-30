import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccServiceService } from '../account/service/acc-service.service';
import { Account } from 'src/app/account/service/account';
import { from } from 'rxjs';

@Component({
  selector: 'app-combo-account',
  templateUrl: './combo-account.component.html',
  styleUrls: ['./combo-account.component.css']
})
export class ComboAccountComponent implements OnInit {
  @Input()
  selectedAccount = Account;
  @Output()
  account = new EventEmitter<Account>();
  listAccount : Account [] = [];
  constructor(private dataService: AccServiceService) { }

  ngOnInit() {
    this.loadData()
  }

  onChange(index){
    console.log("selected : " + index ? JSON.stringify(index) : '');
    if(this.listAccount && this.listAccount.length > 0){
      this.account.emit(this.listAccount[index]);
    }
  }

  loadData(){
    this.dataService.getList().subscribe(res=>{
      console.log(JSON.stringify(res));
      Object.assign(this.listAccount, res['values']);
    }, err => {
      alert("Error : "+ JSON.stringify(err));
    });
  }

}
