import { AssentoException } from "./AssentoException";

export class Cadeira
{
    private _ocupado: boolean;
    private _fumante: boolean;

    constructor(private _numeroAssento:number) 
    {
        this._ocupado = false;
        this._fumante = false;
    }
    
    public getNumeroAssento():number
    {
        return this._numeroAssento;
    }

    public estaOcupado():boolean
    {
        return this._ocupado;
    }

    public ocupa():void
    {
        if(this.estaOcupado())
        {
            throw new AssentoException(`O Assento: ${this._numeroAssento} já está reservado.`);
        }
        this._ocupado = true;
    }

    public atribuirFumante():void
    {
        this._fumante = true;
    }

    public paraFumante():boolean
    {
        return this._fumante;
    }
}