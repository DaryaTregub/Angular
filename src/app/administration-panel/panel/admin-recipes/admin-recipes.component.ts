import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRecipesService } from 'src/app/servises/admin-recipes.service';
import { ResponseService } from 'src/app/servises/response.service';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent {
  constructor(
    public recipesServ: AdminRecipesService,
    private routes: ActivatedRoute,
    private router:Router

  ) { }
  ngOnInit() {
    this.routes.data.subscribe({
      next: (response: any) => {
        console.log(response);
        this.recipesServ.recipes_list = response[0];    
        console.log(this.recipesServ.recipes_list)
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }


}