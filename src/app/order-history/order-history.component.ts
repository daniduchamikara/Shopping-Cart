import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrdersAr = null;

  getAllOrders() {
    this.service.getAllOrders().subscribe(
        res => {
          this.getAllOrdersAr = res;
          console.log(this.getAllOrdersAr);
        },
        error => {

        }
    );
  }

}
