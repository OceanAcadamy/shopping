import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientAddedEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('breed', 5),
        new Ingredient('kiwi', 2),
        new Ingredient('pb&j', 1),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient | Ingredient[]) {
        if (Array.isArray(ingredient)) {
            this.ingredients.push(...ingredient);
        } else {
            this.ingredients.push(ingredient);
        }
        this.ingredientAddedEmitter.emit(this.ingredients.slice());

    }
}