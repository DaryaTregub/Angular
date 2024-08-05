import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRecipesService } from 'src/app/servises/admin-recipes.service';

@Component({
  selector: 'app-admin-recipe',
  templateUrl: './admin-recipe.component.html',
  styleUrls: ['./admin-recipe.component.css']
})
export class AdminRecipeComponent {
  constructor(public recipesServ: AdminRecipesService,
    private routes: ActivatedRoute,
    private router:Router){
  }
  ngOnInit() {
    this.routes.data.subscribe({
      next: (response: any) => {
        console.log(response);
        this.recipesServ.recipe = response[0];    
        console.log(this.recipesServ.recipe)
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message)
      }
    })
  }
}
