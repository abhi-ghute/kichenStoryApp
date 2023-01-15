import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email:string="admin";
  password:string="admin";

  constructor() { }

  login(email: string, password: string): boolean {
    // Perform authentication here, for example by making an HTTP request to a server
    // that checks the email and password against a database of users.
    // For now, just return true if the email is "admin" and the password is "password"
    if (email === this.email && password === this.password) {
      localStorage.setItem("admin", "admin");
      return true;
    } else {
      return false;
    }
  }

  changePassword(currentPassword: string, newPassword: string): boolean {
    this.password = newPassword;
    return true;
  }

  checkLogin(): boolean {
    let data:string = JSON.stringify(localStorage.getItem('admin'));
    let original:string = JSON.stringify("admin");
    if(data!=original){
      return true;
     }
    return false;
  }
}
