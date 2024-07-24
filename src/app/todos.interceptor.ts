import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodosService } from './todos.service';

@Injectable()
export class TodosInterceptor implements HttpInterceptor {

  constructor( public todosServ: TodosService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const id = this.todosServ.id;
    const new_url = request.url + `/${id}`;
    request = request.clone({ url: new_url });
    return next.handle(request);
  }
}
