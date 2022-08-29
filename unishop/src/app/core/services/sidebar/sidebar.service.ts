import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebar: BehaviorSubject<boolean>;
  constructor() {
    this.sidebar = new BehaviorSubject<boolean>(false);
   }


  setValue = (sidebarStatus: boolean): void =>{
    this.sidebar.next(sidebarStatus)
  }

  getSidebar = (): Observable<boolean> => {
    return this.sidebar.asObservable()
  }
}
