import { Component,OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  data:string='';
  currentPassword: string = '';
  newPassword: string ='';
  confirmNewPassword: string='';

  constructor(private authService: AuthService,private _router: Router) { }

  ngOnInit() {
    if(this.authService.checkLogin()){
      this._router.navigateByUrl('/admin/login');
     }
  }

  changePassword() {
    if(this.newPassword === this.confirmNewPassword) {
      if(this.authService.changePassword(this.currentPassword, this.newPassword)){
        this._router.navigateByUrl('/admin/login');
      }
    } else {
      alert("password change Unsuccessful..")
    }
  }
}
