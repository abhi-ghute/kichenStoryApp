import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private route: ActivatedRoute) { }
  name:string="";
  description:string="";
  price:string="";

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.name= params['name']
        this.description=params['description']
        this.price=params['price']
      }
    );
  }
}
