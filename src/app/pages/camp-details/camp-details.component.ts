import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { ActivatedRoute } from '@angular/router';

interface IDetail {
  createdAt: string;
  description: string;
  id: number;
  image_url: string;
  name: string;
  updatedAt: string;
}

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.scss'],
})
export class CampDetailsComponent implements OnInit {
  campDetail: IDetail;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
  ) {
    this.campDetail = {
      createdAt: '',
      description: '',
      id: 0,
      image_url: '',
      name: '',
      updatedAt: '',
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getData(`/camp/${id}`).subscribe(
      res => {
        this.campDetail = res;
      },
      error => {

      },
    );
  }
}
