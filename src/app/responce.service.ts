import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponceService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  post_id!: number

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(this.postsUrl);
  }

  getPost() {
    return this.http.get(this.postsUrl + `/${this.post_id}`);
  }
}
