import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../service/api.service';
import {FullLayoutComponent} from "../full-layout/full-layout.component";
import Swal from "sweetalert2";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    productList = null;



    @ViewChild(FullLayoutComponent) public fullLayoutComponent: FullLayoutComponent;

    constructor(private service: ApiService) {
    }

    ngOnInit(): void {
        this.getProductList();
        let cart = [];
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    getProductList() {
        this.service.getProductList().subscribe(
            res => {
                this.productList = res ? res : null;
            },
            error => {

            }
        );
    }

    itemCout = 0;

    addToCart(data) {
        let cart = [];
        cart = JSON.parse(sessionStorage.getItem('cart'));
        console.log(cart);
        let isAddCart = 0;
        if (cart.length > 0) {
            for (let data1 = 0; cart.length > data1; data1++) {
                if (cart[data1].qty != null && data.id == cart[data1].id) {
                    cart[data1].qty += 1;
                    isAddCart = 1;
                    this.itemCout += 1;
                }
            }
        }
        if (isAddCart == 0) {
            data.qty = 1;
            cart.push(data);
            this.itemCout += 1;
        }
        Swal.fire(
            'Added To The Cart!',
            '',
            'success'
        );
        sessionStorage.setItem('cart', JSON.stringify(cart));
        console.log(sessionStorage.getItem('cart'));
    }



}
