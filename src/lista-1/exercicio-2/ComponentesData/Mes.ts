import { ParametroDataErro } from "./ParametroDataErro";
import { BaseComponenteData } from "./BaseComponenteData";

export class Mes extends BaseComponenteData
{
    protected ValidaParametroData(valor: number): number {
        if(valor<1 || valor >12)
        {
            throw new ParametroDataErro("Mês precisa pertencer ao intervalo 1-12.");
        }
        return valor;
    }
}