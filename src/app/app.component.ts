import { Component } from '@angular/core';
import { ResponseService } from './response.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'myApp';

  constructor(private responseServ: ResponseService) { }
  result: any
  error!: string


  getAllTodos() {
    this.responseServ.getTodos().subscribe(
      {
        next: (response: any) => {
          this.result = response;
          console.log(this.result)
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.message;
          console.log(this.error)
        }
      }
    )
  }

  

}
