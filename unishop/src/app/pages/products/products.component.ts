import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Product } from 'src/app/core/models/products';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any[] | undefined;
  public filterCategory : any;
  searchKey: string = "";
  public searchTerm !: string;
  userInfo: any
  cartData: any 
  

  constructor(
    private productService: ProductsService, 
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService
  ) {
    if(localStorage.getItem("user")){
      this.userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
    }
  }

   
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
    this.getCartData()
  }

  addToCart(item : any): any{
    const data = {customerId: this.userInfo.user?.id, qty: 1, products: ([Object.assign(item, {qty: 1, cartTotal: item.price * 1})]) as Product[] }
    if(!this.cartData.length) {
      return  this.cartService.addProductCart(data, "cart").subscribe(x => {
        this.toast.success("Item successfully added to your cart")
      })
    }

    let products: any[] = this.cartData[0].products
    const itemId = []
    for(let iid of products) {
      itemId.push(iid.id)
    }

    if(itemId.includes(item.id)) {
      return this.toast.error("This is already added to your cart")
    }
    this.cartData[0].products.push(Object.assign(item, {qty: 1, cartTotal: item.price * 1}))
        this.cartService.addCustomerCart({id: this.cartData[0].id, cart: this.cartData[0]}, "cart").subscribe(x => {
          this.toast.success("Item successfully added to your cart")
    })
    
  }
  
  goToCart(){
    this.router.navigate(['user/my-cart']);
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

  filter(category: string){
    this.filterCategory = this.productList!
    .filter((a:any) => {
      if(a.category === category || category === ''){
          return a;
      }
    })
  }

  getCartData = () => {
    return this.cartService.getProductCart(this.userInfo.user?.id , "cart").subscribe(x => {
      this.cartData = x
    })
  }


}
