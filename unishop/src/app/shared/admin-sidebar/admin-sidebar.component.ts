import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar/sidebar.service';
declare function hideSidebar(): any
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  sidebarToggle = false;
  constructor(private sidebar: SidebarService) {
    this.sidebar.getSidebar().subscribe(x => {
      this.sidebarToggle = x
    })
   }

  ngOnInit(): void {
    
  }

  hide() {
    this.sidebar.setValue(!this.sidebarToggle)
  }

}
