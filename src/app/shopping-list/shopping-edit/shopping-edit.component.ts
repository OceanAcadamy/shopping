import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

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

  @Output() emitIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    if (this.nameInput.nativeElement.value && this.amountInput.nativeElement.value) {
      // this.emitIngredient.emit({ name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value });
      this.emitIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
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
