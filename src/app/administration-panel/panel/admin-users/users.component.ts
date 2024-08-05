import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/servises/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {

  constructor(public usersServ: UsersService,
    private router: Router,
    private routes: ActivatedRoute,) { }

  ngOnInit() {
     this.routes.data.subscribe({
      next: (response: any) => {
        this.usersServ.users_list = (response[0]);
        console.log(this.usersServ.users_list)
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }

  loadUser(i:number) {
    this.usersServ.getUser(i);
    this.router.navigateByUrl(`/admin/users/${i+1}`);
  }
}
