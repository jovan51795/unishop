import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public cartCount : number = 0;
  public userId = localStorage.getItem('user')
  

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    let productExist = false
    console.log(this.userId)
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
    console.log(this.cartItemList)
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

  removeItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
          this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAll(){
    this.cartItemList.map((res) => {
          this.cartItemList.splice(res.length);
    });
  }

  increaseQty(product: any) {
    this.cartItemList.map((a: any) => {
      if (product.id === a.id) {
          a.qty++
      }
    })
  }

}
