import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static urlPrefix = "http://localhost:8080/useraccount"
  constructor(private http: HttpClient) { }

  login(usernameIn: string, passwordIn: string)
  {
    return this.http.post<boolean>(UserService.urlPrefix + "/login", JSON.stringify({"username":usernameIn,"password":passwordIn}));
  }
}
