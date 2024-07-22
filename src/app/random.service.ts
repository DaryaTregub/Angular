import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomArray: any[] = [];

  setRandom() {
    const min: number = 0
    const max: number = 1000
    this.randomArray.push(Math.floor(Math.random() * (max - min) + min));
  }
}
