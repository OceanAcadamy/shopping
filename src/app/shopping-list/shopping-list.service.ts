import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
    editIngredientSubject = new Subject<number>();


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
    getIngredient(index: number) {

        return this.ingredients[index];


    }


    addIngredient(ingredient: Ingredient | Ingredient[]) {
        if (Array.isArray(ingredient)) {
            this.ingredients.push(...ingredient);
        } else {
            this.ingredients.push(ingredient);
        }
        this.ingredientAddedEmitter.next(this.ingredients.slice());

    }
    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientAddedEmitter.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientAddedEmitter.next(this.ingredients.slice());
    }
}
