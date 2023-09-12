import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {DropdownOpenDirective} from "./shared/dropdown/dropdown-open.directive";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        ShoppingListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        ShoppingEditComponent,
        DropdownOpenDirective,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
