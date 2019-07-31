import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "ingredients",
    component: IngredientsComponent
  },
  {
    path: "favorites",
    component: FavoritesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
