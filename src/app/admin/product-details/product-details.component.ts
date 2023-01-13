import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  name: string = '';
  description: string = '';
  price: number = 0;
  image: File | undefined = undefined;
  ngOnInit(): void {
    if(this.authService.checkLogin()){
      this._router.navigateByUrl('/admin/login');
     }
  };
  constructor(private productService: ProductService, private authService: AuthService, private _router: Router) { }

  addProduct() {
    let product = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image
    }
    this.productService.addProduct(product);
  }

  urls = new Array<string>();
    selectedImageToShow : string ="";

      detectFiles(event:any) {
        let file = event.target.files[0];

        this.urls = [];
        
        console.log(file);
        
        if (file) {
         
            let reader = new FileReader();
            reader.onload = (e: any) => {
              this.urls.push(e.target.result);
            }
            reader.readAsDataURL(file);
        }
      }


}
