import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateRecipe } from '../interfaces/create-recipe';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRecipesService {

  constructor(
    private responseServ: ResponseService,
    private router: Router,
    private mainServ: MainService
  ) { }
  recipes_list!: Posts[];
  recipe: CreateRecipe = {

    body: null,
    title: null,
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


  editRecipe(i: number) {
    this.responseServ.post_uuid = this.recipes_list[i].id;
    i += 1;
    this.router.navigateByUrl(`/admin/recipes/${i}`)
  }

  deleteRecipe(id: string) {
    this.responseServ.post_uuid = id;
    this.responseServ.deleteRecipe().subscribe(
      {
        next: (response: any) => {
          console.log(response)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      }
    );
  }

  createRecipe() {
    console.log(this.recipe)
    this.mainServ.new_recipe = this.recipe;
    this.mainServ.postNewRecipe();
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

  saveRecipe() {
    this.responseServ.new_recipe = this.recipe;
    this.responseServ.postCreateRecipe().subscribe(
      {
        next: (response: any) => {
          console.log(response)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      }
    );
  }

}
