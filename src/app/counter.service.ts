import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  counterArray:any[] = [];

  setCounter() {
    return new Observable((observer) => {
      setInterval(() => {
        this.counterArray.push(this.counterArray.length + 1);
        observer.next(this.counterArray);
      }, 2000);
    });
  }

}
