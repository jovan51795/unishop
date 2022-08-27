import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../../models/products';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: Product){
    console.log(product);
    this.subject.next(product);
  }

  getMsg(){
    return this.subject.asObservable();
  }

}
