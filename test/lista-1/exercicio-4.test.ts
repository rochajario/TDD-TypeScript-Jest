import {Gabarito} from '../../src/lista-1/exercicio-4/gabarito';
import {Prova} from '../../src/lista-1/exercicio-4/prova';
import { RespostaInvalidaException } from '../../src/lista-1/exercicio-4/exceptions/resposta-invalida-exception';
import { ProvaIncompletaException } from '../../src/lista-1/exercicio-4/exceptions/prova-incompleta-exception';

describe("Lista 1 - Exercício 4",()=>{

    describe("Identifica comportamento anômalo previsto na classe Gabarito",()=>{
        it("Obtem Erro na construção de novo gabarito com parametros inválidos",()=>{
            try
            {
                const listaRespostas = ['f'];
                new Gabarito(listaRespostas);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(RespostaInvalidaException);
            }
        })
    })
    
    describe("Valida funcionamento da implementação de gabarito",()=>{
        const listaRespostas = ['a','b','c','d','e'];
        const gabarito = new Gabarito(listaRespostas);

        it("Dada Lista de Respostas ordenada Verifica método 'respostaQuestao'",()=>{
            for(let i=0; i<5; i++)
            {
                let idPergunta = i+1;
                let respostaEmMaiusculo = listaRespostas[i].toUpperCase();
                expect(gabarito.respostaQuestao(idPergunta)).toBe(respostaEmMaiusculo);
            }
        })
    })

    describe("Valida propriedades de uma Prova",()=>{
        let respostas = ['a','b','c','d','e','a','b','c','d','e','a','b','c','d','e']
        const prova = new Prova(new Gabarito(respostas));

        it("Recebe erro ao tentar adicionar mais de 15 respostas",()=>{
            respostas.forEach(resposta =>{
                prova.respostaAluno(resposta);
            })

            try
            {
                prova.respostaAluno('a');
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(RespostaInvalidaException);
            }
        })

        it("Recebe erro ao tentar verificar acertos sem finalizar uma prova",()=>{
            try
            {
                prova.acertos();
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(ProvaIncompletaException);
            }
        })

        it("Recebe erro ao tentar verificar nota sem finalizar uma prova",()=>{
            try
            {
                prova.nota();
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(ProvaIncompletaException);
            }
        })

        it("Recebe erro ao tentar comparar notas sem finalizar uma prova",()=>{
            try
            {
                prova.maior(prova);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(ProvaIncompletaException);
            }
        })
    })

    describe("Valida resultados de uma prova",()=>{
        let respostas = ['a','b','c','d','e','a','b','c','d','e','a','b','c','d','e']
        const prova = new Prova(new Gabarito(respostas));

        respostas.forEach(resposta =>{
            prova.respostaAluno(resposta);
        })

        it("Valida quantidade de acertos em prova que aluno acerta 100% das questões",()=>{
            expect(prova.acertos()).toBe(15);
        })

        it("Valida nota em prova que aluno acerta 100% das questões",()=>{
            expect(prova.nota()).toBe(10);
        })
    })

    describe("Valida Critérios de comparação",()=>{
        const respostas = ['a','b','c','d','e','a','b','c','d','e','a','b','c','d','e'];
        const gabarito = new Gabarito(respostas);
        

        it("Obtem a nota da comparada quando a quantidade de acertos da comparadora é menor",()=>{
            const respostasComparadora = ['a','b','c','d','a','c','d','c','d','e','a','b','c','d','e'];
            const comparada = new Prova(gabarito);
            const comparadora = new Prova(gabarito);

            respostasComparadora.forEach(resposta =>{
                comparadora.respostaAluno(resposta);
            })

            respostas.forEach(resposta =>{
                comparada.respostaAluno(resposta);
            })

            expect(comparadora.maior(comparada)).toBe(comparada.nota());
        })
        it("Obtem a nota da comparada quando nota da comparadora é menor e a quantidade de acertos é igual",()=>{
            const respostasComparadora = ['a','b','c','d','e','a','b','c','d','e','e','c','d','b','a'];
            const respostasComparada = ['d','c','a','b','d','a','b','c','d','e','a','b','c','d','e'];
            const comparada = new Prova(gabarito);
            const comparadora = new Prova(gabarito);

            respostasComparadora.forEach(resposta =>{
                comparadora.respostaAluno(resposta);
            })

            respostasComparada.forEach(resposta =>{
                comparada.respostaAluno(resposta);
            })

            expect(comparadora.maior(comparada)).toBe(comparada.nota());
        })

        it("Obtem a prova que compara quando nota e quantidade de acertos são iguais",()=>{
            const comparada = new Prova(gabarito);
            const comparadora = new Prova(gabarito);

            respostas.forEach(resposta =>{
                comparadora.respostaAluno(resposta);
            })

            respostas.forEach(resposta =>{
                comparada.respostaAluno(resposta);
            })

            expect(comparadora.maior(comparada)).toBe(comparadora.nota());
        })
    })
})