import { Injectable } from '@angular/core';
import { Post } from './post';
import { PostsList } from './posts-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role: 'user' | 'admin' = 'user';
  posts_list!: PostsList[]
  post!: Post 

  constructor() { }

}
