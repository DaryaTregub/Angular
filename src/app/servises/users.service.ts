import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { ResponseService } from './response.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private responseServ: ResponseService,
    private router: Router) { }

  users_list: Users[] = []
  user!: User;


  getUser(i: number) {
    this.responseServ.user_uuid = this.users_list[i].id;
    this.responseServ.getUser().subscribe(
      {
        next: (response: any) => {
          this.user = response;
          this.router.navigateByUrl(`/admin/users/${i+1}`);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      }
    )

  }
  deleteUser(uuid: string) {
    this.responseServ.user_uuid = uuid;
    this.responseServ.deleteUser().subscribe(
      {
        next: (response: any) => {
          console.log(response)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      }
    )
  }
}
