import { Pluviometro } from "../pluviometro";
import { BaseCaminhao } from "./base-caminhao";

export class CaminhaoAlfa extends BaseCaminhao
{
    private cargaAtual: number;

    constructor(limiteEquipamentos:number) {
        super(limiteEquipamentos);
        this.cargaAtual = 0;
    }

    protected beginTransaction(): void {
        this.snapshotArguments.push(this.cargaAtual);
        this.snapshotArguments.push(this.limiteEquipamentos);
    }
    protected rollback(): void {
        this.cargaAtual = this.snapshotArguments[0];
        this.limiteEquipamentos = this.snapshotArguments[1];
    }
    protected inserePluviometroExtendido(pluviometro: Pluviometro): void {
        const carga = this.cargaAtual+pluviometro.getPeso();
        if(carga > 5000)
        {
            let cargaErro = (Math.abs(5000-carga))/1000;
            throw new Error(`Transbordo da capacidade de transporte em ${cargaErro}t.`);
        }
        this.cargaAtual = carga;
    }
}