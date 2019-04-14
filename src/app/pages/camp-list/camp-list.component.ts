import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/storage.service';
import { HttpService } from '../../core/http.service';

@Component({
  selector: 'app-camp-list',
  templateUrl: './camp-list.component.html',
  styleUrls: ['./camp-list.component.scss'],
})
export class CampListComponent implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private httpService: HttpService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.httpService.getData(`/logout`).subscribe(
      () => {
        this.storageService.removeSessionStorage('token');
        this.router.navigate(['/login']);
      },
    );
  }
}
