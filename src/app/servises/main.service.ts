import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { Post } from '../interfaces/post';
import { AuthState } from '../store/auth.state';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router,
    private routes: ActivatedRoute,
    private responceServ: ResponseService,
    private store: Store,

  ) { }

  posts_list: Posts[] = []
  post_id!: number
  post!: Post


  getPost(i: number) {
    this.post_id = i
    this.responceServ.post_uuid = this.posts_list[this.post_id].id
    i += 1;
    this.router.navigateByUrl(`/recipes/${i}`);
  }

  getUser() {
    const res = this.store.selectSnapshot(AuthState.getAuth)
    console.log(res)
  }
}
