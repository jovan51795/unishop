import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminAuthGuard } from './core/guards/admin/admin-auth.guard';
import { AuthGuard } from './core/guards/user/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';

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
  path: "forgotpassword",
  component: ForgotpasswordComponent
},
{
  path: "home",
  component: HomeComponent
},
{
  path: '',
  component: UserLayoutComponent,
  canActivate: [AuthGuard],
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
  canActivate: [AdminAuthGuard],
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
