import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart/cart.service';

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
  userInfo: any
  
  constructor(
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService
    ) {
      
      if(localStorage.getItem("user")) {
        this.userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
      }

      this.getCartitem()
     }

  ngOnInit(): void {
    const cartItem: any[] = this.cartItems
    

    
    
    
  }
  
  decreaseQty(item : any){
    
    this.cartItems.map((x: any) => {
      if(x.id === item.id) {
        if(x.qty === 1) {
          x.qty = 1;
        }else {
          x.qty--;
          this.subTotal -= x.price
        }
      }
    })
  }

  increaseQty(item : any){
    this.cartItems.map((x: any) => {
      if(x.id === item.id) {
        x.qty++;
        this.subTotal += parseInt(x.price)
      }
    })

  }
  
  goToProducts(){
    this.router.navigate(['pages/products'])
  }

  removeItem(item : any){
    this.cartService.removeItem(item)  
    this.subTotal -= item.price * item.qty; 
  }
  
  emptyCart(){
    this.cartService.removeAll()
  }

  

  // placeOrder(item : any){
  //   this.toast.success("Your order has been placed")
  //   this.cartService.placeOrder(item)
  // }

  getCartitem = () => {
    this.cartService.getProductCart(this.userInfo.user.id).subscribe( x => {
      
      this.cartItems = x[0].products
      this.getTotal()
    })
  }

  getTotal = () => {
    this.cartItems.map((res:any) => {
      this.subTotal += res.qty * res.price
    })  
  }


}