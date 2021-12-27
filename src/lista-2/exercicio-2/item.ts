import { Data } from "../../lista-1/exercicio-2/Data";

export class Item
{
    public valor:number = 0;
    public dataCompra:Data;

    constructor(private _numero:number) 
    {
        this.dataCompra = new Data(1,1,1);
    }

    public numero():number
    {
        return this._numero;
    }
}