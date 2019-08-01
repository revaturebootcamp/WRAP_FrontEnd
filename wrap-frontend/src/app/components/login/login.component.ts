import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CurrentSession } from 'src/app/data/CurrentSession';
import { UserAccount } from 'src/app/data/userAccount';
import { Recipe } from 'src/app/data/recipe';
import { Ingredient } from 'src/app/data/ingredient';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService, private cs: CurrentSession, private ss: SpoonacularService, private router: Router) { }

  ngOnInit() {

  }
  private username = "";
  private password = "";

  logIn() {

    this.us.login(this.username,this.password).subscribe(
      data => {
        if (data) {
          this.router.navigate(['home']);
          //var user = new UserAccount();
          console.log(this.cs.user)
          var user = new UserAccount();
          user.username = this.username;
          this.cs.user = user;
          console.log(this.cs.user)
          this.getRecipes()   
          this.cs.isUserLoggedIn.next(true);      
        } else {
          alert("Unsuccesful login attempt, please try again.")
          window.location.reload();
        }
      }, error => {
        alert("Error has occured while logging in.");
    });

    console.log(this.cs.user)
  }

  getRecipes(){
    this.us.getRecipes().subscribe(
      data => {
        for (let i in data){
          this.populateRecipeInfo(data[i]["id"]);
        }  
      }, error => {
        console.log("Failed to get all of this user's recipes :(");
    });
  }

  populateRecipeInfo(id){
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
        this.cs.currentRecipes.push(recipe)
        console.log(this.cs.currentRecipes);
      }, error => {
        console.log("Failed to get recipe info by ID :(");
    });
  }
  
}
