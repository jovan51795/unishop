import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userID: string = "";
  constructor(private http: HttpClient, private toast: ToastrService) {
    const userInfo = localStorage.getItem("user")
    if(userInfo){
      this.userID = JSON.parse(JSON.parse(JSON.stringify(userInfo))).user?.id?? JSON.parse(JSON.parse(JSON.stringify(userInfo))).id
    }
   }

  getUserCred = (data = this.userID): Observable<any> => {
    return this.http.get(`${environment.url}/users/${data}`).pipe(
      tap(x => x)
    )
  }

  updateUserInfo = (data: Users) => {
    return this.http.patch(`${environment.url}/users/${data.id?? this.userID}`, data).pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
    )
  }

  deleteAccount = () => {
    return this.http.delete(`${environment.url}/users/${this.userID}`).pipe(
      tap(x => x)
    )
  }
}
