import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {


    ingredientAddedEmitter = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('breed', 5),
        { name: 'asdhg', amount: 20 },
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
        this.ingredientAddedEmitter.next(this.ingredients.slice());

    }
}
