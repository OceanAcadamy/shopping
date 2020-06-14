import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.slService.addIngredient(this.selectedRecipe.ingredients);
  }



}
