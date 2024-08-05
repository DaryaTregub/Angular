import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { ResponseService } from './response.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private responseServ: ResponseService) { }

  users_list: Users[] = []
  user!:[]

  getUser(i: number) {
    this.responseServ.user_uuid = this.users_list[i].id;
  }
}
