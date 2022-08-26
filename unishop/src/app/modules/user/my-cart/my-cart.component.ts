import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';



@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public products : any = [];
  public subTotal !: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   this.cartService.getProducts().subscribe( res => {
    this.products = res;
    this.subTotal = this.cartService.getTotalPrice();
   })
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  
  emptyCart(){
    this.cartService.removeAll();
  }

  goToProducts(){
    this.router.navigate(['/products'])
  }

  goToCheckout(){
    this.router.navigate(['user/checkout'])
  }

  

}
