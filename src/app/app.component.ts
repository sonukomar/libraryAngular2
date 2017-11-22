import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Mindtree Library : Collection of cool books. ';
  userName = 'Sonu Kumar';
  isLoggedIn = false;

  constructor(private router: Router) {
  }

  public logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('email');

    this.router.navigate(['/logout']);
  }

  ngOnInit() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
    }else {
      this.isLoggedIn = false;
    }
    this.userName = sessionStorage.getItem('email');

  }
}




