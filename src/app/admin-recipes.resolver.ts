import { Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ResponseService } from './servises/response.service';


@Injectable({
  providedIn: 'root'
})
export class AdminRecipesResolver implements Resolve <boolean>  {
  constructor(
    private responceServ: ResponseService,
    private router: Router,
 
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.responceServ.getPosts().pipe(
      tap(
        (res: any) => of(res),
        (err: any) => {
          return this.router.navigate(['error']);
  })
  )
}
}