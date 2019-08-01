export class Ingredient {
    id:number;
    quantity:number;
    name:string;

    aisle:string;
    amount:number;
    unit:string;

    public clone () {
        let temp : Ingredient = new Ingredient ();

        temp.id = this.id;
        temp.quantity = this.quantity;
        temp.name = this.name;
        temp.aisle = this.aisle;
        temp.amount = this.amount;
        temp.unit = this.unit;

        return temp;
    }
}