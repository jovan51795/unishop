import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");

  constructor() { 
    
  }
  getProducts(){
    return this.productList.asObservable();
  }

 
  
  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let subTotal = 0;
    this.cartItemList.map((a : any) => {
      subTotal += a.total;
    })

    return subTotal;
  }

}
