import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { StorageService } from '../../core/storage.service';
import { Router } from '@angular/router';

interface IUser {
  user: string;
  pass: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData: IUser;

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
  ) {
    this.userData = {
      user: '',
      pass: '',
    };
  }

  ngOnInit(): void {

  }

  submitForm(): void {
    this.httpService.postData('/login', this.userData).subscribe(
      res => {
        if (res) {
          this.storageService.setSessionStorage('token', res.token);
          this.router.navigate(['/campList']);
        }
      },
      error => {

      },
    );
  }
}
