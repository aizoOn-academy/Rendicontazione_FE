import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  hidePassword = true;

  constructor(
    public auth:AuthService
  ) {}

  onSubmit() {
    if(this.loginForm.valid) {
      
      this.auth.login(<string>this.username?.value, <string>this.password?.value, 
        () => {
          console.log("success!");
        },

        (error) => {
          console.log("Error: " + error);
          this.loginForm.reset();
        }
      );

    }
  }

  //metodi get
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
