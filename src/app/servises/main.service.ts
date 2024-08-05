import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, TitleStrategy } from '@angular/router';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { Post } from '../interfaces/post';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngxs/store';
import { RandomArr } from '../others/random-arr';
import { LikePosts } from '../interfaces/like-posts';
import { HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router,
    private routes: ActivatedRoute,
    private responceServ: ResponseService,
    private store: Store,
    private randomArr: RandomArr,

  ) { }

  posts_list!: LikePosts[];
  post_id!: number
  post!: Post
  text_comment: any
  result!: LikePosts[];
  clear_area = false
  

  getPost(i: string) {
    this.responceServ.post_uuid = i;
    const id = this.posts_list.findIndex(el => el.id === i);
    this.router.navigateByUrl(`/recipes/${id}`);
  }

  getUser() {
    const res = this.store.selectSnapshot(AuthState.getAuth)
    console.log(res)
  }

  createRandomArr() {
    this.randomArr.initial_arr = this.posts_list;
    const random_arr = this.randomArr.createRandomArr();
    return random_arr;
  }

  postUserComment() {
    console.log(this.post.id)
    this.responceServ.text_comment = this.text_comment;
    this.responceServ.postComment().subscribe(
      {
        next: (response: any) => {
          this.result = (response[0]);
          console.log(this.result)
          if (!this.result) {
            this.responceServ.post_uuid = this.post.id;
            this.responceServ.getPost().subscribe({
              next: (response: any) => {
                this.post = response;             
              },
              error: (err: HttpErrorResponse) => {
                console.log(err.message)
              }
            })
          }

        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      })

  }

  checkLike(id: string) {
    const post_id = this.posts_list.findIndex(el => el.id === id);
    this.posts_list[post_id].like = !this.posts_list[post_id].like;
  }


}
