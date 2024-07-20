import { Component } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  title = 'myApp';
 
constructor(public booksServ: BooksService){}

 
}
