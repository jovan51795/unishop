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

  private customerOrder: any = []
  private customerCart: any = [];
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

    if (localStorage.getItem("user")) {
      this.userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
    }

    this.getCartItem();
    this.getProductCart()
  }

  ngOnInit(): void {


  }

  decreaseQty(item: any) {

    this.cartItems.map((x: any) => {
      if (x.id === item.id) {
        if (x.qty === 1) {
          x.qty = 1;
        } else {
          x.qty--;
          this.subTotal -= x.price
        }
      }
    })
  }

  increaseQty(item: any) {
    this.cartItems.map((x: any) => {
      if (x.id === item.id) {
        x.qty++;
        this.subTotal += parseInt(x.price)
      }
    })

  }

  goToProducts() {
    this.router.navigate(['pages/products'])
  }

  removeItem(item: any) {

    this.cartItems = this.cartItems.filter((x: any) => x.id !== item.id)
    this.customerCart[0].products = this.cartItems;
    this.subTotal -= item.price * item.qty;
    this.cartService.updateCart(this.customerCart[0], "cart").subscribe()
  }

  emptyCart() {
    this.cartItems = [];
    this.customerCart[0].products = this.cartItems;
    this.subTotal = 0
    this.cartService.updateCart(this.customerCart[0], "cart").subscribe()
  }

  getCartItem = () => {
    this.cartService.getProductCart(this.userInfo.user.id, 'cart').subscribe(x => {
      if (!!x.length) {
        this.customerCart = x
        this.cartItems = x[0].products
        this.getTotal()
      }

    })
  }

  getTotal = () => {
    this.cartItems.map((res: any) => {
      this.subTotal += res.qty * res.price
    })
  }

  //place orders

  placeOrders = (): any => {
    
    console.log(this.customerOrder.length)
    if (!this.customerOrder.length) {
      delete this.customerCart[0].id
      return this.cartService.addProductCart(Object.assign(this.customerCart[0], {subtotal: this.subTotal}), "orders").subscribe(x => {
        this.getProductCart();
        this.toast.success("Transuction successful")
      })

    }
    this.cartItems.filter((x: any) => this.customerOrder[0].products.push(x))
    this.cartService.addCustomerCart({id: this.customerOrder[0].id, cart: Object.assign(this.customerOrder[0], {subtotal: this.customerOrder[0].subtotal + this.subTotal})}, "orders").subscribe(x => {
      this.toast.success("Transuction successful")
      
    })
    this.emptyCart();
  }

  getProductCart = () => {
    this.cartService.getProductCart(this.userInfo.user?.id, "orders").subscribe(x => {
      this.customerOrder = x;
    })
  }


}