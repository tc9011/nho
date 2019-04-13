import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ip: string;

  constructor(private http: HttpClient) {
    this.ip = '';
  }

  public getData(api: string, options = {}): Observable<any> {
    return this.http.get(this.ip + api);
  }

  public postData(api: string, data: any, options = {}): Observable<any> {
    return this.http.post(this.ip + api, data);
  }

  public deleteData(api: string, options = {}): Observable<any> {
    return this.http.delete(this.ip + api);
  }

  public putData(api: string, data: any, options = {}): Observable<any> {
    return this.http.put(this.ip + api, data);
  }
}
