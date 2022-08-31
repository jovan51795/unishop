import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productList: any[] | undefined;
  

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productList = res;
    });
  }

}
