import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('breed', 5),
    new Ingredient('kiwi', 2),
    new Ingredient('pb&j', 1),
  ];
  @Input() addThisShit: Ingredient;
  constructor() { }

  ngOnInit(): void { }

  addingShit(shit: Ingredient) {
    this.ingredients.push(shit);
  }
}
