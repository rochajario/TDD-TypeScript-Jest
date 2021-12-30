import { Pluviometro } from "../pluviometro";
import { BaseCaminhao } from "./base-caminhao";

export class CaminhaoBeta extends BaseCaminhao
{
    private equipamentos: Array<Pluviometro>;

    constructor(limiteEquipamentos: number) {
        super(limiteEquipamentos);
        this.equipamentos = new Array<Pluviometro>();
    }

    protected beginTransaction(): void {
        this.snapshotArguments.push(this.limiteEquipamentos);
    }
    
    protected rollback(): void {
        this.limiteEquipamentos = this.snapshotArguments[0];
    }

    protected inserePluviometroExtendido(pluviometro: Pluviometro): void {
        if(this.equipamentos.filter(e => e.getTipo() == pluviometro.getTipo())[0])
        {
            throw Error(`Não é possível adicionar mais um Pluviometro ${pluviometro.getTipo()}.`);
        }
        this.equipamentos.push(pluviometro);
    }
}