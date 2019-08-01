import { Component, OnInit } from '@angular/core';
import { CurrentSession } from 'src/app/data/CurrentSession';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'app-recipewidget',
  templateUrl: './recipewidget.component.html',
  styleUrls: ['./recipewidget.component.css']
})
export class RecipewidgetComponent implements OnInit {

  constructor(private cs: CurrentSession) { }


  recipes = [];

  ngOnInit() {
    this.recipes = this.cs.currentRecipes;
  }

  refresh() {
    this.ngOnInit();
  }

  

}
