import { Component, OnInit } from '@angular/core';
import { ResponceService } from '../responce.service';
import { DataService } from '../data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  constructor(
    public responseServe: ResponceService,
    private routes: ActivatedRoute,
    public dataServ: DataService,
    private router: Router,
    private respServ: ResponceService

  ) { }

  ngOnInit() {
    this.routes.data.subscribe((response: any) => {
      this.dataServ.post = response[0];
      console.log(this.dataServ.post)
    })
  }
  Edit() {    
    this.router.navigateByUrl(`/posts/${this.dataServ.post.id}/edit`);
  }

}
