import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  form: NgForm;

  editMode: boolean;
  editIndex: number;

  editIngredientSubscription: Subscription;


  constructor(private slService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.editIngredientSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.editIngredientSubscription = this.slService.editIngredientSubject.subscribe((index: number) => {
      this.editMode = true;
      this.editIndex = index;
      this.fillFormToEdit(index);

    });
  }
  fillFormToEdit(index: number) {

    const selectedIngredient: Ingredient = this.slService.getIngredient(index);
    this.form.setValue({ name: selectedIngredient.name, amount: selectedIngredient.amount });

  }
  onAdd() {

    console.log(this.form.valid);

    const newIngredient = new Ingredient(this.form.value.name, this.form.value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editIndex, newIngredient);
    }
    else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.editIndex = null;
    this.form.reset();



  }



  onDelete() {
    this.onClear();
    this.slService.deleteIngredient(this.editIndex);

  }

  onClear() {
    this.editMode = false;
    this.editIndex = null;
    this.form.reset();
  }


}
