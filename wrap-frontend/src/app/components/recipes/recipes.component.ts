import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { UserService } from 'src/app/services/user.service';
import { Recipe } from 'src/app/data/recipe';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  visibility = true;
  toggleVisibility(){
    this.visibility = !this.visibility;
  }

  constructor (public recipe : Recipe) {}
  //constructor(private ss: SpoonacularService, private us: UserService) { }

  // getRecipeInfoByID(id){
  //   var recipe = new Recipe()
  //   this.ss.getRecipeInfoByID(id).subscribe(
  //     data => {
  //       recipe.id = data["id"];
  //       recipe.ingredients = [];
  //       recipe.quantity = data["id"]
  //       recipe.isCurrent = true;
  //       recipe.isFavorite = false;
  //       recipe.isHistory = false;
  //       recipe.title = data["title"]
  //       recipe.readyInMinutes = data["readyInMinutes"]
  //       recipe.instructions = data["instructions"]
  //       recipe.servings = data["servings"]
  //       let ingredients = data["extendedIngredients"]        
  //       for (let index in ingredients) {
  //         var ing = new Ingredient();
  //         ing.id = ingredients[index].id;
  //         ing.quantity = 1;
  //         ing.name = ingredients[index].name;
  //         ing.aisle = ingredients[index].aisle;
  //         ing.amount = ingredients[index].amount;
  //         ing.unit = ingredients[index].unit
  //         recipe.ingredients.push(ing);
  //       }
  //       console.log(recipe)
  //     }, error => {
  //       console.log("Failed to get recipe info by ID :(");
  //   });
  //   console.log(recipe);
  // }



  ngOnInit() {
  }

}
