import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  passwordVisibile = false;
  pwVisibile() {
    if (this.passwordVisibile)
      this.passwordVisibile = false;
    else
      this.passwordVisibile = true;
  }

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
  });

  constructor(
    public auth:AuthService,
    public router:Router
  ) {}

  ngOnInit(): void {
    if(this.auth.isLoggedIn) {
      this.router.navigateByUrl("/home")
    }
  }

  onSubmit() {
    if(this.loginForm.valid) {

      this.auth.login(<string>this.username?.value, <string>this.password?.value,
        () => {
          this.router.navigateByUrl("/home");
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
