import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/registration';
import { ResponseService } from './response.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  error!: string;
  result: any

  constructor(private responseServ: ResponseService,
    private router:Router) { }

  registrateUser(value: Registration) {
    this.responseServ.postRegistration(value).subscribe(
      {
        next: (response: any) => {
          this.result = response;
          console.log(this.result)
          this.router.navigateByUrl('/')
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.message;
          console.log(this.error)
        }
      }
    )
  }
}

