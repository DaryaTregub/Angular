import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  constructor(public responseServe: ResponseService,
    private routes: ActivatedRoute) { }
  result :any
  ngOnInit() {
    this.routes.data.subscribe((response: any) => {
      this.result= response[0];
      console.log(this.result)

    })
    
  }

}
