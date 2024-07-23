import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  error!: string;

  constructor(
    private responseServ: ResponseService,

  ) { }
  result = []

  ngOnInit() {
  }

  getAllPosts() {
    this.responseServ.getPosts().subscribe(
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

  getCommentsParams() {
    this.responseServ.getComments().subscribe(
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

  postCommentsEmpty() {
    this.responseServ.postEmpty().subscribe(
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

  getPostsError() {
    this.responseServ.getError().subscribe(
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

  getPostsHeaders() {
    this.responseServ.getPostsHeaders().subscribe(
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

  deletePost() {
    this.responseServ.deletePost().subscribe(
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

  
getPost() {
  this.responseServ.getPostId().subscribe(
    {
      next: (response: any) => {
        this.responseServ.second_result = response;
        console.log(this.responseServ.second_result)
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message;
        console.log(this.error)
      }
    }
  )
}


}
