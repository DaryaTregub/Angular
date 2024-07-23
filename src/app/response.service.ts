import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() {
    return this.http.get(this.postsUrl);
  }

  getComments() {
    const baseParams = new HttpParams().set('postId', '1');
    return this.http.get(this.commentsUrl, { params: baseParams });
  }

  postEmpty() {
    const data = {};
    return this.http.post(this.postsUrl, data);
  }

  getError() {
    const url = this.postsUrl.substring(0, length-1);
    return this.http.get(url);
  }

  getPostsHeaders() {
    const post_headers = new HttpHeaders().set('X-Test', '1')
    return this.http.get(this.postsUrl, {headers: post_headers, responseType: 'text'});
  }
  
  deletePost() {
    const post_path:string = '/1';
    return this.http.delete(this.postsUrl + post_path);
  }

}


