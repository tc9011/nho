import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { NzMessageService } from 'ng-zorro-antd';

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
  ) {
    this.campList = [];
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.httpService.getData('/camp/list').subscribe(
      res => {
        if (res.status === 'OK') {
          this.campList = res.data;
        }
      },
      error => {
        this.message.error(error);
      },
    );
  }
}
