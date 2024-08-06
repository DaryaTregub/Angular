import { Component } from '@angular/core';
import { MainService } from '../servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../servises/app.service';
import { Store } from '@ngxs/store';
import { LikesState } from '../store/likes.state';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    public mainServ: MainService,
    private routes: ActivatedRoute,
    public appServ: AppService,
    private store: Store
  ) { }

  //TODO лайки,уведомления, верстка, форма уведомленияб метатеги, сделать пайпу, добаляющую слово минут и иконку с вилкой-ложкой
  likes = this.store.selectSnapshot(LikesState.getLikes)
  ngOnInit() {
    this.routes.data.subscribe(
      {
        next: (response: any) => {
          this.mainServ.posts_list = (response[0]);
          console.log(this.mainServ.posts_list)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      })

    this.appServ.getUsername();

    this.store.select(LikesState.getLikes).subscribe({
      next: (value) => {
        console.log(value)
        this.mainServ.likes = value;
        this.mainServ.getLikes();
      }
    })
    // if (this.mainServ.likes) {
    //   this.mainServ.likes = this.likes
    //   this.mainServ.getLikes();
    // }
  }

}
