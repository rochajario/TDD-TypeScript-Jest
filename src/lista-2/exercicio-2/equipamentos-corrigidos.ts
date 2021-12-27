import { Data } from "../../lista-1/exercicio-2/Data";
import { Equipamentos } from "./equipamentos";

export class EquipamentosCorrigidos extends Equipamentos
{
    constructor(numeroEquipamentos:number) {
        super(numeroEquipamentos);
    }

    public setDataCompra(id:number, data:Data):void
    {
        this.itens.filter(i => i.numero() == id)[0].dataCompra = data;
    }

    public getDataCompra(id:number):Data
    {
        return this.itens.filter(i => i.numero() == id)[0].dataCompra; 
    }

    public getMesCompra(id:number):string
    {
        return this.itens.filter(i => i.numero() == id)[0].dataCompra.getMesExtenso(); 
    }

    public substitui(outro: EquipamentosCorrigidos):void
    {
        if(this.getQuantidadeEquipamentos() != outro.getQuantidadeEquipamentos())
        {
            throw Error("Impossível substituir objetos, quantidades incompatíveis.");
        }

        this.itens.forEach(i =>{
            let idItem = i.numero();

            this.setDataCompra(idItem, outro.getDataCompra(idItem));
            this.setValor(idItem, outro.getValor(idItem));
        })
    }
}