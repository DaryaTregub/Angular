import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Registration } from '../interfaces/registration';
import { Autorization } from '../interfaces/autorization';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }
  url = 'https://evo-academy.wckz.dev'
  registration = '/api/cooking-blog/users/registration'
  autorization = '/api/cooking-blog/users/sign'
  allposts = `/api/cooking-blog/posts`
  post_uuid!: string
  users = '/api/cooking-blog/users'
  user_uuid!: string
 
 

  getToken() {
    return this.store.selectSnapshot(AuthState.getToken);
  }

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

  getPost() {
    return this.http.get(this.url + this.allposts + '/' + this.post_uuid);
  }

  getUsers() {
    const token = this.getToken();
    const post_headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.url + this.users,
      { headers: post_headers });
  }
  getUser() {
    const token = this.getToken();
    const post_headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);   
    return this.http.get(this.url + this.users+ `/${this.user_uuid}`,
    { headers: post_headers }
    )
  }
  

}
