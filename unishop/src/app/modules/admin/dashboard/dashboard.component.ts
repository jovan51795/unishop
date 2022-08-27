import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comData = {
    title: "Dashboard",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary"
    }
  ]
  }
  products: Product[] = [];
  constructor(private router: Router, private adminServices: AdminService) { 
    this.getProducts('sold', true)
  }

  columns =[
    {isBtn: true, key: "category", isSortable: true, dIcon: false}, 
    {isBtn: true, key: "productName", isSortable: true, dIcon: false},
    {isBtn: true, key: "price", isSortable: true, dIcon: false}, 
    {isBtn: true, key: "sold", isSortable: true, dIcon: false}
  ]
  
  ngOnInit(): void {
  }
  goToAddProduct =() => {
    this.router.navigate(['admin/add'])
  }

  tblHeaderAction(event: any) {
    this.getProducts(event.key, event.dIcon)
  }

  getProducts = (data: any, order: any) => {
    this.adminServices.getProducts(1, 5, data, order?'desc': 'acs' ).subscribe(x => {
      this.products = x
    })
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add'])
    }
  }
}

