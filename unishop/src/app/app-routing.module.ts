import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/guards/admin/admin-auth.guard';
import { PageGuard } from './core/guards/pages/page.guard';
import { AuthGuard } from './core/guards/user/auth.guard';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './shared/pages-layout/pages-layout.component';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "pages/home",
  pathMatch: 'full'
},
{
  path: "",
  component: PagesLayoutComponent,
  canActivate: [PageGuard],
  children: [
    {
      path: "pages",
      loadChildren: ()=> import('./pages/pages.module').then(b => b.PagesModule)
    }
  ]
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
},
{
  path: "",
  component: AuthLayoutComponent,
  children: [
    {
      path: "auth",
      loadChildren: () => import('./auth/auth.module').then(b => b.AuthModule)
    }
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
