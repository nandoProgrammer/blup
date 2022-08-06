import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from '../classes/LocalStorage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = LocalStorage.getItem('token');
    
    if(token !== null){
      const authRequest = request.clone({setHeaders: {"Authorization": `BearerToken ${token}`}});
      return next.handle(authRequest);
    }

    return next.handle(request)
  }
}
