import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from 'src/app/components/my-cart/my-cart.component';
import { MyCartRoutingModule } from './my-cart-routing.module';



@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule
  ]
})
export class MyCartModule { }
