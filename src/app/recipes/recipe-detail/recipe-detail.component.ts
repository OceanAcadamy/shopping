import { RecipeService } from './../recipe.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Data) => {
      this.selectedRecipe = this.recipeService.getSingleRecipe(+data.id);

    });
  }

  addToShoppingList() {
    this.slService.addIngredient(this.selectedRecipe.ingredients);
  }

}
