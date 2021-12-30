import { TipoPluviometro } from "./enum-pluviometros";

export class Pluviometro
{
    constructor(private tipo:TipoPluviometro) {}

    public getTipo():string
    {
        return TipoPluviometro[this.tipo];
    }

    public getPeso():number
    {
        //Kg
        return this.tipo * 1000;
    }

    public getCapacidade():number
    {
        //mm/L - Milímetros por Litro
        return this.tipo * 2;
    }
}