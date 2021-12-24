import { ParametroDataErro } from "./ParametroDataErro";
import { BaseComponenteData } from "./BaseComponenteData";

export class Ano extends BaseComponenteData
{
    protected ValidaParametroData(valor: number): number {
        if(valor<1)
        {
            throw new ParametroDataErro("Ano precisa pertencer ao intervalo 1-*.");
        }
        return valor;
    }
    
}