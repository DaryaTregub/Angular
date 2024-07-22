import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counterArray:any[] = [];

  setCounter() {
    this.counterArray.push(this.counterArray.length + 1)
      console.log(this.counterArray)
  }

}
