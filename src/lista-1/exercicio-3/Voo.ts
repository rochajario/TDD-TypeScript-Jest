import { Data } from "../exercicio-2/Data";
import { Cadeira } from "./Cadeira";

export class Voo 
{
    
    private _cadeiras: Array<Cadeira>;
 
    constructor( private _numeroVoo: number, private _dataVoo: Data,) 
    {
        this._cadeiras = this.criarAssentos();
    }

    public Vagas():number
    {
        return this._cadeiras.filter(c => c.estaOcupado() == false).length;
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
        if(assento < 1 || assento > 100)
        {
            throw Error('Assento precisa pertencer ao intervalo 1-100.')
        }
        
        this._cadeiras.filter(c => c.getNumeroAssento()==assento)[0].ocupa();
    }

    public proximoLivre(): number {
        return this._cadeiras.filter(c => c.estaOcupado() == false)[0].getNumeroAssento();
    }

    public estaOcupado(assento: number): boolean {
        return this._cadeiras.filter(c => c.getNumeroAssento()==assento)[0].estaOcupado();
    }

    private criarAssentos():Array<Cadeira>
    {
        let cadeiras: Cadeira[] = [];
        for(var i = 0; i < 100; i++)
        {
            let numeroAssento = i+1;
            cadeiras.push(new Cadeira(numeroAssento));
        };
        return cadeiras;
    }
}