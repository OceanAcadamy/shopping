import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormControl, FormGroup, FormArray, AbstractControl, Validators } from '@angular/forms';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = this.id != null && this.id >= 0;
      console.log(this.id);
      this.initForm();

    });

  }

  onSubmit() {
    console.log(this.recipeForm.value);
    let recipe: Recipe;
    const ingredients: Ingredient[] = [];
    for (const ing of this.recipeForm.value.ingredients) {
      console.log(ing);
      ingredients.push(ing);
    }

    recipe = new Recipe(this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imagePath, ingredients);

    if (this.editMode) {
      this.recipeService.editRecipe(recipe, this.id)

    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.router.navigate(['../'], { relativeTo: this.route });

  }


  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let ingredientsList = new FormArray([]);

    if (this.editMode) {
      const recipeNeedToBeEdited = this.recipeService.getSingleRecipe(this.id);
      recipeName = recipeNeedToBeEdited.name;
      recipeDescription = recipeNeedToBeEdited.description;
      recipeImagePath = recipeNeedToBeEdited.imagePath;
      if (recipeNeedToBeEdited.ingredients) {
        for (let ing of recipeNeedToBeEdited.ingredients) {
          ingredientsList.push(new FormGroup({
            name: new FormControl(ing.name, Validators.required),
            amount: new FormControl(ing.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));

        }
      }
    }
    // else {
    //   ingredientsList.push(
    //     new FormGroup({
    //       name: new FormControl(null, Validators.required),
    //       amount: new FormControl(null, [
    //         Validators.required,
    //         Validators.pattern(/^[1-9]+[0-9]*$/)
    //       ]),
    //     }));
    // }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: ingredientsList

    });


  }
  getControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  addIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]),
      }));
  }
  deleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

}
