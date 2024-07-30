import { Injectable } from '@angular/core';
import { Autorization } from '../interfaces/autorization';
import { ResponseService } from './response.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  error!: string;
  result: any

  constructor(private responseServ: ResponseService) { }

  authorizeUser(value: Autorization, fastJwt: boolean) {
    const baseParams = new HttpParams().set('fastJwt', fastJwt);
    this.responseServ.postAutorization(value).subscribe({
      next: (response: any) => {
        this.result = response;
        console.log(this.result)
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message;
        console.log(this.error)
      }
    })
  
  }


}
