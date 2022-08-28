import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from '../shared/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeroSectionComponent,
    ProductsComponent,
    HomeComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
})
export class PagesModule { }
