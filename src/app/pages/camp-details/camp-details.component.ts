import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.scss'],
})
export class CampDetailsComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  get() {
    this.httpService.getData('/detail').subscribe(
      data => {

      },
      error => {

      },
    );
  }
}
