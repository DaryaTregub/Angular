import { Component, OnInit } from '@angular/core';
import { LikePosts } from 'src/app/interfaces/like-posts';
import { MainService } from 'src/app/servises/main.service';

@Component({
  selector: 'app-main-try',
  templateUrl: './main-try.component.html',
  styleUrls: ['./main-try.component.css']
})
export class MainTryComponent implements OnInit {

  constructor(public mainServ: MainService) { }
  title = "Попробуйте эти вкусные рецепты"
  description = "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"

  ngOnInit() {
 
  }
 

}
