import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  goToProducts(){
    this.routes.navigate(["pages/products"])
  }


}
