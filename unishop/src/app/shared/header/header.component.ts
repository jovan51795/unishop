import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
declare function toggleSidebar(): any;
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

  @Output() sidebarEmit = new EventEmitter();

  constructor(private router: Router, private cartService: CartService, ) {
    this.isLogin = localStorage.getItem("user") ? true : false
    if (this.isLogin) {
      this.userType = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?.role === 'admin' ||
      JSON.parse(JSON.parse(JSON.stringify(this.data))).role === "admin"
      ? true : false;
      this.credentials = JSON.parse(JSON.parse(JSON.stringify(this.data))).user?? JSON.parse(JSON.parse(JSON.stringify(this.data)))
    }
  }

  ngOnInit(): void {
    this.totalItem = this.cartService.getCartCount()
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // let max = document.documentElement.scrollHeight;

    this.stickyHeader = pos > 1500 ? true : false
  }

  toggle() {
    this.sidebarEmit.emit()
    
    
    
    // toggleSidebar()
  }

  logout() {
    this.isLogin = false
    localStorage.removeItem("user");
    this.router.navigate(['pages/home']);
  }
}
