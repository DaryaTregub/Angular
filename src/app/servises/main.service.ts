import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Posts } from '../interfaces/posts';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router: Router,
    private routes: ActivatedRoute,) { }

  posts_list: Posts[] = []
  
}
