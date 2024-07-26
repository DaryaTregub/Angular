import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'myApp';
  logo = "Главная страница"
  result = []
  constructor(
    public dataServ: DataService,
   
  ) { }
  ngOnInit() {
  }

  

}
