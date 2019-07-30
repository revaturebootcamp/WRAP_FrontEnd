import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from 'src/app/services/spoonacular.service';

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

  recipes$;
  constructor(private recipeService: SpoonacularService) {}

  getRecipeInfoByID() {
    this.recipes$ = this.recipeService.getRecipeInfoByID(2);
    console.log(this.recipes$);
  }


  ngOnInit() {
  }

}
