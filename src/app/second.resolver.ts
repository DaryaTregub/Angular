import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ResponseService } from './response.service';

@Injectable({
  providedIn: 'root'
})
export class SecondResolver implements Resolve<any> {
  constructor(private responseServ: ResponseService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> { 
    return this.responseServ.getPostId()
  }
}
