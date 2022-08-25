import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserAuth } from '../model/auth-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: ToastrService,  private router: Router) {
    this.registerForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      role: ['user']
    })
   }

  ngOnInit(): void {
  }

  register = (): any => {
    const userData = this.registerForm.getRawValue() as UserAuth
    if(!userData.firstName) {
     return this.toast.error('First Name is required!')
    }
    if(!userData.lastName) {
      return this.toast.error('Last Name is required!')
     }
     if(!userData.email) {
      return this.toast.error('Email is required!')
     }
     if(!userData.password) {
      return this.toast.error('Password is required!')
     }
    this.authService.register(userData).subscribe(x => {
      this.router.navigate(['login'])
      return this.toast.success('Register Success')
      
    })
  }
}
