import { IPessoa } from "./interfaces/iPessoa";
import { IRepositorio } from "./interfaces/iRepositorio";

export class PessoaRepositorio implements IRepositorio<IPessoa>
{
    private ultimoItemRecuperado: number;
    private pessoas: Array<IPessoa>;
    constructor() {
        this.pessoas = Array<IPessoa>();
        this.ultimoItemRecuperado=0;
    }

    guarda(item: IPessoa): void {
        const cpfItem = item.getCpf();
        if(this.pessoas.filter(p => p.getCpf()==cpfItem)[0])
        {
            throw Error("Já existe uma pessoa com este CPF cadastrado.");
        }
        this.pessoas.push(item);
    }

    recupera(id: string): IPessoa {
        let pessoa = this.pessoas.filter(p => p.getCpf()==id)[0];
        this.ultimoItemRecuperado = this.pessoas.indexOf(pessoa);
        return pessoa;
    }
    primeiro(): IPessoa {
        const pessoa = this.pessoas[0];
        this.ultimoItemRecuperado = 0;
        return pessoa;
    }
    proximo(): IPessoa {
        if(this.ultimoItemRecuperado == (this.pessoas.length -1))
        {
            throw Error("Não há próxima pessoa. Para utilizar esta função novamente adicione otra pessoa.");
        }
        this.ultimoItemRecuperado++;
        const pessoa = this.pessoas[this.ultimoItemRecuperado];
        return pessoa;
    }
}