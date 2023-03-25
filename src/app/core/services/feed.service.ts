import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FeedService {

  constructor(private httpClient: HttpClient) { }

  getPosts(idUser: string):Observable<any> {
    return this.httpClient.get<any>(`/get-posts/${idUser}`);
  }

  getPostForId(idPost: string):Observable<any> {
    return this.httpClient.get<any>(`/get-post/${idPost}`);
  }

  createPost(idUser: string, data: any):Observable<any> {
    return this.httpClient.post<any>(`/create-post/${idUser}`, data);
  }

  updatePost(idPost: string, data: any):Observable<any> {
    return this.httpClient.put<any>(`/update-post/${idPost}`, data);
  }
  
  getComment(idPost: string):Observable<any> {
    return this.httpClient.get<any>(`/get-comments/${idPost}`);
  }

  createComment(idUser: string, idPost: string, data: any):Observable<any> {
    return this.httpClient.post<any>(`/create-comment/${idUser}/${idPost}`, data);
  }


}
