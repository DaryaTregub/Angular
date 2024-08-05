import { Component, OnInit } from '@angular/core';
import { MainService } from '../servises/main.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(
    public mainServ: MainService
  ) { }

  ngOnInit() {
    console.log(this.mainServ.posts_list)
  }

}
