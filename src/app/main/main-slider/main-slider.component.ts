import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
  
  constructor(
    public mainServ: MainService,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit() {
    
  }
 getPost(i:number) {
  console.log(i)
 }
}







