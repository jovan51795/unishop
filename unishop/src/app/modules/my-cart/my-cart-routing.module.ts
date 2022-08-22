import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyCartComponent } from 'src/app/components/my-cart/my-cart.component';

const routes: Routes = [
  {
    path: "my-cart",
    component: MyCartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MyCartRoutingModule { }


