import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "admin",
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
  path: "forgotpassword",
  component: ForgotpasswordComponent
},
{
  path: "home",
  component: HomeComponent
},
{
  path: '',
  
  children: [
    {
      path: "user",
      loadChildren: () =>   import('./modules/user/user.module').then(b => b.UserModule)
    },
  ]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./modules/admin/admin.module').then(b => b.AdminModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
