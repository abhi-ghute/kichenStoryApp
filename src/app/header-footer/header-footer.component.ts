import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent {

  searchVal:string="";
  
  constructor(private _router:Router ){}
  search(){
    this._router.navigateByUrl('admin/login');
  }
}
