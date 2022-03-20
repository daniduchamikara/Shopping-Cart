import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

    constructor(private _router: Router, private service: ApiService) {

    }

    showSlider = false;
    catList = null;

    @Input()
    public itemCount = null;
    name = null;
    itemCout = 0;
    searchVal = '';
    selectVal = '0';

    ngOnInit(): void {
        if (!sessionStorage.getItem('happyKidUserId')) {
            this._router.navigate(['/login']);
        }
        this.name = sessionStorage.getItem('happyKidUsername');
        this.getItemCat();
    }

    updateItemCout() {
        console.log(this.itemCout);
        this.itemCout = this.itemCout + 1;
        console.log(this.itemCout);
    }

    logout() {
        sessionStorage.removeItem('happyKidUserId');
        sessionStorage.removeItem('happyKidUsername');
        sessionStorage.removeItem('happyKidUserRoleByRoleId');
        this._router.navigateByUrl('/login');
    }

    getItemCat(): void {
        this.service.getCatList().subscribe(
            res => {
                this.catList = res ? res : null;
                console.log(this.catList);
            },
            error => {

            }
        );
    }

    onChange(event: any): void {
        if (event.target.value != '0') {
            this.service.searchCat(event.target.value, this.searchVal).subscribe(
                res => {
                    this.catList = res ? res : null;
                    console.log(this.catList);
                },
                error => {

                }
            );
        }
    }

    searchCategory(): void {
        // if (this.selectVal == '0')
        //     this.selectVal = null;
        this.service.searchCat(this.selectVal, this.searchVal).subscribe(
            res => {
                this.catList = res ? res : null;
                console.log(this.catList);
                this.selectVal = '0';
            },
            error => {

            }
        );
    }
}
