import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Recipe } from '../data/recipe';
import { CurrentSession } from '../data/CurrentSession';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  private static urlPrefix = "http://3.15.23.130:8085/WRAP/useraccount"
  //private static urlPrefix = "http://localhost:8085/WRAP/useraccount"
  constructor(private http: HttpClient, private router:Router, private cs: CurrentSession) 
  {
    
  }
  private static options = { headers: new HttpHeaders().set('Content-Type', 'application/json') , withCredentials: true };


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

  logout(){
    return this.http.get<boolean>(UserService.urlPrefix + "/logout", UserService.options);
  }
  //This method is called if the page refreshes and loses track of the current session for the logged in user
  

  verifyLogin()
  {
    this.http.get<boolean>(UserService.urlPrefix + "/verifyAccount", UserService.options).subscribe
    (
      data =>
      {
        if(data)
        {
        }
        else
        {
          if(this.router.url.indexOf('/register') > -1)
          {
            this.router.navigate(['/register']);
          }
          else 
          {
            this.router.navigate(['login']);
          }
        }
      },
      error =>
      {
        if(this.router.url.indexOf('/register') > -1)
          {
            this.router.navigate(['/register']);
          }
          else 
          {
            this.router.navigate(['login']);
          }
      }
  );
  }
}

