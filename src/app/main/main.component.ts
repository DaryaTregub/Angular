import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Главная страница'
 
  item_arr = [
    {
      id: 1,
      name:'Товар 1',
      details: 'детали',
      list: 'список'
    },
    {
      id: 2,
      name:'Товар 2',
      details: 'детали',
      list: 'список'
    },
    {
      id: 3,
      name:'Товар 3',
      details: 'детали',
      list: 'список'
    },
    {
      id: 4,
      name:'Товар 4',
      details: 'детали',
      list: 'список'
    },
    {
      id: 5,
      name:'Товар 5',
      details: 'детали',
      list: 'список'
    }
  ]
 
}
