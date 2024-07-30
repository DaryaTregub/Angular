import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(
    private mainServ: MainService,
    private routes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routes.data.subscribe((responce: any) => {
      this.mainServ.post = responce[0];
      console.log(this.mainServ.posts_list)     
    })
  }
}
