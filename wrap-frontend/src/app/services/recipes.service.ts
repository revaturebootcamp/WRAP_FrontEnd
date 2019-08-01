import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RecipesService{

constructor(private http: HttpClient) {}

fetchRecipes(): Observable<Object> {
    return this.http.get('/data/recipe.ts');

}

}