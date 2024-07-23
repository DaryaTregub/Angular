import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public responseServe: ResponseService) { }

  ngOnInit() {
  }

}
