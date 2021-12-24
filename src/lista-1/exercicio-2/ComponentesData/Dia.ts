import { ParametroDataErro } from "./ParametroDataErro";
import { BaseComponenteData } from "./BaseComponenteData";

export class Dia extends BaseComponenteData
{
    protected ValidaParametroData(valor: number): number {
        if(valor<=0 || valor >31)
        {
            throw new ParametroDataErro("Dia precisa pertencer ao intervalo 1-31.");
        }
        return valor;
    }
}