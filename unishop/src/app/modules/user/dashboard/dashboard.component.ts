import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) { 
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

   toProfile(){
    document.getElementById("profile")?.scrollIntoView({behavior: "smooth"});
   }
   toAddresses(){
    document.getElementById("addresses")?.scrollIntoView({behavior: "smooth"});
   }
   toPassword(){
    document.getElementById("password")?.scrollIntoView({behavior: "smooth"});
   }
   toDelete(){
    document.getElementById("delete")?.scrollIntoView({behavior: "smooth"});
   }
   deleteAccount(){
    
   }


  
}
