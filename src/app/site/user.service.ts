import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [];

  constructor() {
  }

  addUser(user: User) {
    this.userList.push(user);
  }

  getUsers() {
    return this.userList;
  }
}
