import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { RouterModule } from '@angular/router';

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
