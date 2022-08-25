import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) { 
    this.forgotForm = this.fb.group({
      email: ['']
    })
  }

  ngOnInit(): void {
  }

  reset(){

  }

  forgotpassword(){
    
  }
}
