import {Component, OnInit} from '@angular/core';
import {UserDetailsDto} from "../../modal/UserDetailsDto";
import {ApiService} from "../../service/api.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

    userDetailDto: UserDetailsDto;

    constructor(private apiService: ApiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.userDetailDto = new UserDetailsDto();
    }

    createUser(): void {
        console.log(this.userDetailDto);
        this.apiService.createUser(this.userDetailDto).subscribe(res => {
                if (res) {
                    Swal.fire('Success!', 'User created successful');
                    this.router.navigateByUrl('/login');
                }
            }
        );
    }
}
