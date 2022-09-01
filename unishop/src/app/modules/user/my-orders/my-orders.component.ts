import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  private userInfo: any;
  orderItems: any;
  ordersByID: any;
  constructor(private router: Router, private cartService: CartService) {
    if(localStorage.getItem("user")) {
      this.userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))));
    }

    this.getAllOrders();
   }

  ngOnInit(): void {
  }


   backToHome() {
    this.router.navigate(['pages/home']);
  }

  getAllOrders = () => {
    this.cartService.getProductCart(this.userInfo.user?.id, "orders").subscribe(x => {
      console.log(x, "the ex")
      this.orderItems = x
    })
  }

  showModal = (id: number) => {
    this.ordersByID = this.orderItems.filter((data: any) => data.id === id)[0]
    
  }

}
