import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/data/ingredient';
import { Recipe } from 'src/app/data/recipe';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipewidget',
  templateUrl: './recipewidget.component.html',
  styleUrls: ['./recipewidget.component.css']
})
export class RecipewidgetComponent implements OnInit {

  visibility = true;
  toggleVisibility(){
    this.visibility = !this.visibility;

    

  }

  constructor(private ss: SpoonacularService, private us: UserService) { }

  getRecipeInfoByID(id){
    var recipe = new Recipe()
    this.ss.getRecipeInfoByID(id).subscribe(
      data => {
        recipe.id = data["id"];
        recipe.ingredients = [];
        recipe.quantity = data["id"]
        recipe.isCurrent = true;
        recipe.isFavorite = false;
        recipe.isHistory = false;
        recipe.title = data["title"]
        recipe.readyInMinutes = data["readyInMinutes"]
        recipe.instructions = data["instructions"]
        recipe.servings = data["servings"]
        let ingredients = data["extendedIngredients"]        
        for (let index in ingredients) {
          var ing = new Ingredient();
          ing.id = ingredients[index].id;
          ing.quantity = 1;
          ing.name = ingredients[index].name;
          ing.aisle = ingredients[index].aisle;
          ing.amount = ingredients[index].amount;
          ing.unit = ingredients[index].unit
          recipe.ingredients.push(ing);
        }
        console.log(recipe)
      }, error => {
        console.log("Failed to get recipe info by ID :(");
    });
    console.log(recipe);
  }

  ngOnInit() {
  }

}
