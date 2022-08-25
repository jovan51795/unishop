import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public products : any = [];
  public itemTotal !: number;
  public subTotal !: number;

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe( res => {
      this.products = res;
      this.itemTotal = this.cartService.getItemTotal();
      this.subTotal = this.cartService.getSubTotal();
     })

     
     
  }

   placeOrder() {
    this.cartService.placeOrder(this.products).subscribe(() => {
      this.toast.success("Your order has been placed.");
      this.router.navigate(['user/my-orders']);;
    })
  }

   backToCart() {
    this.router.navigate(['user/my-cart']);
  }


}
