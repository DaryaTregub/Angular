import { Component, OnInit } from '@angular/core';
import { MainService } from '../servises/main.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor(
    public mainServ: MainService,
    private routes: ActivatedRoute,
  ) { }

  title = "Каталог рецептов"

  ngOnInit() {
    this.routes.data.subscribe(
      {
        next: (response: any) => {
          this.mainServ.posts_list = (response[0]);
          console.log(this.mainServ.posts_list)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      })

      //TODO добавить лайки, метатеги
  }
  checkLike(id: number, uuid: string) {
    this.mainServ.posts_list[id].like = !this.mainServ.posts_list[id].like
  }

}
