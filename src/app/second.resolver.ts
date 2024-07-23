import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { ResponseService } from './response.service';




@Injectable({
  providedIn: 'root'
})
export class SecondResolver implements Resolve<any> {
  constructor(private responseServ: ResponseService,
    private router: Router
    ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {    
      return this.responseServ.getPostId().pipe(
        tap(
            (res: any) => of(res),
            (err: any) => {                
                return  this.router.navigate(['**']);
            }
        )
    );
 
     
  }
}
