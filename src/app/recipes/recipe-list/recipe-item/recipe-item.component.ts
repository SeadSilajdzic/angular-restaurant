import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;

    @Output() requestedRecipeDetails = new EventEmitter<void>();

    onRecipeDetailsRequest() {
        this.requestedRecipeDetails.emit();
    }

    constructor() {
    }
}
