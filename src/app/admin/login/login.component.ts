import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AdminComponent implements OnInit{

  email: string="";
  password: string="";

  constructor(private authService: AuthService, private _router: Router) {super(); }

  ngOnInit() {
  }

  login() {
    if(this.authService.login(this.email, this.password)){
      this._router.navigateByUrl('/home');
    }
  }

}
