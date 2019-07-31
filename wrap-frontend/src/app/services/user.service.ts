import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../data/recipe';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static urlPrefix = "http://localhost:8080/useraccount"
  private static options = { headers: new HttpHeaders().set('Content-Type', 'application/json') , withCredentials: true };

  constructor(private http: HttpClient) { }

  login(usernameIn: string, passwordIn: string)
  {
    return this.http.post<boolean>(UserService.urlPrefix + "/login", JSON.stringify({"username":usernameIn,"password":passwordIn}), UserService.options);
  }

  addUser(usernameIn: string, passwordIn: string)
  {
    return this.http.post<boolean>(UserService.urlPrefix + "/insert", JSON.stringify({"username":usernameIn,"password":passwordIn}), UserService.options);
  }

  addRecipe(recipe: Recipe)
  {
    return this.http.post<boolean>(UserService.urlPrefix + "/recipe/insert", JSON.stringify(recipe), UserService.options);
  }

  getRecipes()
  {
    return this.http.get<Object[]>(UserService.urlPrefix + "/recipe/find/all", UserService.options);
  }

}
