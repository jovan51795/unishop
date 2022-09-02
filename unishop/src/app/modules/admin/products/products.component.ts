import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/core/models/products-model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  columns =[
    {isBtn: true, key: "category", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "productName", isSortable: false, dIcon: false},
    {isBtn: true, key: "price", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "sold", isSortable: false, dIcon: false},
    {isBtn: false, key: "status", isSortable: true, dIcon: false, badge: true}
  ]

  buttons = [
    {type: "edit", icon: "bx-edit-alt", bgColor: "btn-primary"},
    {type: "delete", icon: "bx-trash", bgColor: "btn-danger"},
    {type: "view", icon: "bxs-detail", bgColor: "btn-info"}
  ]

  constructor(private adminService: AdminService, private router: Router) { 
    this.getAllProducts()
  }

  getAllProducts() {
    this.adminService.getAllProducts().subscribe(
      x =>{
        this.products = x.filter(i => i.status === true)
      }
    )
  }

  ngOnInit(): void {
  }

  goToAddProduct =() => {
    this.router.navigate(['admin/add'])
  }

  tableAction(event: any) {
    if(event.type === 'edit') {
      this.router.navigate(['admin/add'], {queryParams: {id: event.id}})
    }else if(event.type === 'delete') {
      event.status = !event.status
      this.adminService.editProduct(event).subscribe(x => {
        this.getAllProducts()
      })
      
    }else if(event.type === 'view') {
      this.router.navigate(['admin/details'], {queryParams: {id: event.id, type: "products"}})
    }
  }

  tblHeaderAction(event: any) {
    this.getProducts(event.key, event.dIcon)
  }

  getProducts = (data: any, order: any) => {
    this.adminService.getProducts(1, 10, data, order?'desc': 'acs' ).subscribe(x => {
      this.products = x.filter(i => i.status === true)
    })
  }

}
