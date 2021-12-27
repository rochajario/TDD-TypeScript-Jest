import { MesesPorExtenso } from "../../lista-1/exercicio-2/ComponentesData/MesesPorExtenso";
import { Data } from "../../lista-1/exercicio-2/Data";
import { Equipamentos } from "./equipamentos";

export class EquipamentosCorrigidos extends Equipamentos
{

    protected mesCorrente:MesesPorExtenso;

    constructor(numeroEquipamentos:number) {
        super(numeroEquipamentos);
        this.mesCorrente = 1;
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

    public corrige(taxa:number):void
    {
        const itensTemporarios = this.atribuiCorrecao(taxa);
        this.substitui(itensTemporarios);
        this.avancaMesCorrente();
    }

    private atribuiCorrecao(taxaPercentual:number):EquipamentosCorrigidos
    {
        let itensTemporarios = new EquipamentosCorrigidos(this.getQuantidadeEquipamentos());
        this.itens.forEach(i => {
            if(i.dataCompra.getMes()== this.mesCorrente as number)
            {
                let percentualDoValorAtual = i.valor*(taxaPercentual/100);
                itensTemporarios.setValor(i.numero(),i.valor + percentualDoValorAtual);
                itensTemporarios.setDataCompra(i.numero(), i.dataCompra);
            }
            else
            {
                itensTemporarios.setValor(i.numero(),i.valor);
                itensTemporarios.setDataCompra(i.numero(), i.dataCompra);
            }
        });
        return itensTemporarios;
    }

    private avancaMesCorrente():void
    {
        if(this.mesCorrente == 12)
        {
            this.mesCorrente = 1;
            return;
        }
        this.mesCorrente++;
    }
}