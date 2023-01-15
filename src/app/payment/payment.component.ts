import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

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
