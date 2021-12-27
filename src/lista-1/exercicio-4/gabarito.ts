import { BaseQuestionario } from "./base-questionario";
import { Dicionario } from "./dicionario/dicionario";

export class Gabarito extends BaseQuestionario
{
    private questoes:Dicionario<number,string>;

    constructor(respostas:Array<string>) {
        super();
        this.questoes = new Dicionario<number, string>();

        let respostasFormatadas = this.validaRespostas(respostas);
        this.configuraGabarito(respostasFormatadas);
    }
    
    public respostaQuestao(numeroQuestao:number):string
    {
        return this.questoes.GetKey(numeroQuestao);
    }

    private validaRespostas(respostas: Array<string>):Array<string>
    {
        let respostasFormatadas = new Array<string>();
        respostas.forEach(resposta => {
            respostasFormatadas.push(this.formataResposta(resposta));
        });
        return respostasFormatadas;
    }

    private configuraGabarito(respostas: Array<string>):void 
    {
        for (let i = 0; i < respostas.length; i++) {
            let numeroQuestao = i + 1;
            this.questoes.Add(numeroQuestao, respostas[i]);
        }
    }
}