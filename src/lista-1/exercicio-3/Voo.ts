import { Data } from "../exercicio-2/Data";
import { Cadeira } from "./Cadeira";

export class Voo 
{
    
    protected _cadeiras: Array<Cadeira>;
    protected _quantidadeAssentos:number;

    protected _numeroVoo: number;
    protected _dataVoo: Data;
 
    constructor(numeroVoo:number, dataVoo:Data) 
    {
        this._cadeiras = new Array<Cadeira>();
        this._quantidadeAssentos = 0;
        this._numeroVoo = numeroVoo;
        this._dataVoo = dataVoo;
        this.configuraQuantidadeDeAssentos(100);
    }

    public Vagas():number
    {
        return this._cadeiras.filter(c => !c.estaOcupado()).length;
    }

    public getVoo():number
    {
        return this._numeroVoo;
    }

    public getData():Data
    {
        return this._dataVoo;
    }

    public ocupa(assento:number):void
    {
        if(assento < 1 || assento > this._quantidadeAssentos)
        {
            throw Error('Assento precisa pertencer ao intervalo 1-100.')
        }
        
        this._cadeiras.filter(c => c.getNumeroAssento()==assento)[0].ocupa();
    }

    public proximoLivre(): number {
        return this._cadeiras.filter(c => !c.estaOcupado())[0].getNumeroAssento();
    }

    public estaOcupado(assento: number): boolean {
        return this._cadeiras.filter(c => c.getNumeroAssento()==assento)[0].estaOcupado();
    }

    protected configuraQuantidadeDeAssentos(quantidadeAssentos:number)
    {
        this._quantidadeAssentos = quantidadeAssentos;
        this._cadeiras = this.criarAssentos();
    }

    protected criarAssentos():Array<Cadeira>
    {
        let cadeiras: Cadeira[] = [];
        for(var i = 0; i < this._quantidadeAssentos; i++)
        {
            let numeroAssento = i+1;
            cadeiras.push(new Cadeira(numeroAssento));
        }
        
        return cadeiras;
    }
}