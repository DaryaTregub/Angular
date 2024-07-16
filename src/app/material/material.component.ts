import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],

})
export class MaterialComponent implements OnInit {

  constructor(public materialServ: MaterialService ) { }

  ngOnInit() {
  }
  section_title = 'Material'
}
