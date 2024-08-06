import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';
import { MainService } from 'src/app/servises/main.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Post } from 'src/app/interfaces/post';
import { Likes } from 'src/app/others/likes';
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
    private createLikes: Likes) { }
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

  checkLike(id: number, uuid: string) {
    // this.result[id].like = !this.result[id].like
    // const like = this.result[id].like
    // const arr = this.mainServ.posts_list
    // let el_id = arr.findIndex((arr: { id: string; }) => arr.id === uuid)
    // console.log(el_id)
    // const arr2 = this.mainServ.like_arr
    // // this.mainServ.like_posts_arr[el_id].like = !this.mainServ.like_posts_arr[el_id].like

    // // this.createLikes.posts_arr = this.mainServ.posts_list
    // // this.createLikes.likes_arr = this.mainServ.like_arr
    // // this.createLikes.id = uuid;
    // // this.createLikes.like = this.result[id].like 
    // // this.createLikes.checkLike()
    // //   this.result[id].like = !this.result[id].like
    // let search_uuid = this.result[id].id
    // const arr = this.mainServ.like_arr
    // let el_id = arr.findIndex((arr: { id: string; }) => arr.id === search_uuid)
    // if (arr.length > 0 && el_id >= 0) {
    //   arr[el_id].like = this.result[id].like;
    // } else {
    //   const item = {
    //     id: this.result[id].id,
    //     like: this.result[id].like
    //   }
    //   arr2.push(item)
    //   //   }
    //   this.store.dispatch(new LikesUpdate({
    //     likes_arr: arr2
    //   }))
    // }
  }
}
