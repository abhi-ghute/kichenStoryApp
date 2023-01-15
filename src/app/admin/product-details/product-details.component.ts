import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { product } from 'src/app/product/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  name: string = '';
  description: string = '';
  price: number = 0;
  image: string[] = [];

  ngOnInit(): void {
    if (this.authService.checkLogin()) {
      this._router.navigateByUrl('/admin/login');
    }
  };
  constructor(private productService: ProductService, private authService: AuthService, private _router: Router) { }

  selectedImageToShow: string = "";

detectFiles(event: any) {
  let file = event.target.files[0];

  this.image = [];

  console.log(file);

  if (file) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.image.push(e.target.result);
    }
    reader.readAsDataURL(file);
  }
}
  addProduct() {
    let product: product = {
      id: this.productService.ProductArray.length + 1,
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image
    }
    if (this.productService.addProduct(product)) {
      this._router.navigateByUrl('/products/all');
    }
  }
}
