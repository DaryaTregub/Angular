import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomArray:any[] = [];
  min = 0
  max= 1000
  inserval$ = interval(2000)

  setCounter(min:number, max:number) {
    return new Observable((observer) => {          
      this.randomArray.push( Math.random() * (max - min) + min)  
        observer.next(this.randomArray);  
    });
  }
}
