import { Ano } from "./ComponentesData/Ano";
import { Dia } from "./ComponentesData/Dia";
import { Mes } from "./ComponentesData/Mes";
import { MesesPorExtenso } from "./ComponentesData/MesesPorExtenso";

export class Data{
    
    private _dia:Dia;
    private _mes:Mes;
    private _ano:Ano;

    constructor(dia:number, mes:number, ano:number)
    {
        this._dia = new Dia(dia);
        this._mes = new Mes(mes);
        this._ano = new Ano(ano);
    }

    public getDia():number
    {
        return this._dia.valor();
    }

    public getMes():number
    {
        return this._mes.valor();
    }

    public getAno():number
    {
        return this._ano.valor();
    }

    public getMesExtenso():string
    {
        return MesesPorExtenso[this._mes.valor() as MesesPorExtenso];
    }

    public isBissexto():boolean
    {
        return (this._ano.valor() % 4 == 0)||(this._ano.valor() % 400 == 0);
    }
}