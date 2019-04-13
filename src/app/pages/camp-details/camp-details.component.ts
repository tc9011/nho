import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

interface IDetail {
  createdAt: string;
  description: string;
  id: number;
  image_url: string;
  name: string;
  updatedAt: string;
  submitted: boolean;
}

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.scss'],
})
export class CampDetailsComponent implements OnInit {
  campDetail: IDetail;
  id: string;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
  ) {
    this.campDetail = {
      createdAt: '',
      description: '',
      id: 0,
      image_url: '',
      name: '',
      updatedAt: '',
      submitted: false,
    };
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.httpService.getData(`/camp/${this.id}`).subscribe(
      res => {
        this.campDetail = res;
      }
    );
  }

  submit() {
    this.httpService.postData(`/camp/${this.id}/submit`, {}).subscribe(
      () => {
        this.message.success('提交成功');
        this.router.navigate(['/campList']);
      },
    );
  }
}
