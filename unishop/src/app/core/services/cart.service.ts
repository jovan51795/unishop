import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[];
  public itemsChanged: EventEmitter<CartItem[]> = new EventEmitter<CartItem[]>();



  constructor() {}

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
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
      });

  removeCartItem(product : any){
    this.cartItemList.map((a : any, index : any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    });
    this.itemsChanged.emit(this.cartItems.slice());
  }

  public clearCart() {
    this.cartItems = [];
    this.itemsChanged.emit(this.cartItems.slice());
  }



}
