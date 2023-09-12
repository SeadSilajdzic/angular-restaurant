import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a simple test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
        new Recipe('Second recipe', 'Other recipe description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    ];

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
