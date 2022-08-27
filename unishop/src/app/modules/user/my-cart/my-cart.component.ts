import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public cartItems: any = [];
  public itemPrice !: number;
  public qty !: number;
  public subTotal = 0;
  
  constructor(
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItemList()
    console.log(this.cartItems)
    this.cartItems.map((res:any) => {
      this.qty = res.qty
      this.itemPrice = res.price
      this.subTotal += this.qty * this.itemPrice
    })    
  }
  
  decreaseQty(item : any){
    this.cartService.decreaseQty(item);
    this.cartService.getProducts().subscribe( () => {
      this.subTotal -= item.price; 
    })
  }

  increaseQty(item : any){
    this.cartService.increaseQty(item);
    this.cartService.getProducts().subscribe( () => {
      this.subTotal += item.price; 
    })
  }
  
  emptyCart(){
    this.cartItems = []
  }

  goToProducts(){
    this.router.navigate(['pages/products'])
  }

  // placeOrder(item : any){
  //   this.toast.success("Your order has been placed")
  //   this.cartService.placeOrder(item)
  // }


}