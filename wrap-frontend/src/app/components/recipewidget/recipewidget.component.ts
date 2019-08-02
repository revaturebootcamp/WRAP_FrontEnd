import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/data/ingredient';
import { Recipe } from 'src/app/data/recipe';
import { SpoonacularService } from 'src/app/services/spoonacular.service';
import { UserService } from 'src/app/services/user.service';
import { CurrentSession } from 'src/app/data/CurrentSession';

@Component({
  selector: 'app-recipewidget',
  templateUrl: './recipewidget.component.html',
  styleUrls: ['./recipewidget.component.css']
})
export class RecipewidgetComponent implements OnInit {

  private static ID_PREFIX : string = "id_recipe_";

  visibility = true;

  toggleVisibility(id){
    console.log(id)
    let visible = document.getElementById(id);
    if (visible.hidden == false) {
      visible.hidden = true;
    } else {
      visible.hidden = false;
    }

  }

  
  constructor(private cs: CurrentSession) { }


  recipes = [];

  ngOnInit() {
    this.recipes = this.cs.currentRecipes;
  }

  refresh() {
    this.ngOnInit();
  }

  deleteRecipe(id){
    if(confirm('Are you sure you want to delete this recipe?'))
      {
    this.cs.currentRecipes.splice(id, 1);
    this.ngOnInit();
      }
  }

  private recipeIdString (id : string) {
    return RecipewidgetComponent.ID_PREFIX + id;
    
  }

  

}
