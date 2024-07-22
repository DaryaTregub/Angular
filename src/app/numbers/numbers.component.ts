import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CounterService } from '../counter.service';
import { RandomService } from '../random.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent { 

  constructor(public counterService: CounterService,
    
    ) {}
    inserval$ = interval(2000)
    counterSubs$!: Subscription
  enableStopButton = true;
  enableStartButton = false;
  timer_stop = false;

  getCounter() {
    this.enableStartButton = true;
    this.enableStopButton = false;
    this.counterSubs$ = this.inserval$.subscribe((next)=> {
      this.counterService.counterArray.push(next)
      console.log(this.counterService.counterArray)     
    });
 
   
  }

  stopSubs() {
    this.counterSubs$.unsubscribe();
     this.timer_stop = true;
    this.enableStopButton = true;
    this.enableStartButton = false;
  }
 

}










