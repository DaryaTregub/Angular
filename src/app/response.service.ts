import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {
 
  constructor(
    private http: HttpClient,
  ) { }
  url_todos: string = ' https://jsonplaceholder.typicode.com/todos'

  getTodos() {
    return this.http.get(this.url_todos);
  }
}
