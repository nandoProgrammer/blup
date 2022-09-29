import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  createUser(data: any):Observable<any> {
    return this.httpClient.post('/create-user', data);
  }

  resetPassword(email: string):Observable<any> {
    return this.httpClient.post('/reset-password', email);
  }
}
