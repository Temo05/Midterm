import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ParentUser } from './parent-user';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Temuri Jibgashvili';

  readData: any;

  usersData: any[5] = [
    { firstname: 'mariam', lastname: 'beridze', age: 25 },
    { firstname: 'girogi', lastname: 'karchava', age: 19 },
    { firstname: 'nika', lastname: 'gogilashvili', age: 22 },
    { firstname: 'ana', lastname: 'mamaladze', age: 30 },
    { firstname: 'elene', lastname: 'shakarashvili', age: 18 },
  ];

  parentUsersData: ParentUser[] = [
    {
      id: 1,
      FirstName: 'Temuri',
      LastName: 'Jibgashvili',
      DateOfBirth: new Date(),
      PhoneNumber: 55123767,
      Email: 'temo@gmail.com',
    },
    {
      id: 2,
      FirstName: 'gurami',
      LastName: 'mamukelashvili',
      DateOfBirth: new Date(),
      PhoneNumber: 554782565,
      Email: 'gijigurami@gmail.com',
    },
  ];

  takeData(data: any) {
    this.readData = data;
  }

  userForm: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [Validators.required, Validators.minLength(8), Validators.email],
      ],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      dateOfBirth: ['', Validators.required],
      id: ['', [Validators.required]],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
