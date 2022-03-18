import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";
import Swal from 'sweetalert2';
import {UserDetailsDto} from "../modal/UserDetailsDto";

@Component({
    selector: 'app-item-cart',
    templateUrl: './item-cart.component.html',
    styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

    itemCartAr = [];
    userDetailsDto: UserDetailsDto;
    constructor(private service: ApiService) {
    }

    totalAmout = 0;
    showDetails = true;

    ngOnInit(): void {
        this.itemCartAr = JSON.parse(sessionStorage.getItem('cart'));
        for (let data1 = 0; this.itemCartAr.length > data1; data1++) {
            this.totalAmout += this.itemCartAr[data1].qty * this.itemCartAr[data1].unitPrice;

            // if (cart[data1].qty != null && data.id == cart[data1].id) {
            //   cart[data1].qty += 1;
            //   isAddCart = 1;
            //   this.itemCout += 1;
            // }
        }
        this.userDetailsDto = new UserDetailsDto();
        this.userDetailsDto.addressLine1 = sessionStorage.getItem('happyKidAddress1')
        this.userDetailsDto.addressLine2 = sessionStorage.getItem('happyKidAddress2')
        this.userDetailsDto.addressLine3 = sessionStorage.getItem('happyKidAddress3')
        this.userDetailsDto.mobile = sessionStorage.getItem('happyKidMobile')
    }

    viewDetail(): void {
        this.showDetails = true;
    }

    pleaseOrder(): void {
        let orderDetailAr = [];
        for (let data1 = 0; this.itemCartAr.length > data1; data1++) {
            let product = {
                name: this.itemCartAr[data1].name,
                id: this.itemCartAr[data1].id,
                description: null,
                qtyOnHand: null,
                unitPrice: this.itemCartAr[data1].price,
                create_user_id: null,
                statusId: null,
                product_category: null,
                productImageList: null
            }
            let orderDetail = {
                orderDetailId: null,
                itemId: null,
                product: product,
                qty: this.itemCartAr[data1].qty,
                amount: this.itemCartAr[data1].unitPrice,
            }
            orderDetailAr.push(orderDetail);

        }
        let customer = {
            customerId: sessionStorage.getItem('happyKidUserId')
        }

        console.log(this.userDetailsDto);
        let order = {
            orderDetail: orderDetailAr,
            amount: this.totalAmout,
            orderId: null,
            date: null,
            customer: customer,
            status: null,
            addressLine1: this.userDetailsDto.addressLine1,
            addressLine2: this.userDetailsDto.addressLine2,
            addressLine3: this.userDetailsDto.addressLine3,
            mobile: this.userDetailsDto.mobile,
            email: sessionStorage.getItem('happyKidEmail')
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
                        this.showDetails = false;
                    },
                    error => {
                        console.log("error")
                    }
                );
            }
        })

    }


}
