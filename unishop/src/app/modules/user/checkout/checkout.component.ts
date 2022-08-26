import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  total: number | undefined;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

   placeOrder() {
    alert("Order has been placed")
    this.router.navigate(['user/my-orders']);
  }

   backToCart() {
    this.router.navigate(['user/my-cart']);
  }


}
