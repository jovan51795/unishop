import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor () {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let proceed = false;
    if(localStorage.getItem("user")){
      const userToken = JSON.parse(JSON.stringify(localStorage.getItem("user")));
      proceed = JSON.parse(userToken).user?.role === "user" || 
      JSON.parse(userToken).role === "user"? true : false;
    }

    return proceed;
    
  }
  
}
