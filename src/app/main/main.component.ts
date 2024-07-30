import { Component } from '@angular/core';
import { MainService } from '../servises/main.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(
    private mainServ: MainService,
    private routes: ActivatedRoute,
  ) { }

  slider_arr: any = []
  ngOnInit() {
    this.routes.data.subscribe((responce: any) => {
      this.mainServ.posts_list = responce[0];
      console.log(this.mainServ.posts_list)     
    })
  }
  
}
