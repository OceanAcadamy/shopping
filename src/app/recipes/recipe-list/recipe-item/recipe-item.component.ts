import { Recipe } from './../../recipes.model';
import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Input() selctedRecipieIndex: number;


  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onRecipeClicked() {

  //   this.router.navigate([this.selctedRecipieIndex.toString()], { relativeTo: this.route });
  // }

}
