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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    MyCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
