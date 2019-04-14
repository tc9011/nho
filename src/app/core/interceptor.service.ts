import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,
              private storageService: StorageService) {
  }

  get msg(): NzMessageService {
    return this.injector.get(NzMessageService);
  }

  // TODO 删除
  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  // TODO 删除注释
  private handleData(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    if (event.status === 200) {
      if (event instanceof HttpResponse) {
        const body: any = event.body;
        if (body && body.status !== 'OK') {
          this.msg.error(body.error);
          // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
          // this.http.get('/').subscribe() 并不会触发
          return throwError({});
        } else {
          // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
          return of(new HttpResponse(Object.assign(event, {body: body.data})));
          // 或者依然保持完整的格式
          // return of(event);
        }
      }
    } else {
      if (event instanceof HttpErrorResponse) {
        console.warn(
          '未可知错误，大部分是由于后端不支持CORS或无效配置引起',
          event,
        );
        this.msg.error(event.error);
      }
    }
    return of(event);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<| HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>> {
    const url = req.url;
    const token = this.storageService.getSessionStorage('token');
    let newReq = req.clone({
      url,
    });
    if (token && token) {
      newReq = newReq.clone({
        setHeaders: {
          'Access-Token': `${token}`,
        },
      });
    }
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
