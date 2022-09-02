import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/products-model/product';
import { catchError, map, Observable, tap } from 'rxjs';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getProducts = (page: number = 1, limit: number = 5, sort: string = 'sold', order: string = 'desc'): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.url}/products?_page1=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`).pipe(
      tap(x => x)
    )
  }

  getAllProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.url}/products`).pipe(
      tap(x => x)
    )
  }

  getProductById = (id: number) => {
    return this.getAllProducts().pipe(
      map((x: Product[]) => {
        return  x.filter( i => i.id === id)
      })
    )
  }

  addProducts = (data: Product) => {
    return this.http.post(`${environment.url}/products`, data).pipe(
      catchError( x => x)
    )
  }

  editProduct = (data: Product) => {
    return this.http.patch(`${environment.url}/products/${data.id}`, data).pipe(
      tap(x => x)
    )
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.url}/products/${id}`).pipe(
      tap(x => x)
    )
  }

  //users

  getAllUsers = (): Observable<Users[]> => {
    return this.http.get<Users[]>(`${environment.url}/users`).pipe(
      tap(x => x)
    )
  }

  getAllOrders = () => {
    return this.http.get(`${environment.url}/orders`).pipe(
      tap(x => x)
    )
  }

  updateSoldProducts = (data: any) => {
    console.log(data, "from admin")
    let productList: any;
    this.getAllProducts().subscribe((productData: any) => {
      productList = productData
    })
    setTimeout(() => {
      for(let item of data.products) {
        let prodtc = productList.filter((x:any) => x.id === item.id);
        this.editProduct({id: prodtc[0].id, sold: prodtc[0].sold + item.qty} as Product).subscribe()
      }
    }, 1000);
  }
}
