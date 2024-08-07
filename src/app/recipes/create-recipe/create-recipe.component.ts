import { Component } from '@angular/core';
import { CreateRecipe } from 'src/app/interfaces/create-recipe';
import { AdminRecipesService } from 'src/app/servises/admin-recipes.service';
import { MainService } from 'src/app/servises/main.service';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  constructor(
public recipeServ: AdminRecipesService
  ) { }





  ngOnInit() {

  }



}
