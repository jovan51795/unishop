import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  sidebar = false
  constructor() { }

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
