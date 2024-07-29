import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private http: HttpClient,
  ) { }
  url = 'https://evo-academy.wckz.dev'
  registration = '/api/cooking-blog/users/registration'

  // https://evo-academy.wckz.dev/api/cooking-blog/users/registration:

  postRegistration(data: {}) {
    return this.http.post(this.url + this.registration, data)
  }

}
