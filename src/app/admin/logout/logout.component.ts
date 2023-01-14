import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private _router: Router) { }
  ngOnInit(): void {
    localStorage.setItem("admin", "null");
    console.log(localStorage.getItem("admin"));
    this._router.navigateByUrl('admin/login');
  }
}
