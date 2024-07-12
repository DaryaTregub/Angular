import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  details: any
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.details = history.state.data;    
     console.log(this.activeRouter.snapshot.params); //параметры маршрут
  }

}
