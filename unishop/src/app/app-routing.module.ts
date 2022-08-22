import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "login",
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
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: "user",
      loadChildren: () =>   import('./modules/user/user.module').then(b => b.UserModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
