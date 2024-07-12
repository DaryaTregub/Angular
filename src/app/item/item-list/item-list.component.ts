import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) { }
  list: any

  ngOnInit() {
    this.list = history.state.data;  
    console.log(this.activeRouter.snapshot.queryParams);
  }


}
