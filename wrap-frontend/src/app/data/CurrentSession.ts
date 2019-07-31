import { Recipe } from './recipe';
import { Injectable } from '@angular/core';
import { UserAccount } from './userAccount';

@Injectable({
    providedIn: 'root'
  })
export class CurrentSession {
    public user: UserAccount = null;
    public currentRecipes : Recipe[] = [];
    public favoriteRecipes : Recipe[] = [];
    public historyRecipes : Recipe[] = [];

    constructor() { }
}