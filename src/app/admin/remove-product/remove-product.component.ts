import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent {

  productArray:product[]=[];

  ngOnInit(): void {
    if(this.authService.checkLogin()){
      this._router.navigateByUrl('/admin/login');
     }
     this.productArray = this.productService.getProducts();
  };
  constructor(private productService: ProductService, private authService: AuthService, private _router: Router) { 
  }

  removeProduct(id:number) {
    this.productService.removeProduct(id);
    this.productArray = this.productService.getProducts();
  }
}
