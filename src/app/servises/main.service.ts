import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router,
    private routes: ActivatedRoute,
    private responceServ: ResponseService
  ) { }

  posts_list: Posts[] = []
  postId!: any
  post: any

}
