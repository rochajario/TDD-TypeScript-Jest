import { Duplicar as ComandoDuplicar } from "./commands/duplicar" ;
import { Diferenciar as ComandoDiferenciar } from "./commands/diferenciar";
import { IPessoa } from "./interfaces/iPessoa";
import { IRepositorio } from "./interfaces/iRepositorio";

export class Utilitarios
{
    public duplica(repositorioA: IRepositorio<IPessoa>, repositorioB: IRepositorio<IPessoa> ):void
    {
        new ComandoDuplicar(repositorioA, repositorioB).Executar();
    }

    public diferencia(repositorioA: IRepositorio<IPessoa>, repositorioB: IRepositorio<IPessoa>, repositorioC: IRepositorio<IPessoa>): void
    {
        new ComandoDiferenciar(repositorioA, repositorioB, repositorioC).Executar();
    }
}