import { Component, OnInit } from '@angular/core';
import { CurrentSession } from 'src/app/data/CurrentSession';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  private static ID_PREFIX : string = "ingredient_list_id_";

  private ingredients : Ingredient[] = [];

  constructor(private curSession : CurrentSession) { }

  ngOnInit() {
    let ingredientMap = new Map ();

    for (let r of this.curSession.currentRecipes) {
      for (let i of r.ingredients) {
        

        if (ingredientMap.has (i.id)) {
          let temp : Ingredient;

          temp = ingredientMap.get (i.id);
          temp.amount += i.amount;
          temp.quantity += i.quantity;

          ingredientMap.set (i.id, temp);
        }
        else {
          ingredientMap.set (i.id, i.clone ());
        }
      }
    }
    this.ingredients = Array.from( ingredientMap.values() );
  }

  private ingredientIdString (id : string) {
    console.log(IngredientsComponent.ID_PREFIX + id)
    return IngredientsComponent.ID_PREFIX + id;
    
  }

  changeRowColor(idIn: string)
  {
    let rowchange = document.getElementById(idIn);
    if(rowchange.style.backgroundColor == "darksalmon")
    {
      
        rowchange.style.backgroundColor = "white";
      
    }
    else
    {
      rowchange.style.backgroundColor = "darksalmon";
    }
  }

}