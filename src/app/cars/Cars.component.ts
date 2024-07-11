import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cars',
  templateUrl: './Cars.component.html',
  styleUrls: ['./Cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title= "Cars"
  arr_cars = [
    {model:'Kia Seltos',
     description:{
      engine:'1.6 L',
      color: 'black',
      year: '2023'
     },
     price: 26434
    },
    {model:'Kia Sportage',
      description:{
       engine:'2.0 L',
       color: 'grey',
       year: '2017'
      },
      price: 23333
     },
     {model:'Kia Rio',
      description:{
       engine:'1.6 L',
       color: 'red',
       year: '2007'
      },
      price: 5463
     },
  ]
}
