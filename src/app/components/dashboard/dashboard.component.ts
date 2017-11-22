import { Component , OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import  'sweetalert';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin: boolean;
  constructor(private router: Router) {
    this.isAdmin = false;
  }

  ngOnInit() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    const isAdmin = sessionStorage.getItem('isAdmin');
    const email = sessionStorage.getItem('email');
     if (!loggedIn || loggedIn === 'false') {
       this.router.navigate(['/login']);
     }
    if (isAdmin && isAdmin === 'true') {
      this.isAdmin = true;
    }
    if(loggedIn && loggedIn != 'true'){
      swal("Welocome"+' '+ email, "Successfully logged In!", "success");
    }
   
  }
}
