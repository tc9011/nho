import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.scss'],
})
export class CampDetailsComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getData(`/camp/${id}`).subscribe(
      res => {

      },
      error => {

      },
    );
  }
}
