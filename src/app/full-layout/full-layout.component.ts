import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  showSlider = false;

  @Input()
  public itemCount = null;

  constructor(private _router: Router) {

  }
  name = null;
  ngOnInit(): void {
    if(!sessionStorage.getItem('happyKidUserId')){
      this._router.navigate(['/login']);
    }
    this.name = sessionStorage.getItem("happyKidUsername");
  }
  itemCout = 0;

  updateItemCout(){
    console.log(this.itemCout);
    this.itemCout = this.itemCout + 1;
    console.log(this.itemCout);
  }

  logout(){
    sessionStorage.removeItem("happyKidUserId");
    sessionStorage.removeItem("happyKidUsername");
    sessionStorage.removeItem("happyKidUserRoleByRoleId");
    this._router.navigateByUrl("/login");
  }
}
