import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "home",
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "home",
  component: HomeComponent
},
{
  path: "my-cart",
  component: MyCartComponent
},
{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: "user",
      loadChildren: () =>   import('./modules/user/user.module').then(b => b.UserModule)
    }
    // {
    //   path: "my-cart",
    //   loadChildren: () => import('./modules/my-cart/my-cart.module').then(b => b.MyCartModule)
    // }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
