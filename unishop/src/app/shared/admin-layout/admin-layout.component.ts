import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  sidebarToogle = false
  constructor(private sidebar: SidebarService) {
    this.sidebar.getSidebar().subscribe(x => {
      this.sidebarToogle = x;
    })
   }

  ngOnInit(): void {
  }

}
