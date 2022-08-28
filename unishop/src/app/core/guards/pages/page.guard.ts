import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {
  constructor(private toast: ToastrService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      if(!localStorage.getItem("user")){
        return true
      }
      let proceed = false
      if(localStorage.getItem("user")){
        const userToken = JSON.parse(JSON.stringify(localStorage.getItem("user")));
        if(!JSON.parse(userToken).user?.status) {
          this.toast.error("Your account has been deactivated!", "Contact the Administrator")
        }

        proceed = JSON.parse(userToken).user?.role === "admin" || (JSON.parse(userToken).user?.role === "user" && JSON.parse(userToken).user?.status)? true : false;
      }
    
      return proceed;
  }
  
}
