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
    document.getElementById("profile")?.scrollIntoView({behavior: "smooth"});
   }
   toAddresses(){
    document.getElementById("addresses")?.scrollIntoView({behavior: "smooth"});
   }
   toPassword(){
    document.getElementById("password")?.scrollIntoView({behavior: "smooth"});
   }
   toDelete(){
    document.getElementById("delete")?.scrollIntoView({behavior: "smooth"});
   }

  
}
