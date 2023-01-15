import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit{

  searchVal:string="";
  check:boolean=false;
  
  ngOnInit(): void {
    if (this.authService.checkLogin()) {
      this._router.navigateByUrl('/admin/login');
    }else{
      this.check=true;
    }
  };
  constructor(private _router:Router,private authService:AuthService){}
  search(){
    this._router.navigateByUrl(`/products/${this.searchVal}`);
  }
}
