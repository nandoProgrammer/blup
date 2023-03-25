import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalStorage } from 'src/app/core/classes/LocalStorage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }

  auth(data: {email: string, password:string}):Observable<{id: string, token: string}> {
    return this.httpClient.post<{id: string, token: string}>('/auth', data)
    .pipe(tap(res => {
      LocalStorage.setItem('tokenBlupr', res.token);
      LocalStorage.setItem('idUser', res.id);
    }));
  }

}
