import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthUpdate } from '../store/model/auth.model';
import { AuthState } from '../store/auth.state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private store: Store,
    private router: Router
  ) { }
  title: string = 'Foodie'
  username!: string | null
  menu: boolean = false;
  admin_btn: boolean = false;
  toExit() {
    this.store.dispatch(
      new AuthUpdate(
        {
          id: null,
          expiresIn: null,
          jwtToken: null,
          username: null,
          role: null,
          avatar: null,
          firstName: null,
          lastName: null,
          middleName: null
        }
      )
    )
   this.menu = false;
   this.admin_btn =false;
   
    this.router.navigateByUrl('/');
  };

  getUsername() {
    this.username = this.store.selectSnapshot(AuthState.getUsername);
  }
}
