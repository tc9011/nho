import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  prefix: string;

  constructor(private http: HttpClient) {
    this.prefix = '/api/v1';
  }

  public getData(api: string, options = {}): Observable<any> {
    return this.http.get(this.prefix + api);
  }

  public postData(api: string, data: any, options = {}): Observable<any> {
    return this.http.post(this.prefix + api, data);
  }

  public deleteData(api: string, options = {}): Observable<any> {
    return this.http.delete(this.prefix + api);
  }

  public putData(api: string, data: any, options = {}): Observable<any> {
    return this.http.put(this.prefix + api, data);
  }
}
