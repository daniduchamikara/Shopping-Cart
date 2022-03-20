import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ApiService} from '../service/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        // public formBuilder: FormBuilder,
        public router: Router, public apiService: ApiService,
    ) {
    }

    public email;
    public password;

    ngOnInit() {
    }

    login() {
        const data = {
            email: this.email,
            password: this.password,
        };
        this.apiService.login(data).subscribe(
            res => {
                console.log(res);
                if (res && res.userId) {
                    sessionStorage.setItem('happyKidUserId', res.userId);
                    sessionStorage.setItem('happyKidUsername', res.username);
                    sessionStorage.setItem('happyKidAddress1', res.addressLine1);
                    sessionStorage.setItem('happyKidAddress2', res.addressLine2);
                    sessionStorage.setItem('happyKidAddress3', res.addressLine3);
                    sessionStorage.setItem('happyKidMobile', res.mobile);
                    sessionStorage.setItem('happyKidEmail', res.email);
                    this.router.navigateByUrl('/shop');
                } else {
                    Swal.fire('Error!', 'Invalid email or password');
                }
            },
            error => {
                Swal.fire('Error!', error.message);
            }
        );
    }

    register(): void {
        this.router.navigateByUrl('/register');
    }

    logout(): void {
        this.router.navigate(['/login']);
    }
}
