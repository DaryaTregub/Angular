import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ResponseService } from '../servises/response.service';
import { MainService } from '../servises/main.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<boolean> {
  constructor(private responceServ: ResponseService,
    private router: Router,
    private mainServ: MainService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.responceServ.getPost().pipe(
      tap(
        (res: any) => of(res),
        (err: any) => {
          return this.router.navigate(['error']);
        })
    );
  }
}
