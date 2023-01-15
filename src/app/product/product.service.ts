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
      price: 40,
      image: ["../../assets/images/product/sugar.png"]
    },
    {
      id: 2,
      name: "Ghee",
      description: "Natural ghee product made from the cow milk",
      price: 500,
      image: ["../../assets/images/product/ghee.png"]
    },
    {
      id: 3,
      name: "Biscuit",
      description: "Sugar free dibeties biscuits",
      price: 30,
      image: ["../../assets/images/product/biscuit.png"]
    },
    {
      id: 4,
      name: "Salt",
      description: "Black salt with extara potashium",
      price: 50,
      image: ["../../assets/images/product/salt.png"]
    },
    {
      id: 5,
      name: "Rice",
      description: "Rice for Biryani",
      price: 90,
      image: ["../../assets/images/product/rice.png"]
    }
  ];

  addProduct(product: any): boolean {
    this.ProductArray.push(product);
    sessionStorage.setItem("product", JSON.stringify(this.ProductArray));
    return true;
  }

  getProducts(filterVal:string): product[] {
    let temp:string|null = sessionStorage.getItem("product");
    let tempArray:product[]=[];

    if(temp){
      tempArray = JSON.parse(temp);
    }
    
    if(filterVal!="all"){
      let  filterArray:product[]=[];
      for(let t of tempArray){
        if(t.name.toLocaleLowerCase().includes(filterVal.toLowerCase()) || t.description.toLowerCase().includes(filterVal.toLowerCase())){
          filterArray.push(t);
        }
      }

      return filterArray;
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