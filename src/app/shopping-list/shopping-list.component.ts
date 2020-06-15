import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredientSubscription: Subscription;
  ingredients: Ingredient[];

  // @Input() addThisShit: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.ingredientSubscription = this.slService.ingredientAddedEmitter.subscribe((data: Ingredient[]) => { this.ingredients = data; });
  }

  // addingShit(shit: Ingredient) {
  //   this.ingredients.push(shit);
  // }
  ngOnDestroy(){
    this.ingredientSubscription.unsubscribe();
  }
}
