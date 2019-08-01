import { Recipe } from './recipe';
import { Injectable } from '@angular/core';
import { UserAccount } from './userAccount';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CurrentSession {
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public user: UserAccount = null;
    public currentRecipes : Recipe[] = [];
    public favoriteRecipes : Recipe[] = [];
    public historyRecipes : Recipe[] = [];

    constructor() { }
}