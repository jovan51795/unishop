import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  private cartSubscription: Subscription | undefined;
  public items: CartItem[] | undefined;
  public total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.cartSubscription = this.cartService.itemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
        this.total = this.cartService.getTotal();
      }
    );
  }

  
  public onClearCart(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.clearCart();
  }

  public onRemoveItem(event: { preventDefault: () => void; stopPropagation: () => void; }, item: CartItem) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.removeItem(item);
  }

  public increaseAmount(item: CartItem) {
    this.cartService.updateItemAmount(item, item.amount + 1);
  }

  public decreaseAmount(item: CartItem) {
    const newAmount = item.amount === 1 ? 1 : item.amount - 1;
    this.cartService.updateItemAmount(item, newAmount);
  }

  // public checkAmount(item: CartItem) {
  //   this.cartService.updateItemAmount(
  //     item,
  //     item.amount < 1 || !item.amount || isNaN(item.amount) ? 1 : item.amount
  //   );
  // }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

}
