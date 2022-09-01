import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  comData = {
    title: "Product Details",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary",
    }
  ]
  }
  paramID: any;
  paramType: any
  value: any[] = []
  constructor(
    private route: ActivatedRoute, 
    private adminServices: AdminService, 
    private router: Router,
    private userService: UserService
    ) { 
    this.route.queryParams.subscribe(data => {
      this.paramType = data['type']
      this.paramID = data['id']
      
    })
    if(this.paramType === 'products') {
      this.adminServices.getProductById(parseInt(this.paramID)).subscribe(data => {
        this.modifyData(data[0])
      })
    }else if(this.paramType === 'users') {
      this.userService.getUserCred(this.paramID).subscribe(x => {
        this.modifyData(x)
      })
    }

  }

  modifyData (data: any) {
    delete data.password
    delete data.id
    delete data.type
    let prop = Object.keys(data)
    prop.forEach(x => {
      if(x !== 'id'){
        if(data[x] instanceof Object && data[x].length !== 0){
          this.value.push({name: x,key: data[x], hasChild: true})
        }
        else {
          this.value.push({name: x,key: data[x], hasChild: false})
        }
      }
      
    })
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add'])
    }
  }


}
