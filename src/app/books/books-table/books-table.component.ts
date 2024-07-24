import { Component } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent {
constructor(public booksServ: BooksService){}
}
