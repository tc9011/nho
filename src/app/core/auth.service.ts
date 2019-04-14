import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { IUser } from '../pages/login/login.component';


@Injectable()
export class AuthService {
  public loggedIn = false;

  constructor(private router: Router,
              private httpService: HttpService,
              private injector: Injector,
              private storageService: StorageService,
              private msg: NzMessageService,
  ) {
    const token = this.storageService.getSessionStorage('token');
    if (token) {
      this.loggedIn = true;
    }
  }

  login(loginInfo: IUser): Observable<boolean> {
    return this.httpService.postData('/login', loginInfo).pipe(map(
      res => {
        if (res) {
          this.storageService.setSessionStorage('token', res.token);
          this.loggedIn = true;
          this.msg.success('登录成功!');
        }
        return this.loggedIn;
      },
      ),
    );
  }
}
