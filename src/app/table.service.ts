import { Injectable } from '@angular/core';
import { Table } from './table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  table_arr: Table[] = [
    {
      name: "Apple",
      count: 5,
      price: 10
    },
    {
      name: "Eggs",
      count: 10,
      price: 15
    },
    {
      name: "Cat",
      count: 1,
      price: 0
    },
  ]
}
