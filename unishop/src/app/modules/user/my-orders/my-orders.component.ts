import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


   backToHome() {
    this.router.navigate(['home']);
  }

}
