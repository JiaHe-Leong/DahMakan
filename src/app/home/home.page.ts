import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  genders = ['Male','Female'];

  model = new User('PeikChin', 'Lee', 'pc.lee@gmail.com','Male','1@qQasdz','1@qQasdz');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User('', '', '','','','');
  }
  constructor() {}

}
