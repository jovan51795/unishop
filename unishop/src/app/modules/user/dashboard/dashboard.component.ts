import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/core/models/users';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;
  imageUrl: string = "../../../../assets/images/empty.png"
  dateNow = new Date();

  constructor(private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router,
    private toast: ToastrService) { 
    

    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: [true],
      role: [''],
      dob: [''],
      profile: [''],
      address: this.fb.group({
        province: ['', [Validators.required]],
        city: ['', [Validators.required]],
        brgy: ['', [Validators.required]],
        street: ['', [Validators.required]],
        landmark: ['', [Validators.required]]
      })

    })

    
  }

  ngOnInit(): void {
    this.userService.getUserCred().subscribe((x: any) => {
      this.imageUrl = "../../../../assets/images/" + x.profile
      this.userForm.patchValue(x)
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

   previewImage(e: any) {
    if(e.target.files) {
       const reader = new FileReader();
       reader.readAsDataURL(e.target.files[0]);
       reader.onload = (event: any) => {
         this.imageUrl = event.target.result;
       }
      this.userForm.get('profile')?.patchValue(e.target.files[0].name)
    }
 
   }

   submit =() => {
    const userData = this.userForm.getRawValue() as Users
    this.userService.updateUserInfo(userData).subscribe( x => {
      if(!x.error){
        this.toast.success("Successful");
      }
      // localStorage.setItem("user", JSON.stringify(x))
      
    })
   }

   delete= () => {
    this.userService.deleteAccount();
    this.router.navigate(['pages/home'])
   }
}
