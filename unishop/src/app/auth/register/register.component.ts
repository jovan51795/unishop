import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: ToastrService) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ["user"],
      contact: [],
      status: [true]
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
    this.authService.register(userData).subscribe()
  }
}
