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
  products: Product[] = [];
  constructor(private router: Router, private adminServices: AdminService) { 
      this.adminServices.getProducts().subscribe(x => {
        console.log(x[0].category)
        this.products = x
      })
  }

  columns =["category", "productName","price", "sold"]

  
  ngOnInit(): void {
  }
  goToAddProduct =() => {
    this.router.navigate(['admin/add'])
  }
}

