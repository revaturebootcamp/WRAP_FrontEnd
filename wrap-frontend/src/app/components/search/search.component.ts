import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { Recipe } from 'src/app/data/recipe';
import { UserService } from 'src/app/services/user.service';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ss: SpoonacularService, private us: UserService) { }

  ngOnInit() {
  }

  searchTerm = "";
  recipeSearchResults = [];


  search(searchTerm){
    console.log(searchTerm);
    this.recipeSearchResults = [];
    this.ss.getRecipeSearchResults(searchTerm).subscribe(
        data => {
          let recipeResults = data["results"]
          for (let index in recipeResults){
            this.recipeSearchResults.push({recipe: index, id: recipeResults[index].id, title: recipeResults[index].title, ready:recipeResults[index].readyInMinutes })
            console.log("Recipe " + index)
            console.log("ID: " + recipeResults[index].id)
            console.log("Name: " + recipeResults[index].title)
            console.log("ReadyTime: " + recipeResults[index].readyInMinutes)
          }
          console.log(data)
        }, error => {
          console.log("Failed to get recipe data from search :(");
      });
  }

  // getRecipeInfoByID(id){
  //   var recipe = new Recipe()
  //   this.spoon.getRecipeInfoByID(id).subscribe(
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



  addRecipe(id){
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
        console.log(recipe)
      }, error => {
        console.log("Failed to get recipe info by ID :(");
    }).add(() => {
      this.us.addRecipe(recipe).subscribe(
        data => {
          console.log(data);  
        }, error => {
          console.log("Failed to add recipe for some reason :(");
      });
 });

    
  }
    
  

}
