import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { LoginProcessService } from '../../services/login/login-process.service';
import { BooksService } from '../../services/book.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginProcessService, BooksService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  emailField: string;
  passwordField: string;
  isAdmmin: boolean;
  IsValidCredentials: boolean;
  users = [];

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private loginService: LoginProcessService
  ) {
    this.appComponent.isLoggedIn = false;
    this.IsValidCredentials = false;
  }

  public login() {
    const item = this;
    this.loginService.getUsers().subscribe(posts => {
      $.map(posts.userCredentials, function(value, index) {
        if (value.email === item.email && value.password === item.password) {
          item.IsValidCredentials = true;
          item.isAdmmin = value.isAdmin;
          sessionStorage.setItem('isAdmin', value.isAdmin);
          sessionStorage.setItem('IsValidCredentials', 'true');
          sessionStorage.setItem('email', value.name);
        }
      });

      if (this.IsValidCredentials) {
        item.appComponent.isLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', 'true');
        item.router.navigate(['/dashboard']);
      } else {
        swal('Oops!', 'Invalid Credentials!', 'error');
      }
    });
  }

  public adminLogin() {
    this.appComponent.isLoggedIn = true;
    this.isAdmmin = true;
    sessionStorage.setItem('isAdmin', 'true');
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('email', 'Facebook User');
    this.router.navigate(['/dashboard']);
  }


  ngOnInit() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn || loggedIn === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }
}

declare var $: any;
