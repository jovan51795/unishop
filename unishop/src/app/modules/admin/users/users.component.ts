import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { UserService } from 'src/app/core/services/user/user.service';

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
    {type: "Deactivate", type2: "Activate", icon: "bx-user-check", bgColor: "btn-success"},
    {type: "View", type2: "View", icon: "bxs-detail", bgColor: "btn-info"}
  ]
  constructor(private router: Router, 
    private adminservice: AdminService,
    private userService: UserService
    ) { 
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
      event.status = !event.status
      this.userService.updateUserInfo(event).subscribe()
    }else if(event.type === "View") {
      this.router.navigate(['admin/details'], {queryParams: {id: event.id, type: "users"}})
    }
  }

}
