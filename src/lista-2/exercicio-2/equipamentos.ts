import {Item} from "./item";

export class Equipamentos
{
    protected itens:Array<Item>;

    constructor(protected numeroEquipamentos:number) {
        this.itens = new Array<Item>();
        this.configuraEquipamentos(numeroEquipamentos);
    }

    public setValor(idEquipamento:number, valor:number):void
    {
        this.itens.filter(i => i.numero()==idEquipamento)[0].valor = valor;
    }

    public getValor(idEquipamento:number)
    {
        return this.itens.filter(i => i.numero()==idEquipamento)[0].valor
    }

    public getQuantidadeEquipamentos():number
    {
        return this.itens.length;
    }

    private configuraEquipamentos(quantidadeEquipamentos:number):void
    {
        for(let i=0; i< quantidadeEquipamentos; i++)
        {
            this.itens.push(new Item(i));
        }
    }
}