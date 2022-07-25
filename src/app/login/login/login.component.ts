import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //form
  public login = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  hide = true;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}

  //metodi get
  get username() {
    return this.login.get('username');
  }

  get password() {
    return this.login.get('password');
  }
}
