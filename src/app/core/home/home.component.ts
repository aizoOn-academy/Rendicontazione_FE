import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit(): void {}

  logout() {

    this.authService.logout();

    this.router.navigateByUrl("login");

  }
}
