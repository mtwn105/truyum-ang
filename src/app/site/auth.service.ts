import { Injectable } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: User;

  constructor(private userService: UserService) { }

  authenticateUser(username: string, password: string): boolean {
    let userList = this.userService.getUsers();
    for (let user of userList) {
      if (user.userName == username && user.password == password) {
        this.loggedInUser = user;
        return true;
      }
    }
    return false;
  }

  logout(){
    this.loggedInUser = null;
  }
}
