import { Injectable } from '@angular/core';
import { PostsList } from './posts-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role: 'user' | 'admin' = 'user';
  posts_list!: PostsList[]
  post: any

  constructor() { }

}
