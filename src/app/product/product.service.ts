import { Injectable, OnInit } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
 
  ngOnInit(): void {
    sessionStorage.setItem("product", JSON.stringify(this.ProductArray));
  }
  constructor() {
    //sessionStorage.setItem("product", JSON.stringify(this.ProductArray));
  }
  ProductArray: product[] = [
    {
      id: 1,
      name: "Sugar",
      description: "Sugar without chemical for dibeties people",
      price: 81,
      image: ["../../assets/images/carousel/1.png"]
    },
    {
      id: 2,
      name: "Sugar",
      description: "Sugar without chemical for dibeties people",
      price: 82,
      image: ["../../assets/images/carousel/1.png"]
    },
    {
      id: 3,
      name: "Sugar",
      description: "Sugar without chemical for dibeties people",
      price: 83,
      image: ["../../assets/images/carousel/1.png"]
    },
    {
      id: 4,
      name: "Sugar",
      description: "Sugar without chemical for dibeties people",
      price: 84,
      image: ["../../assets/images/carousel/1.png"]
    }
  ];

  addProduct(product: any): boolean {
    this.ProductArray.push(product);
    sessionStorage.setItem("product", JSON.stringify(this.ProductArray));
    return true;
  }

  getProducts(): product[] {
    let temp:string|null = sessionStorage.getItem("product");
    let tempArray:product[]=[];

    if(temp){
      tempArray = JSON.parse(temp);
    }
    
    return tempArray;
  }

  removeProduct(id: number): boolean {
    let temp:string|null = sessionStorage.getItem("product");
    let tempArray:product[]=[];

    if(temp){
      tempArray = JSON.parse(temp);
    }
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].id == id) {
        tempArray.splice(i, 1);
        sessionStorage.setItem("product", JSON.stringify(tempArray));
        return true;
      }
    }
    return false;
  }
}