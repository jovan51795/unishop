import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  comData = {
    title: "Users"
  }

  columns =[
    {isBtn: true, key: "firstName", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "lastName", isSortable: false, dIcon: false},
    {isBtn: true, key: "email", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "contact", isSortable: false, dIcon: false},
    {isBtn: true, key: "status", isSortable: false, dIcon: false, badge: true},
  ]

  buttons = [
    // {type: "edit", icon: "bx-pencil", bgColor: "btn-primary"},
    {type: "Deactivate", icon: "bx-user-check", bgColor: "btn-success"},
    {type: "View", icon: "bxs-detail", bgColor: "btn-info"}
  ]
  constructor(private router: Router, private adminservice: AdminService) { 
    this.adminservice.getAllUsers().subscribe(data => {
      this.users = data.filter( user => user.role !== "admin")
    })
  }

  ngOnInit(): void {
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add'])
    }
  }

  tableAction(event: any) {
    
    if(event.type === "Deactivate") {

    }else if(event.type === "View") {

    }
  }

}
