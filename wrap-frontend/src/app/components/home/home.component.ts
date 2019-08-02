import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { UserService } from 'src/app/services/user.service';
import { Recipe } from 'src/app/data/recipe';
import { Ingredient } from 'src/app/data/ingredient';
import { CurrentSession } from 'src/app/data/CurrentSession';
import { ChartsModule } from 'ng2-charts';
import * as CanvasJS from '../../canvasjs.min';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = ""

  constructor(private spoon:SpoonacularService, private us:UserService, private cs: CurrentSession) { }

  ngOnInit() {
    this.username = this.cs.user.username;

    let calciumChart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      title: {
        text: "Fruits and Vegetables by Calcium Content"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 139, label: "Raw Spinach" },
          { y: 100, label: "Cooked Spinach" },
          { y: 75, label: "Kale" },
          { y: 61, label: "Edamame" },
          { y: 57, label: "Dried Apricots" },
          { y: 50, label: "Raisins" },
          { y: 41, label: "Green Beans" },
          { y: 41, label: "Oranges" },
          { y: 37, label: "Kiwi" }
         ]
       }]
     });
      
     calciumChart.render();


    //  let balancedDietChart = new CanvasJS.Chart("chartContainer2", {
    //   theme: "light2",
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title:{
    //     text: "Balanced Diet"
    //   },
    //   data: [{
    //     type: "pie",
    //     showInLegend: true,
    //     toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
    //     indexLabel: "{name} - #percent%",
    //     dataPoints: [
    //       { y: 40, name: "Fruits and Vegetables" },
    //       { y: 25, name: "Fibre-rich Carbohydrates" },
    //       { y: 25, name: "Protein" },
    //       { y: 10, name: "Fats" }
    //     ]
    //   }]
    // });
      
    // balancedDietChart.render();
   }

   getRecipeDataFromSearch(searchTerm){
     this.spoon.getRecipeSearchResults(searchTerm).subscribe(
       data => {
         let recipeResults = data["results"]
         for (let index in recipeResults){
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

   getRandomFoodFact(){
     this.spoon.getRandomFact().subscribe(
       data => {
         console.log(data)
         console.log(data["text"]) 
       }, error => {
         console.log("Failed to get random food fact :(");
     });

   }

   getRecipeInfoByID(id){
     var recipe = new Recipe()
     this.spoon.getRecipeInfoByID(id).subscribe(
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

   addRecipe(){
     var recipe = new Recipe();
    
     recipe.id = 1092215;
     recipe.quantity = 2;
     recipe.isCurrent = true;
     recipe.title = "Beans and Rice";
     recipe.readyInMinutes = 35;
     recipe.servings = 4;

     this.us.addRecipe(recipe).subscribe(
       data => {
         console.log(data);  
       }, error => {
         console.log("Failed to add recipe for some reason :(");
     });
   }

   getRecipes(){
     this.us.getRecipes().subscribe(
       data => {
         console.log(data);  
       }, error => {
         console.log("Failed to get all of this user's recipes :(");
     });
   }

}
