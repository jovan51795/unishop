import { Component, OnInit } from '@angular/core';
declare function hideSidebar(): any
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    hideSidebar()
  }

}
