import { Component } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  constructor(public bookServ: BooksService) {}
}
