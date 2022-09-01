import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, Subscriber, tap } from 'rxjs';
import { UserAuth } from 'src/app/auth/model/auth-model';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private toast: ToastrService ) { }

  register = (userData: UserAuth) => {
    return this.http.post(`${environment.url}/register`, userData).pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap((x: any) => {
        if(x.accessToken) {
          this.router.navigate(['auth/login'])
        }
      })
    )
  }

  login = (userData: any) => {
    return this.http.post(`${environment.url}/login`, userData)
    .pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)
    )
  }

  forgotpassword = (userData: any) => {
    return this.http.post(`${environment.url}/forgotpasword`, userData)
    .pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)

    )
  }

  getToken(){
    return localStorage.getItem("token")? true: false;
  }
}
