import { IPessoa } from "../interfaces/iPessoa";
import { IRepositorio } from "../interfaces/iRepositorio";
import { BaseCommand } from "./base-command";

export class Diferenciar extends BaseCommand
{
    constructor(
        private repositorioA: IRepositorio<IPessoa>, 
        private repositorioB: IRepositorio<IPessoa>, 
        private repositorioC: IRepositorio<IPessoa>) {
        super();
    }

    protected invocarComandoInterno(): void {
        let pessoa = this.repositorioA.primeiro();
        while(true)
        {
            if(!this.repositorioB.recupera(pessoa.getCpf()))
            {
                this.repositorioC.guarda(pessoa);
            }
            pessoa = this.repositorioA.proximo();
        }
    }
}