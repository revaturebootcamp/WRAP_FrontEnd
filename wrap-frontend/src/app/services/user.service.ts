import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  private static urlPrefix = "http://localhost:8080/useraccount"
  constructor(private http: HttpClient, private router:Router) 
  {
    
  }

  login(usernameIn: string, passwordIn: string)
  {
    return this.http.post<boolean>(UserService.urlPrefix + "/login", JSON.stringify({"username":usernameIn,"password":passwordIn}));
  }

  verifyLogin()
  {
    this.http.get<boolean>(UserService.urlPrefix + "/verifyAccount").subscribe
    (
      data =>
      {
        if(data)
        {
          this.router.navigate(['/']);
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

