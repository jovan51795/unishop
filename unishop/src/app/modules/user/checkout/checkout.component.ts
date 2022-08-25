import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items: CartItem[] | undefined;
  total: number | undefined;

  constructor(private cartService: CartService, private router: Router, private toast: ToastrService,) { }

  ngOnInit(): void {
  }

   placeOrder() {
    this.toast.success('Your order has been placed.')
    this.router.navigate(['user/my-orders']);
  }

   backToCart() {
    this.router.navigate(['user/my-cart']);
  }


}
