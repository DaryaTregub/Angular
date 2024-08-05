import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-subscribe',
  templateUrl: './main-subscribe.component.html',
  styleUrls: ['./main-subscribe.component.css']
})
export class MainSubscribeComponent implements OnInit {
  title = 'Хотите получать новые рецепты?'
  description = 'е пропустите ни одного вкусного рецепта! Подпишитесь на нашу рассылку, чтобы получать новые кулинарные идеи и рецепты прямо в свою почту.'
 email!: string
  constructor() { }

  ngOnInit() {
  }

}
