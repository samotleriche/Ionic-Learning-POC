import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: '../../assets/food1.jpeg',
      ingredients: ['Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'Croisant',
      imageUrl: '../../assets/food2.jpg',
      ingredients: ['Bread', 'Butter', 'Milk']
    },
  ]

  constructor() { }

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  public deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(res => {
      return res.id !== recipeId;
    })
  }
}
