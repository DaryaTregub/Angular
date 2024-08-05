import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/servises/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(
    private usersServ: UsersService,
    private routes: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.routes.data.subscribe(
      {
        next: (response: any) => {
          console.log(response)
          this.usersServ.user = (response[0]);
          console.log(this.usersServ.user)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      })
  }
}
