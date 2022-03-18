import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ApiService} from "../service/api.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        // public formBuilder: FormBuilder,
        public _router: Router, public apiService: ApiService,
    ) {
    }

    ngOnInit() {
    }

    public email;
    public password;

    login() {
        const data = {
            email: this.email,
            password: this.password,
        };
        this.apiService.login(data).subscribe(
            res => {
                console.log(res)
                if (res && res.userId) {
                    sessionStorage.setItem('happyKidUserId', res.userId);
                    sessionStorage.setItem('happyKidUsername', res.username);
                    this._router.navigateByUrl('/shop');
                } else {
                    Swal.fire('Error!', 'Invalid email or password');
                }
            },
            error => {
                Swal.fire('Error!', error.message);
            }
        );
    }
}
