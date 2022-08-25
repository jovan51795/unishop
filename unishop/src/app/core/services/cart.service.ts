import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) {}

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
    this.getItemTotal();
    console.log(this.cartItemList);
  }

  placeOrder(userOrder : Order[]){
      return this.http.post<Order[]>('http://localhost:3000/orders', userOrder).pipe(
        tap(x => x)
      )
  }

  getItemTotal() : number{
    let total = 0;
    this.cartItemList.map((a : any) => {
      total = parseInt(a.price) * parseInt(a.quantity);
    })
    return total;
  }

  getSubTotal() : number{
    let subTotal = 0;
    this.cartItemList.map((a : any) => {
      subTotal += parseInt(a.total);
    })
    return subTotal;
  }

  removeCartItem(product : any){
    this.cartItemList.map((a : any, index : any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAll(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
