export class ProvaIncompletaException extends Error
{
    constructor(mensagemErro:string) {
        super(`Prova Incompleta: ${mensagemErro}.`);
    }
}