import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {Cart} from '../../../models/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public cartCounter: BehaviorSubject<any>
  public cartCount : number = 0;

  constructor(private http: HttpClient) {
    this.cartCounter = new BehaviorSubject<any>([]);
   }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    let productExist = false

    for(let i in this.cartItemList){
        if(this.cartItemList[i].id === product.id){
          this.cartItemList[i].qty++;
          productExist = true;
          break;
        }
    }

    if(!productExist){
      this.cartItemList.push({
          id: product.id,
          productName: product.productName,
          description: product.description,
          price: parseInt(product.price),
          qty: 1
        })
    }
  }

  getItemList() {
    return this.cartItemList
  }

  getCartCount(){
    return this.cartItemList.length
  }

  decreaseQty(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        if(a.qty > 1){
          a.qty--
        }else{
          this.cartItemList.splice(index, 1);
        }
      }
    })
  }

  increaseQty(product: any) {
    this.cartItemList.map((a: any) => {
      if (product.id === a.id) {
          a.qty++
      }
    })
  }

  removeItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
          this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAll(){
      this.cartItemList.map((res : any) => {
            this.cartItemList.splice(res.length);
      });
    }


    //for add to cart
    addProductCart = (data: any, type: string) => {
      return this.http.post(`${environment.url}/${type}`, data).pipe(
        tap(x => {
          if(type === "cart") {
            this.cartCounter.next(x)
          }
        })
      )
    }

    getProductCart = (id: string, type: string): Observable<Cart[]> => {
      return this.http.get<Cart[]>(`${environment.url}/${type}?customerId=${id}`).pipe(
        tap(x => {
          if(type === "cart") {
            this.cartCounter.next(x)
          }
        })
      )
    }

    addCustomerCart = (data: any, type: string) => {
      return this.http.patch(`${environment.url}/${type}/${data.id}`, data.cart).pipe(
        tap(x => {
          if(type === "cart") {
            this.cartCounter.next(x)
          }
        })
      )
    }

    updateCart = (data: any, type: string) => {
      return this.http.put(`${environment.url}/${type}/${data.id}`, data).pipe(
        tap(x => {
          if(type === "cart") {
            this.cartCounter.next(x)
          }
        })
      )
    }

    getCartCounter = (): Observable<any> => {
      return this.cartCounter.asObservable();
    }
}
