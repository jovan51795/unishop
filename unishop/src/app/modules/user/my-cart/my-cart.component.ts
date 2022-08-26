import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  private cartSubscription: Subscription | undefined;
  
  public total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

}
