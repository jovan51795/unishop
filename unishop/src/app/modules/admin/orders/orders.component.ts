import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  comData = {
    title: "Orders"
  }

  orders: any
  users: any
  ordersInfo: any[] = []

  constructor(private adminService: AdminService, private cartService: CartService) {
    this.initAll();
  }

  ngOnInit(): void {

  }

  columns = [
    { isBtn: true, key: "order id", isSortable: false, dIcon: false },
    { isBtn: true, key: "name", isSortable: false, dIcon: false },
    { isBtn: true, key: "email", isSortable: false, dIcon: false },
    { isBtn: false, key: "address", isSortable: true, dIcon: false, badge: true },
    { isBtn: true, key: "subtotal", isSortable: false, dIcon: false },
    { isBtn: true, key: "quantity", isSortable: false, dIcon: false },
    { isBtn: false, key: "order status", isSortable: true, dIcon: false, badge: true },
  ]

  buttons = [
    {type: "Deliver", type2: "Deliver", icon: "bxs-cart-download", bgColor: "btn-success"},
  ]

  getAllOrders = () => {
    this.adminService.getAllOrders().subscribe(x => {
      this.orders = x
    })
  }

  getAllUsers = () => {
    this.adminService.getAllUsers().subscribe(x => {
      this.users = x
    })
  }

  mapOrdersAnUser = () => {
    var info; 
    this.ordersInfo = [];
    for (let order of this.orders) {
      info = this.users.filter((x: any) => {
        if (x.id === order.customerId) {
          return x
        }
      })

      this.ordersInfo.push({
        id: order.id,
        "order id": order.id,
        name: `${info[0].firstName} ${info[0].lastName}`,
        email: info[0].email,
        subtotal: order.subtotal,
        quantity: order.qty,
        address: info[0].address ? `${info[0].address?.street ?? ''} St.,Baragay ${info[0].address?.brgy ?? ''}, ${info[0].address?.city ?? ''} ${info[0].address?.province ?? ''}` : "",
        "order status": order.status
      })
    }

  }


  tblHeaderAction(data: any) {
    console.log(data)
  }

  tableAction(data: any) {
    const orderData = this.orders.filter((x: any)=> x.id === data.id)
   
    orderData[0].status = true;
    this.cartService.updateCart(orderData[0], "orders").subscribe(x => {
    this.initAll();
    })
  }

  initAll = () => {
    this.getAllOrders();
    this.getAllUsers();
    setTimeout(() => {
      this.mapOrdersAnUser()
    }, 300);
  }


}
