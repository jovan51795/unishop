import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/user-layout/user-layout.component';
import { AdminSidebarComponent } from './shared/admin-sidebar/admin-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    MyCartComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    AdminSidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
