import { AuthService } from './site/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean;

  constructor(private authService: AuthService) {
    if (authService.loggedInUser != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    console.log(this.loggedIn)
  }

  logout(){
    this.authService.logout();
    this.loggedIn = false;
  }




}
