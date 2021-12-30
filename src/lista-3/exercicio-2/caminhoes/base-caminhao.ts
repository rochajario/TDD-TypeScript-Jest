import { Pluviometro } from "../pluviometro";

export abstract class BaseCaminhao
{
    protected snapshotArguments: number[];

    constructor(protected limiteEquipamentos: number) 
    {
        this.snapshotArguments = new Array<number>();
    }

    public inserePluviometro(pluviometro: Pluviometro): void {
        this.executeInsercaoComTratamentoDeErros(pluviometro);
    }

    private executeInsercaoComTratamentoDeErros(pluviometro: Pluviometro)
    {
        this.beginTransaction();
        try
        {
            this.validaLimiteDeItens();
            this.inserePluviometroExtendido(pluviometro);
        }
        catch(error)
        {
            this.rollback();
            throw error;
        }
    }

    protected validaLimiteDeItens():void
    {
        if(this.limiteEquipamentos == 0)
        {
            throw new Error("Limite de equipamentos atingido.");
        }
        this.limiteEquipamentos--;
    }

    //Implementação deve conter regra específica de regra de negócio
    protected abstract inserePluviometroExtendido(pluviometro: Pluviometro):void;

    //Implementação deve manter lastro de argumentos para garantir atomicidade da operação
    protected abstract beginTransaction():void;

    //Implementação deve restaurar argumentos para garantir atomicidade da operação
    protected abstract rollback():void;

    
}