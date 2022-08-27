import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger/messenger.service';



@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public products !: Product[];
  public itemTotal !: number;
  public subTotal !: number;
  public newQuantity !: number;

  constructor(
    private cartService: CartService, 
    private router: Router,
    private msg: MessengerService
    
    ) { }

  ngOnInit(): void {

    // this.msg.getMsg().subscribe((product: any) => {
      
    // })

    this.cartService.getProducts().subscribe( res => {
    this.products = res;
    this.itemTotal = this.cartService.getItemTotal();
    this.subTotal = this.cartService.getSubTotal();
    })
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item);
    this.cartService.getProducts().subscribe( () => {
      this.subTotal -= item.price 
    })
  }
  
  emptyCart(){
    this.cartService.removeAll();
  }

  goToProducts(){
    this.router.navigate(['pages/products'])
  }

  goToCheckout(){
    this.router.navigate(['user/checkout'])
  }

}