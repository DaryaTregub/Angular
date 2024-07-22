import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomArray: any[] = [];
  numRandom!: number

  setRandom() {
    const min: number = 0
    const max: number = 1000
    this.numRandom = Math.floor(Math.random() * (max - min) + min)
    return this.numRandom
    // this.randomArray.push(Math.floor(Math.random() * (max - min) + min));
  }
  bext(next:any) {
    console.log(next)
    this.randomArray.push(next)

  }
}
