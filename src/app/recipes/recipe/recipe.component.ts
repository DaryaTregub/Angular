import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LikePosts } from 'src/app/interfaces/like-posts';


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
  ) { }
  random_arr!: LikePosts[]
  like_recipe_arr!: LikePosts[]
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
    this.like_recipe_arr = this.mainServ.createRandomArr().slice(0, 4);
    this.random_arr = this.mainServ.createRandomArr().slice(0, 3);
  }

  completeStep(i: number) {
    this.mainServ.post.cookingSteps[i].check = !this.mainServ.post.cookingSteps[i].check;
  }

  checkLike(id: number) {
    this.like_recipe_arr[id].like = !this.like_recipe_arr[id].like;
  }
  postComment() {
    if (this.user_comment) {
      this.mainServ.user_comment = {
        "text": `${this.user_comment}`
      }
      this.mainServ.postUserComment()
    }
  }
}
