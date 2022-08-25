import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[];
  public itemsChanged: EventEmitter<CartItem[]> = new EventEmitter<CartItem[]>();


  constructor() { 
    this.cartItems = []
  }

  public getItems(){
    return this.cartItems.slice()
  }

  private getItemIds() {
    return this.getItems().map(cartItem => cartItem.product.id);
  }


  public addItem(item: CartItem) {
    // If item is already in cart, add to the amount, otherwise push item into cart
    if (this.getItemIds().includes(item.product.id)) {
      this.cartItems.forEach(function (cartItem) {
        if (cartItem.product.id === item.product.id) {
          cartItem.amount += item.amount;
        }
      });
      
    } else {
      this.cartItems.push(item);
      
    }
    this.itemsChanged.emit(this.cartItems.slice());
  }

  public addItems(items: CartItem[]) {
    items.forEach((cartItem) => {
      this.addItem(cartItem);
    });
  }

  public removeItem(item: CartItem) {
    const indexToRemove = this.cartItems.findIndex(element => element === item);
    this.cartItems.splice(indexToRemove, 1);
    this.itemsChanged.emit(this.cartItems.slice());
  }

  public updateItemAmount(item: CartItem, newAmount: number) {
    this.cartItems.forEach((cartItem) => {
      if (cartItem.product.id === item.product.id) {
        cartItem.amount = newAmount;
      }
    });
    this.itemsChanged.emit(this.cartItems.slice());
  }

  public clearCart() {
    this.cartItems = [];
    this.itemsChanged.emit(this.cartItems.slice());
  }

  public getTotal() {
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      total += cartItem.amount * cartItem.product.price;
    });
    return total;
  }


}
