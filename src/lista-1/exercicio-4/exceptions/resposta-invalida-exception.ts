export class RespostaInvalidaException extends Error
{
    constructor(mensagem:string) {
        super(mensagem);
    }
}