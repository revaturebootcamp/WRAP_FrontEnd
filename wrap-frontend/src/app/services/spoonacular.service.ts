import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  

  constructor(private http:HttpClient) {}

  mockAPIstring = "http://www.amock.io/api/phz1996/"
  spoonString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"
  testingMode = false; //Keeping this true returns fake hardcoded API results,
  // so we don't go over the requests-per-day quota.

  getRandomFact() {

    if (this.testingMode){
      return this.http.get(this.mockAPIstring + "randomFact");
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "food/jokes/random",
      { headers: headers})
    }
  }

  getRecipeInfoByID(id){

    if (this.testingMode){
      return this.http.get(this.mockAPIstring + "recipe");
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "recipes/" + id + "/information",
      { headers: headers})
    }

  }

  getRecipeSearchResults(searchTerm){
    if (this.testingMode){
      return this.http.get(this.mockAPIstring + "searchPasta")
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "recipes/search?number=10&offset=0&type=main+course&query=" + searchTerm,
      { headers: headers})
    }
  }

}
