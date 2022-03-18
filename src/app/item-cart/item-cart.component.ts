import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

  itemCartAr = [];

  constructor(private service: ApiService) { }

  totalAmout = 0;

  ngOnInit(): void {
    this.itemCartAr = JSON.parse(sessionStorage.getItem('cart'));
    for (let data1 = 0; this.itemCartAr.length > data1; data1++) {
      this.totalAmout +=  this.itemCartAr[data1].qty * this.itemCartAr[data1].unitPrice;

      // if (cart[data1].qty != null && data.id == cart[data1].id) {
      //   cart[data1].qty += 1;
      //   isAddCart = 1;
      //   this.itemCout += 1;
      // }
    }
  }

  pleaseOrder(){
    let orderDetailAr = [];
    for(let data1 = 0; this.itemCartAr.length > data1; data1++){
      let product = {
        name : this.itemCartAr[data1].name,
        id : this.itemCartAr[data1].id,
        description : null,
        qtyOnHand : null,
        unitPrice : this.itemCartAr[data1].price,
        create_user_id : null,
        statusId : null,
        product_category : null,
        productImageList : null
      }
      let orderDetail = {
        orderDetailId : null,
        itemId : null,
        product : product,
        qty : this.itemCartAr[data1].qty,
        amount : this.itemCartAr[data1].unitPrice,
      }
      orderDetailAr.push(orderDetail);

    }
    let customer ={
      customerId : sessionStorage.getItem('happyKidUserId')
    }

    let order = {
      orderDetail : orderDetailAr,
      amount : this.totalAmout,
      orderId : null,
      date : null,
      customer : customer,
      status : null
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Place order!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.placeOrder(order).subscribe(
            res => {
              // this.productList = res ? res : null;
              Swal.fire(
                  'placed order!',
                  '',
                  'success'
              );
              sessionStorage.removeItem('cart');
              this.itemCartAr = [];
              this.totalAmout = 0;
            },
            error => {
              console.log("error")
            }
        );
      }
    })

  }


}
