import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cart.service';
import { MessengerService } from 'src/app/core/services/messenger/messenger.service';
import { ProductsService } from 'src/app/core/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  public filterCategory : any;
  searchKey: string = "";
  public searchTerm !: string;

  constructor(
    private productService: ProductsService, 
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService,
    private msg: MessengerService

  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a : any) => {
        Object.assign(a, {quantity : 1, total : a.price})
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  // addToCart(item : Product[]){
  //   this.toast.success("Added to cart")
  //   this.cartService.addToCart(item);
  // }

  addToCart(item: Product[]){
    this.toast.success("Added to cart");
    this.msg.sendMsg(item)
  }

  goToCart(){
    this.router.navigate(['user/my-cart']);
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  filter(category: string){
    this.filterCategory = this.productList!
    .filter((a:any) => {
      if(a.category == category || category == ''){
          return a;
      }
    })
  }


}
