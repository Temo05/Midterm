import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() data : any;
  @Output() childData = new EventEmitter();

  childUserData : ChildUser[] = [{id : 3, FirstName : 'Genadi', LastName : "Wkadua", DateOfBirth : new Date(), PhoneNumber  :  55123767, Email : "genadi@gmail.com"},{id : 4, FirstName : 'gia', LastName : "mamaladze", DateOfBirth : new Date(), PhoneNumber  :  554782565, Email : "mamaladzegia@gmail.com"}]

  sendData(){
    this.childData.emit(this.childUserData);
  }
}
