import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  constructor(private http:HttpClient) {}

  mockAPIstring = "http://www.amock.io/api/phz1996/"
  spoonString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"
  testingMode = true; //Keeping this true returns fake API results from 'amock.io',
  // so we don't go over the requests-per-day quota.

  getRandomFact() {

    if (this.testingMode){
      return this.http.get("https://my-json-server.typicode.com/paul-hernandez/gittest");
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "food/jokes/random",
      { headers: headers})
    }
  }

  getRecipeInfoByID(id){

    if (this.testingMode){
      return this.http.get("http://www.mocky.io/v2/5d3f52503300002b009d25bb");
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "recipes/" + id + "/information",
      { headers: headers})
    }

  }

  getRecipeSearchResults(searchTerm){
    if (this.testingMode){
      return this.http.get("http://www.mocky.io/v2/5d3f52ca3300006b009d25cc")
    } else {
      const headers = new HttpHeaders({'X-RapidAPI-Host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key':environment.API_KEY});

      return this.http.get(this.spoonString + "recipes/search?number=10&offset=0&type=main+course&query=" + searchTerm,
      { headers: headers})
    }
  }

}
