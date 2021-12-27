import { RespostaInvalidaException } from "./exceptions/resposta-invalida-exception";

export class ResultadoProva
{
    private _acertos:number;
    private _nota:number;
    
    constructor() 
    {
        this._nota = 0;
        this._acertos = 0;
    }

    public questaoCorreta(questao:number)
    {
        this.validaIdQuestao(questao);
        this._acertos++;
        this.atribuiValorNota(questao);
    }

    public acertos():number
    {
        return this._acertos;
    }

    public nota():number
    {
        return this._nota;
    }

    private validaIdQuestao(questao:number):void
    {
        if(questao > 15)
        {
            throw new RespostaInvalidaException("Número de resposta inválido.");
        }
    }

    private atribuiValorNota(questao:number):void
    {
        if(questao <= 10)
        {
            this._nota = this._nota + 0.5;
            return;
        }

        this._nota = this._nota + 1;
    }
}