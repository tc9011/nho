import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../core/storage.service';

export interface ICampList {
  id: number;
  name: string;
}

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss'],
})
export class CampComponent implements OnInit {
  campList: Array<ICampList>;

  constructor(
    public httpService: HttpService,
    private message: NzMessageService,
    private storageService: StorageService,
  ) {
    this.campList = [];
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const token = JSON.parse(this.storageService.getLocalStorage('token'));
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token,
      }),
    };
    this.httpService.getData('/camp/list', httpOptions).subscribe(
      res => {
        this.campList = res;
      },
      error => {
        this.message.error(error);
      },
    );
  }
}
