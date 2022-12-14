import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss'],
  providers: [DatePipe]
})
export class MyCartComponent implements OnInit {

  private customerOrder: any = [];
  private customerCart: any = [];
  public cartItems: any = [];
  public itemPrice !: number;
  public qty !: number;
  public subTotal = 0;
  userInfo: any
  hasAddress = false

  constructor(
    private cartService: CartService,
    private router: Router,
    private toast: ToastrService,
    private datePipe: DatePipe,
    private zone: NgZone,
    private adminService: AdminService
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

  emptyCart(id = 0) {
    if(id !== 0) {
      this.customerCart[0] = Object.assign(this.customerCart[0], {id})
    }
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
    const itemID = this.customerCart[0].id
    delete this.customerCart[0].id
    this.cartService.addProductCart(Object.assign(this.customerCart[0], { subtotal: this.subTotal, status: false, orderDate: this.datePipe.transform(new Date()) }), "orders").subscribe(x => {
        this.getProductCart();
        this.emptyCart(itemID);
        this.adminService.updateSoldProducts(x)
        this.toast.success("Order has been placed");
        this.zone.run(() => this.router.navigate(['user/my-orders']));
      })
  }

  getProductCart = () => {
    this.cartService.getProductCart(this.userInfo.user?.id, "orders").subscribe(x => {
      this.customerOrder = x;
    })
  }

  goToAddress() {
    this.router.navigate(['user/profile'])
  }
  
}