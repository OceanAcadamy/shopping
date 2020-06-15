import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipes.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Peanut butter sandwich',
      'Eat it or yeet it',
      'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Various_Sandwiches_1296x728-header-1296x728.jpg?w=1155&h=1528',
      [new Ingredient('Breed', 2),
      new Ingredient('peanut butter', 1),
      ]
    ),
    new Recipe(
      'Fruit salad',
      'Eat healthy',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg',
      [new Ingredient('dressing', 1),
      new Ingredient('mango', 1),
      new Ingredient('straberries', 5),
      new Ingredient('cucumber', 0.5),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getSingleRecipe(index: number) {

    return this.recipes[index];
  }
}