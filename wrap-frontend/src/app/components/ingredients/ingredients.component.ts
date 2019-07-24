import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeRowColor(idIn: string)
  {
    let rowchange = document.getElementById(idIn);
    if(rowchange.style.backgroundColor == "black")
    {
      rowchange.style.backgroundColor = "white";
    }
    else
    {
      rowchange.style.backgroundColor = "black";
    }
  }

}
