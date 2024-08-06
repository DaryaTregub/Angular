import { Component, OnInit } from '@angular/core';
import { MainService } from '../servises/main.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LikesState } from '../store/likes.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor(
    private store: Store,
    public mainServ: MainService,
    private routes: ActivatedRoute,
  ) { }
  likes = this.store.selectSnapshot(LikesState.getLikes)
  title = "Каталог рецептов"

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
    this.store.select(LikesState.getLikes).subscribe({
      next: (value) => {
        console.log(value)
        this.mainServ.likes = value;
        this.mainServ.getLikes();
      }
    })
    //TODO добавить лайки, метатеги
  }
  checkLike(id: number, uuid: string) {
    this.mainServ.posts_list[id].like = !this.mainServ.posts_list[id].like
  }

}
