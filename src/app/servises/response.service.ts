import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Registration } from '../interfaces/registration';
import { Autorization } from '../interfaces/autorization';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private http: HttpClient,
  ) { }
  url = 'https://evo-academy.wckz.dev'
  registration = '/api/cooking-blog/users/registration'
  autorization = '/api/cooking-blog/users/sign'
  allposts = `/api/cooking-blog/posts`

  postRegistration(data: Registration) {
    return this.http.post(this.url + this.registration, data)
  }

  postAutorization(data: Autorization) {
    return this.http.post(this.url + this.autorization, data)
  }

  getPosts() {
    const baseParams = new HttpParams().set('filter', '6');
    return this.http.get(this.url + this.allposts, { params: baseParams });
  }

}
