import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksFormComponent } from './books/books-form/books-form.component';
import { BooksTableComponent } from './books/books-table/books-table.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksFormComponent,
    BooksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
   FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
