import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Welcome to Mindtree Library : Collection of cool books. ';
  welcomeMsg = 'this is supposed to be the welcome message, but i think its doing its job very well...';
}
