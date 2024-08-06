import { Component } from '@angular/core';
import { CreateRecipeService } from '../../servises/create-recipe.service';
import { CreateRecipe } from 'src/app/interfaces/create-recipe';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent {
  constructor(
    public createRecipeServ: CreateRecipeService

  ) { }

  // public createRecipeServ: CreateRecipeService
  recipe: CreateRecipe = {

    body: '',
    title: '',
    tags: [

    ],
    image: '',
    timeCooking: null,
    foodValue: {
      calories: null,
      fats: null,
      carbohydrates: null,
      proteins: null
    },
    cookingSteps: [
      {
        title: '',
        description: ''
      }
    ],
    ingredients: [
      {
        title: '',
        description: ''
      }
    ]

  }

 


  ngOnInit() {

  }

  createRecipe() {
    console.log(this.recipe)
  }

  addStep() {
    const step = {
      title: '',
      description: ''
    };
    this.recipe.cookingSteps.push(step)

  }

  addIngredients() {
    const ingredient = {
      title: '',
      description: ''
    };
    this.recipe.ingredients.push(ingredient)
  }

}
