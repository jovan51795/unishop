import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : Product[] = [];
  public filterCategory : any;
  searchKey: string = "";
  public searchTerm !: string;

  constructor(
    private productService: ProductsService, 
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a : Product) => {
        Object.assign(a, {quantity : 1, total : a.price})
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addToCart(item : any){
    if(item.quantity > 0){
      this.cartService.addToCart(item);
      this.toast.success("Added to cart");
      item.quantity += 1;
      console.log(item);
    }
    else{
      this.toast.error("Sorry, this item is out of stock")
      console.log(item)
    }
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
    this.filterCategory = this.productList
    .filter((a:any) => {
      if(a.category == category || category == ''){
          return a;
      }
    })
  }


}
