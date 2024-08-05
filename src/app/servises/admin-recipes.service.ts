import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { ResponseService } from './response.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminRecipesService {

  constructor(
    private responseServ: ResponseService,
    private router: Router
  ) { }
  recipes_list!: Posts[];
  recipe: any
  getRecipe(i: number) {    
    this.responseServ.post_uuid = this.recipes_list[i].id;
    i += 1;
    this.router.navigateByUrl(`/admin/recipes/${i}`)

  }
}
