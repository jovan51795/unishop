import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productList: any[] | undefined;
  public modalList: any ={image: '', productName: '', description: '', price: 0};

  constructor(private productService: ProductsService, private route: Router) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productList = res;
    });
  }

  goToProducts(){
    this.route.navigate(['pages/products'])
  }

  showModal(id: number) {
   setTimeout(()=> {
    this.modalList = this.productList?.filter(res => res.id === id)[0]
   }, 300)
   
  }
  
}
