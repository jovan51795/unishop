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
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { FilterPipe } from './shared/filter/filter.pipe';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './shared/pages-layout/pages-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    MyCartComponent,
    AdminLayoutComponent,
    ProductsComponent,
    UserLayoutComponent,
    AdminSidebarComponent,
    FilterPipe,
    AuthLayoutComponent,
    PagesLayoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
