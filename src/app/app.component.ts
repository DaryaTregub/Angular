import { Component } from '@angular/core';
import { ResponseService } from './responce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  constructor( public responseServ: ResponseService) { }
}
