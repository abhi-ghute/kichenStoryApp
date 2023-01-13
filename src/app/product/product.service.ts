import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  ProductArray:object[]=[];

  addProduct(product:any):boolean{
    console.log(product.image);
    this.ProductArray.push(product);
    return true;
  }
}