import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  name: string='';
  description: string='';
  price: number=0;
  image: File|undefined;

  constructor(private productService: ProductService { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
  }

  addProduct() {
    this.productService.addProduct(this.name, this.description, this.price, this.image);
  }
}
