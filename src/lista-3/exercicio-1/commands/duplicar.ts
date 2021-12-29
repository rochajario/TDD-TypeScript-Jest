import { IPessoa } from "../interfaces/iPessoa";
import { IRepositorio } from "../interfaces/iRepositorio";
import { BaseCommand } from "./base-command";

export class Duplicar extends BaseCommand
{
    constructor(private repositorioA: IRepositorio<IPessoa>, private repositorioB: IRepositorio<IPessoa>) {
        super();
    }

    protected invocarComandoInterno(): void 
    {
        let pessoa = this.repositorioA.primeiro();
        this.repositorioB.guarda(pessoa);

        while(true)
        {
            this.repositorioB.guarda(this.repositorioA.proximo());
        }
    }
    
}