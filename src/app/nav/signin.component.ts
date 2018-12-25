import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() firstname: String;
  // @Input() lastname: String;
  // @Input() username: String;
  // @Input() password: String;
  // @Input() birthdate: Date ;
  // @Input() phonenumber: number;
  // @Input() phonetype: String ;
  @Output() msgEvent = new EventEmitter <boolean>();
  @Output() Ot2 = new EventEmitter <boolean>();

  exampleChild: boolean=false;
  exampleChild2 = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe (params => {
      this.firstname= params ["firstname"]
      // this.lastname= params ["lastname"],
      // this.username= params ["username"],
      // this.password= params ["password"],
      // this.birthdate= params ["birthdate"],
      // this.phonenumber= params ["phonenumber"],
      // this.phonetype= params ["phonetype"]
    })
  }

  emitChild(){
    this.msgEvent.emit (this.exampleChild);
  }

  emitChild2(){
    
  }

}
