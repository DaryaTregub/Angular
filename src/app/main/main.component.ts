import { Component } from '@angular/core';
import { MainService } from '../servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../servises/app.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
   public mainServ: MainService,
    private routes: ActivatedRoute,
    public appServ: AppService
  ) { }

  //TODO лайки,уведомления, верстка, форма уведомленияб метатеги, сделать пайпу, добаляющую слово минут и иконку с вилкой-ложкой

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
      
      this.appServ.getUsername();
  }

}
