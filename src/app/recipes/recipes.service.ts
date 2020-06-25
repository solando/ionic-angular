import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://media.istockphoto.com/photos/various-types-of-cheese-picture-id629210154',
      ingredients: ['french fries', 'pork']

    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl: 'https://www.kuechengoetter.de/uploads/media/960x960/06/68566-spaghetti-mit-tomaten-kapern-sauce.jpg?v=2-16',
      ingredients: ['getreide', 'salz']

    }
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

  constructor() { }
}
