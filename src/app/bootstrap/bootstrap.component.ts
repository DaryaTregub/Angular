import { Component, OnInit } from '@angular/core';
import { BootstrapService } from '../bootstrap.service';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  constructor(public bootstrapServ: BootstrapService) { }

  ngOnInit() {
  }

}
