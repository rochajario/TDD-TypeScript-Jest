import { RespostaInvalidaException } from "./exceptions/resposta-invalida-exception";

export abstract class BaseQuestionario
{
    protected formataResposta(resposta:string):string
    {
        var caractereResposta = resposta.charAt(0).toUpperCase();
        const regex = /^[ABCDE]/;
        if(!regex.test(caractereResposta))
        {
            throw new RespostaInvalidaException("Resposta fora do intervalo aceitável (A,B,C,D,E).");
        }
        return caractereResposta;
    }
}