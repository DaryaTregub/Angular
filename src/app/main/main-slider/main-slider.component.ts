import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/servises/main.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
  // post_arr: {} = this.mainServ.posts_list
  constructor(
    public mainServ: MainService,
    config: NgbCarouselConfig
  ) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'ng-carousel-demo';

  images = [
    { title: 'First Slide', short: 'First Slide Short', src: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYxOS8zcHNYbk0uanBlZw.webp" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDcxMy8zNmphTUEuanBlZw.webp" },
    { title: 'Third Slide', short: 'Third Slide Short', src: "https://cdn.food.ru/unsigned/fit/1080/810/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI0MDYyMC80VWtWV1guanBlZw.webp" }
  ];

}
// getPosts:any
// ngOnInit() {
//   this.getPosts = this.mainServ.posts_list
//   console.log(this.getPosts);
//   //Todo ngs bootstrap slider
// }






