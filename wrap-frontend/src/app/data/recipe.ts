export class Recipe {

  tableId:number;
  id:number;
  ownerId:number;
  ingredients:Ingredient[] = [];
  quantity:number;
  isCurrent:boolean = false;
  isFavorite:boolean = false;
  isHistory:boolean = false;


  title:string;
  readyInMinutes:number;
  instructions:string;
  servings:number;

  testing(){
    console.log("howdy");
  }


}