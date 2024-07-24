import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  id!: number
  result: {
    completed: false;
    id: number;
    title: string;
    userId: number;
  } | undefined 
  error!: string
  

}
