import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { catchError, filter, map, Observable, tap } from 'rxjs';
import { Users } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  //http://localhost:3000/products?_page=1&_limit=5&_sort=sold&_order=asc
  getProducts = (page: number = 1, limit: number = 5, sort: string = 'sold', order: string = 'desc'): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.url}/products?_page1=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`).pipe(
      tap(x => x)
    )
  }

  addProducts = (data: Product) => {
    return this.http.post(`${environment.url}/products`, data).pipe(
      catchError( x => x)
    )
  }
}
