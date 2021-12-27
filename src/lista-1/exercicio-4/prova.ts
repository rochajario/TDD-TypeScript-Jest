import { BaseQuestionario } from "./base-questionario";
import { Dicionario } from "./dicionario/dicionario";
import { Gabarito } from "./gabarito";
import { RespostaInvalidaException } from "./exceptions/resposta-invalida-exception";
import { ProvaIncompletaException } from "./exceptions/prova-incompleta-exception";
import { ResultadoProva } from "./resultado-prova";

export class Prova extends BaseQuestionario
{
    private respostas:Dicionario<number,string>;
    private contadorDeRepostas:number;

    private resultadoProva:ResultadoProva;

    constructor(private gabarito:Gabarito) {
        super();
        this.respostas = new Dicionario<number,string>();
        this.contadorDeRepostas = 1;

        this.resultadoProva = new ResultadoProva();
    }

    public respostaAluno(resposta:string):void
    {
        if(this.contadorDeRepostas > 15)
        {
            throw new RespostaInvalidaException("Número de respostas excedido.");
        }

        this.computaResposta(this.contadorDeRepostas, this.formataResposta(resposta));
        this.contadorDeRepostas++;
    }

    public acertos():number
    {
        this.seProvaEstiverIncompleta("Impossível obter número de acertos");
        return this.resultadoProva.acertos();
    }   

    public nota():number
    {
        this.seProvaEstiverIncompleta("Impossível obter nota");
        return this.resultadoProva.nota();
    }

    public maior(compara:Prova):number
    {
        this.seProvaEstiverIncompleta("Impossível comparar notas");
        
        if(compara.acertos() > this.acertos())
        {
            return compara.nota();
        }

        if(compara.nota() > this.nota())
        {
            return compara.nota();
        }

        return this.nota();
    }

    private seProvaEstiverIncompleta(mensagemErro:string):void
    {
        if(this.contadorDeRepostas < 15)
        {
            throw new ProvaIncompletaException(mensagemErro);
        }
    }

    private computaResposta(idReposta:number, resposta:string):void
    {
        const respostaFormatada = this.formataResposta(resposta);
        this.respostas.Add(idReposta, respostaFormatada);

        if(respostaFormatada ==  this.gabarito.respostaQuestao(idReposta))
        {
            this.resultadoProva.questaoCorreta(idReposta);
        }
    }
}