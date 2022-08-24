import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from 'src/app/components/table/table.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    AddProductComponent,
    TableComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,  
    CommonModule,
  ],
  providers: [
    FormBuilder
  ]
})
export class AdminModule { }
