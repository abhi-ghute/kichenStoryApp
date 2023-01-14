import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit{
  
  productArray:product[]=[];
  ngOnInit(): void {
    this.productArray = this.productService.getProducts();
  }
  constructor(private productService: ProductService, private authService: AuthService, private _router: Router) { 

  }

  
}
