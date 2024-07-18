import { Injectable } from '@angular/core';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  responce_arr : Response[]  = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
  ]

}
