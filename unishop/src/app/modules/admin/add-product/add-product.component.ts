import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InputMixinsService } from 'src/app/mixins/input-mixins.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [DatePipe]
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  imageUrl: string = "../../../../assets/products/unishop-logo.jpg"
  dateNow = new Date();
  paramID: any;

  comData = {title: "Add Product"}

  constructor(
    private fb: FormBuilder,
     private adminServices: AdminService, 
     private toast: ToastrService,
     private datePipe: DatePipe,
     private location: Location,
     private route: ActivatedRoute,
     private inputServices: InputMixinsService
     ) {
      this.route.queryParams.subscribe(data => {
        this.paramID = data['id']
      })

    this.productForm = this.fb.group({
      id: [''],
      category: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      date: [{value: this.datePipe.transform(this.dateNow), disabled: true } ],
      paymentType: ['', [Validators.required]],
      isActive: [true],
      rating: this.fb.array([]),
      customers: this.fb.array([]),
      sold: [0]
    })

    if(this.paramID) {
      this.adminServices.getProductById(parseInt(this.paramID)).subscribe(data => {
        this.productForm.patchValue(data[0]);
        this.imageUrl = "../../../../assets/products/" + data[0].image;
      })
    }

  }

  ngOnInit(): void {
    
  }

  previewImage(e: any) {
   if(e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      this.productForm.get('image')?.patchValue(e.target.files[0].name)
   }

  }

  addProduct = (): any => {
    
    const productData = this.productForm.getRawValue() as Product
    if(!productData.category || !productData.productName ||
      !productData.image || !productData.description ||
      !productData.price || !productData.quantity ||
      !productData.date || !productData.paymentType){
        return this.toast.error('Please fill all the required fields')
      }
    if(this.paramID) {
      this.adminServices.editProduct(productData).subscribe()
    }else {
      this.adminServices.addProducts(productData).subscribe(x => {
        this.toast.success('Product successfully added')
      });
    }
  }

  validateInput(event: any, comp: number) {
    this.inputServices.numberOnlyInput(event, comp)
  }


}
