import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/core/services/checkout.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  public orders : any = [];

  constructor(private router: Router, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getOrders().subscribe(
      res => {
        this.orders = res
      }
     ) 
  }


   backToHome() {
    this.router.navigate(['home']);
  }

}
