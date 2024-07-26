import { Component, OnInit } from '@angular/core';
import { ResponceService } from '../responce.service';
import { DataService } from '../data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(
    public responseServe: ResponceService,
    private routes: ActivatedRoute,
    public dataServ: DataService,
    private router: Router,
    private respServ: ResponceService

  ) { }

  ngOnInit() {
    this.routes.data.subscribe((response: any) => {
      this.dataServ.posts_list = response[0];
      console.log(this.dataServ.posts_list)
    })
  }
  // getPost(value: number) {
  //   console.log(`${this.respServ.postsUrl}/${value}`)

  // }

}
