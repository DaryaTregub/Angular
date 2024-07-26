import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { ResponceService } from './responce.service';




@Injectable({
  providedIn: 'root'
})
export class postsListResolver implements Resolve<any> {
  constructor(private responseServ: ResponceService,
    private router: Router
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {    
      return this.responseServ.getPosts().pipe(
        tap(
            (res: any) => of(res),
            (err: any) => {                
                return  this.router.navigate(['error']);
            }
        )
    );
 
     
  }
}
