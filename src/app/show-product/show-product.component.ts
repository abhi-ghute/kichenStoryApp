import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  productArray: product[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      if (params['id'] != "all"){
        this.productArray = this.productService.getProducts(params['id']);
    }
    else{
      this.productArray = this.productService.getProducts(params['id']);
    }
  }
    );
  }
  constructor(private productService: ProductService, private authService: AuthService, private _router: Router, private route: ActivatedRoute) {
  }


}
