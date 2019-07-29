import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = "(DefaultUsernameValue)"
  

  constructor(private spoon:SpoonacularService) { }

  ngOnInit() {
   this.getRecipeDataFromSearch("pasta");
   this.getRecipeInfoByID(1092215);
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
    this.spoon.getRecipeInfoByID(id).subscribe(
      data => {
        console.log(data)
        console.log(data["id"]);
        console.log(data["title"]);
        console.log(data["instructions"]);
        console.log(data["readyInMinutes"]);
        console.log(data["servings"]);
        let ingredients = data["extendedIngredients"]
        for (let index in ingredients) {
          console.log("INGREDIENT #" + index)
          console.log("Aisle: " + ingredients[index].aisle)
          console.log("id: " + ingredients[index].id)
          console.log("name: " + ingredients[index].name)
          console.log("nameAndMeasurement: " + ingredients[index].original) 
          console.log("amount: " + ingredients[index].amount)
          console.log("unit: " + ingredients[index].unit)
        }
      }, error => {
        console.log("Failed to get recipe info by ID :(");
    });
  }

}
