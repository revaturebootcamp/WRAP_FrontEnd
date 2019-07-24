import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "ingredients",
    component: IngredientsComponent
  },
  {
    path: "favorites",
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
