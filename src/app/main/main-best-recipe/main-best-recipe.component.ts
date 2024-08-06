import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';
import { MainService } from 'src/app/servises/main.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Post } from 'src/app/interfaces/post';
import { LikePosts } from 'src/app/interfaces/like-posts';


@Component({
  selector: 'app-main-best-recipe',
  templateUrl: './main-best-recipe.component.html',
  styleUrls: ['./main-best-recipe.component.css'], 
})
export class MainBestRecipeComponent implements OnInit {


  constructor(
    public mainServ: MainService,
    private router: Router,
    private store: Store,
   ) { }
  result!: LikePosts[]
  btn_add: boolean = true
  random_arr!: LikePosts[]
  likes: any
  count!: number

  ngOnInit() {
    this.count = 3
  }

  addRecipeList() {
    this.count = 6;
    this.btn_add = false;
  }
}
