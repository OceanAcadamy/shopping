import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }
  ngOnDestroy(): void {
    this.recipeChangedSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipeChangedSubscription = this.recipeService.recipeChangedSubject.subscribe(
      (data) => {
        this.recipes = data;
      });
  }
}
