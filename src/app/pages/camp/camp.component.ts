import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';

interface ICampList {
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
  ) {
    this.campList = [
      {
        id: 1,
        name: 'tc',
      },
    ];
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.httpService.getData('/camp/list').subscribe(
      data => {
        if (data) {
          this.campList = data;
        }
      },
      error => {

      },
    );
  }
}
