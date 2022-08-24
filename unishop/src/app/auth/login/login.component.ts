import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserAuth } from '../model/auth-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) { 
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  login(): any {
    const userData = this.loginForm.getRawValue() as UserAuth
    this.userService.login(userData).subscribe(x => {
      if (!x.error){
        localStorage.setItem("token", x.accessToken);
        this.router.navigate(['profile'])
      }
    })
  }

  goToRegister(){
    this.router.navigate(['register'])
  }
  
  goToResetPassword(){
    this.router.navigate(['forgotpassword'])
  }

}
