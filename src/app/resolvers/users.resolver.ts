import { Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ResponseService } from '../servises/response.service';
import { UsersService } from '../servises/users.service';

@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve <boolean> {
  constructor(
    private responceServ: ResponseService,
    private router: Router,
    private usersServ: UsersService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.responceServ.getUsers().pipe(
      tap(
        (res: any) => of(res),
        (err: any) => {
          return this.router.navigate(['error']);
  })
  );
}
}
