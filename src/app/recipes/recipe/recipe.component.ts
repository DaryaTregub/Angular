import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LikePosts } from 'src/app/interfaces/like-posts';
import { RandomPipe } from 'src/app/pipes/random.pipe';
import { Store } from '@ngxs/store';
import { LikesState } from 'src/app/store/likes.state';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  [x: string]: any;

  constructor(
    public mainServ: MainService,
    private routes: ActivatedRoute,
    private store: Store
  ) { }

  user_comment!: string


  ngOnInit() {
    this.routes.data.subscribe(
      {
        next: (response: any) => {
          this.mainServ.post = (response[0]);
          console.log(this.mainServ.post)
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
  }

  completeStep(i: number) {
    this.mainServ.post.cookingSteps[i].check = !this.mainServ.post.cookingSteps[i].check;

  }

  checkLike(id: string) {
    const post_id = this.mainServ.posts_list.findIndex(el => el.id === id);
    this.mainServ.posts_list[post_id].like = !this.mainServ.posts_list[post_id].like;
  }

  postComment() {
    if (this.user_comment) {
      this.mainServ.text_comment = this.user_comment;
      this.mainServ.postUserComment();
      this.user_comment = ''
    }
  }
}
