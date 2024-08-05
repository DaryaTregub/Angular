import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { Post } from '../interfaces/post';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngxs/store';
import { RandomArr } from '../others/random-arr';
import { LikePosts } from '../interfaces/like-posts';

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


  getPost( i:string) {
    this.responceServ.post_uuid = i;
    const id = this.posts_list.findIndex(el=> el.id===i);
    this.router.navigateByUrl(`/recipes/${i}`);
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

  
}
