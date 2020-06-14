import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInput: ElementRef;
  @ViewChild('amountInput')
  amountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAdd() {
    if (this.nameInput.nativeElement.value && this.amountInput.nativeElement.value) {
      // this.emitIngredient.emit({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value });
      // this.emitIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
      const slName = this.nameInput.nativeElement.value;
      const slAmount = this.amountInput.nativeElement.value;
      const newIngredient = new Ingredient(slName, slAmount);
      this.slService.addIngredient(newIngredient);
      this.nameInput.nativeElement.value = '';
      this.amountInput.nativeElement.value = '';
    }
  }



  onDelete() { }
  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }


}
