import { Data } from "../../lista-1/exercicio-2/Data";
import { Voo } from "../../lista-1/exercicio-3/Voo";

export class VooComFumantes extends Voo
{
    constructor(numeroVoo: number, dataVoo: Data, quantidadeAssentos:number, quantidadeFumantes:number) {
        super(numeroVoo, dataVoo);
        this.configuraQuantidadeDeAssentos(quantidadeAssentos);
        this.configuraAssentosParaFumantes(quantidadeFumantes);
    }

    public configuraAssentosParaFumantes(quantidadeFumantes:number):void
    {
        if(quantidadeFumantes >= this._quantidadeAssentos)
        {
            throw Error("Um voo não pode conter apenas fumantes");
        }
        this.atribuiUltimosAssentosParaFumantes(quantidadeFumantes);
    }

    public maxVagas():number
    {
        return this._quantidadeAssentos;
    }

    public cadeirasFumantes():number
    {
        return this._cadeiras.filter(c => c.paraFumante()).length;
    }

    public tipo(id:number):string
    {
        return this._cadeiras[id].paraFumante()?"Fumante":"Não Fumante";
    }

    private atribuiUltimosAssentosParaFumantes(quantidadeFumantes:number)
    {
        const ultimosAssentos = this._quantidadeAssentos - quantidadeFumantes;

        for(let i = ultimosAssentos; i< this._quantidadeAssentos; i++)
        {
            this._cadeiras[i].atribuirFumante();
        }
    }
}