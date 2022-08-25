import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function toggleSidebar(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stickyHeader: boolean = false;
  isLogin = localStorage.getItem("user")
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // let max = document.documentElement.scrollHeight;
    
    this.stickyHeader = pos > 1500? true : false
  }

toggle() {
  toggleSidebar()
}

logout() {
  localStorage.removeItem("user");
  this.router.navigate(['home']);
}
}
