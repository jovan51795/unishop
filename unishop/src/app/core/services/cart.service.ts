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
    this.cartItems = []
  }

  constructor() {}

  getProducts(){
    return this.productList.asObservable();
  }

  private getItemIds() {
    return this.getItems().map(cartItem => cartItem.product.id);
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

  public updateItemAmount(item: CartItem, newAmount: number) {
    this.cartItems.forEach((cartItem) => {
      if (cartItem.product.id === item.product.id) {
        cartItem.amount = newAmount;
      }
    })
  }

  public clearCart() {
    this.cartItems = [];
    this.itemsChanged.emit(this.cartItems.slice());
  }
>>>>>>> parent of a4458af (Merge pull request #22 from jovan51795/feature-order-process)


  public getTotal() {
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      total += cartItem.amount * cartItem.product.price;
    });
    return total;
  }


}
