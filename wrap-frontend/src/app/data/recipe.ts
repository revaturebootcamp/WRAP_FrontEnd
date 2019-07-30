import { Ingredient } from "./ingredient";

export class Recipe {

  tableId:number;
  id:number;
  ownerId:number;
  ingredients:Ingredient[];
  quantity:number;
  isCurrent:boolean;
  isFavorite:boolean;
  isHistory:boolean;

  title:string;
  readyInMinutes:number;
  instructions:string;
  servings:number;
  


}