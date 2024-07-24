import { Component } from '@angular/core';
import { ResponseService } from './response.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'myApp';

  constructor(
    private responseServ: ResponseService,
    public todosServ: TodosService
  ) { }


  getAllTodos() {
    this.responseServ.getTodos().subscribe(
      {
        next: (response: any) => {
          console.log(response)
          this.todosServ.result = response;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
          this.todosServ.result = err.message;
        }
      }
    )
  }

}
