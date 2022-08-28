import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  sidebar = false
  isProfilePage = false
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      this.isProfilePage = this.router.url.split('/').includes('profile')
    })
   }

  ngOnInit(): void {
    
  }

  toggleSidebar(){
    this.sidebar = !this.sidebar
  }

  toProfile(){
    this.sidebar = false
    document.getElementById("profile")?.scrollIntoView({behavior: "smooth"});
   }
   toAddresses(){
    this.sidebar = false
    document.getElementById("addresses")?.scrollIntoView({behavior: "smooth"});
   }
   toPassword(){
    this.sidebar = false
    document.getElementById("password")?.scrollIntoView({behavior: "smooth"});
   }
   toDelete(){
    this.sidebar = false
    document.getElementById("delete")?.scrollIntoView({behavior: "smooth"});
   }

  
}
