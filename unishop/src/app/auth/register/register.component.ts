import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
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
      name: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  register = (): any => {
    const userData = this.registerForm.getRawValue() as UserAuth
    if(!userData.name) {
     return this.toast.error('Name is required!')
    }
    this.authService.register(userData).subscribe()
  }
}
