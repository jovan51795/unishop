import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { SidebarService } from 'src/app/core/services/sidebar/sidebar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stickyHeader: boolean = false;
  isLogin: boolean = false
  data = localStorage.getItem("user");
  credentials: any;
  userType: boolean = false
  totalItem : number = 0;
  sidebarTooglge = false;
  cartCounter: number = 0
  menu = true;
 
  constructor(private router: Router, private cartService: CartService, private sidebar: SidebarService, private toast: ToastrService) {
    this.isLogin = localStorage.getItem("user") ? true : false
    this.router.events.subscribe(x => {
      const curRoute = this.router.url.split('/')
      if(curRoute.includes("home") || (curRoute.includes("products") && curRoute.includes("pages")) || curRoute.includes("my-cart") || curRoute.includes("my-orders")) {
        this.menu =  false;
      }else {
        this.menu = true
      }
    })
    if (this.isLogin) {
      this.userType = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?.role === 'admin' ||
      JSON.parse(JSON.parse(JSON.stringify(this.data))).role === "admin"
      ? true : false;
      this.credentials = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?? JSON.parse(JSON.parse(JSON.stringify(this.data)))
    }

    this.cartService.getCartCounter().subscribe(
      x => {
        const cartProductLen = x[0]?? x;
         this.cartCounter = cartProductLen.products?.length
        }
    )

    
  }

  
  ngOnInit(): void {
    // this.totalItem = this.cartService.getCartCount()
    this.getSidebarStatus();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    this.stickyHeader = pos > 100 ? true : false
  }

  toggle() {
    this.sidebar.setValue(!this.sidebarTooglge)
  }

  getSidebarStatus() {
    this.sidebar.getSidebar().subscribe(x => {
      this.sidebarTooglge = x
    })
  }

  logout() {
    this.isLogin = false
    localStorage.removeItem("user");
    this.router.navigate(['pages/home']);
  }

  checkUser(): any {
    if(!this.credentials) {
      return this.toast.error("You need to login")
    }
    return this.router.navigate(['user/my-cart'])
  }

}
