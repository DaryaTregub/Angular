import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, TitleStrategy } from '@angular/router';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { Post } from '../interfaces/post';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngxs/store';
import { LikePosts } from '../interfaces/like-posts';
import { HttpErrorResponse } from '@angular/common/http'
import { LikesUpdate } from '../store/model/likes';
import { LikesState } from '../store/likes.state';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router,
    private routes: ActivatedRoute,
    private responceServ: ResponseService,
    private store: Store,

  ) { }

  posts_list!: LikePosts[];
  post_id!: number
  post!: Post
  text_comment: any
  result!: LikePosts[];
  clear_area = false
  likes: string[] = []

  getPost(i: string) {
    this.responceServ.post_uuid = i;
    const id = this.posts_list.findIndex(el => el.id === i);
    this.router.navigateByUrl(`/recipes/${id}`);
  }

  getUser() {
    const res = this.store.selectSnapshot(AuthState.getAuth)
    console.log(res)
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
    console.log(this.posts_list[post_id].like)
    if (this.posts_list[post_id].like) {
      this.likes.push(id)
      this.store.dispatch(new LikesUpdate(this.likes))
      this.likes = this.store.selectSnapshot(LikesState.getLikes)
    } else {
      const like_id = this.likes.findIndex(el => id === id);
      this.likes.splice(like_id, 1)
      this.store.dispatch(new LikesUpdate(this.likes))
      this.likes = this.store.selectSnapshot(LikesState.getLikes)
    }  
  }
  getLikes() {
    if (this.likes.length > 0) {
      this.likes.forEach((element: string) => {
        const id = this.posts_list.findIndex(el => el.id === element);
        this.posts_list[id].like = true;
      });
    }
  }


}
