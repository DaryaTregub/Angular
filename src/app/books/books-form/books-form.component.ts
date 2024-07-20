import { Component } from '@angular/core';
import { BooksService } from 'src/app/books.service';


@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent {
  constructor(
    public booksServ: BooksService
  ) { }
}
