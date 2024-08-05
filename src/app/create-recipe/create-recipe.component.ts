import { Component } from '@angular/core';
import { CreateRecipeService } from '../servises/create-recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  constructor(
    public createRecipeServ: CreateRecipeService
  ){}

}
