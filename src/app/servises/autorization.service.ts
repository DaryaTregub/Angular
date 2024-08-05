import { Injectable } from '@angular/core';
import { Autorization } from '../interfaces/autorization';
import { ResponseService } from './response.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';
import { AuthUpdate } from '../store/model/auth.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  error!: string;
  result: any

  constructor(private responseServ: ResponseService,
    private store: Store,
    private router: Router) { }

  authorizeUser(value: Autorization, fastJwt: boolean) {
    const baseParams = new HttpParams().set('fastJwt', fastJwt);
    this.responseServ.postAutorization(value).subscribe({
      next: (response: any) => {
        this.result = response;
        this.updateAuthState();
        this.router.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message;
        console.log(this.error)
      }
    })

  }

  updateAuthState() {
    console.log(this.result)
    this.store.dispatch(new AuthUpdate({
      id: this.result.id,
      expiresIn: this.result.expiresIn,
      jwtToken: this.result.jwtToken,
      username: this.result.username,
      role: this.result.role,
      avatar: this.result.avatar,
      firstName: this.result.firstName,
      lastName: this.result.lastName,
      middleName: this.result.middleName
    }))
  }


}
