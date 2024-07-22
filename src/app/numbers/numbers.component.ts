import { Component } from '@angular/core';
import { interval, map, pipe } from 'rxjs';
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
    public randomService: RandomService,

  ) { }

  ngOnInit() {
    this.getCounter();
    this.getRandom();
  }

  inserval$ = interval(2000)
  counterSubs$!: Subscription
  randomSubst$!: Subscription
  enableStopButton = true;
  enableStartButton = false;
  randomStopButton = true;
  randomStartButton = false;
  randomArr: string =''


  getCounter() {
    this.enableStartButton = true;
    this.enableStopButton = false;
    this.counterSubs$ = this.inserval$.subscribe(next =>
      this.counterService.setCounter())
  };


  stopSubsCounter() {
    this.counterSubs$.unsubscribe();
    this.enableStopButton = true;
    this.enableStartButton = false;
  }

  getRandom() {
    this.randomStopButton = false;
    this.randomStartButton = true;
    
    // this.randomSubst$ = this.inserval$.subscribe(next =>
    //   this.randomService.setRandom())
    // this.randomSubst$ = this.inserval$.pipe(map(value => `Random Value: ${value}`)}
    this.randomSubst$ = this.inserval$.pipe(map(value =>  {return `Random Value: ${this.randomService.setRandom()}`})).subscribe(next=> this.randomService.bext(next))
  
  }

  stopRandom() {
    this.randomSubst$.unsubscribe();
    this.randomStopButton = true;
    this.randomStartButton = false;
  }

}













