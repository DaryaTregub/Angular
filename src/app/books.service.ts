import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  books: Books[] = [
    {
      title: "Оно",
      author: "Кинг"
    },
    {
      title: "Дюна",
      author: "Герберт"
    }    

  ]

  create_book = {
    title: null,
    author: null
  }

  AddBooks() {
    this.books.push({
      title: this.create_book.title,
      author: this.create_book.author,
    });
  }

}
