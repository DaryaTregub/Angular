import { ResolveFn } from '@angular/router';


import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { ResponceService } from './responce.service';


export const postResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})
export class postsResolver implements Resolve<any> {
  constructor(private responseServ: ResponceService,
    private router: Router
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {    
      return this.responseServ.getPost().pipe(
        tap(
            (res: any) => of(res),
            (err: any) => {                
                return  this.router.navigate(['error']);
            }
        )
    );
 
     
  }
}