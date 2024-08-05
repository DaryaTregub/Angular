import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.routes.data.subscribe(
      {
        next: (response: any) => {
          this.mainServ.post = (response[0]);
          console.log(this.mainServ.post)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      })
  }
}
