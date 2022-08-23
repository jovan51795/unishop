import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: "full"
},{
  path: "dashboard",
  component: DashboardComponent
},
{
  path: "my-cart",
  component: MyCartComponent
},
{
  path: "checkout",
  component: CheckoutComponent
},
{
  path: "my-orders",
  component: MyOrdersComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserRoutingModule { }
