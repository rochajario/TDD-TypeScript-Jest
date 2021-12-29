import { IPessoa } from "./interfaces/iPessoa";

export class Pessoa implements IPessoa
{
    constructor(private cpf:string, private nome:string) {        
    }

    getCpf(): string {
        return this.cpf;
    }
    getNome(): string {
        return this.nome;
    }
}