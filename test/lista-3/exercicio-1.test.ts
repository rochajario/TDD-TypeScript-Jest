import {IRepositorio} from "../../src/lista-3/exercicio-1/interfaces/iRepositorio";
import {IPessoa} from "../../src/lista-3/exercicio-1/interfaces/iPessoa";
import {PessoaRepositorio} from "../../src/lista-3/exercicio-1/pessoa-repositorio";
import {Pessoa} from "../../src/lista-3/exercicio-1/pessoa";
import {Utilitarios} from "../../src/lista-3/exercicio-1/utilitarios";

describe("Lista 3 - Exercício 1",()=>{
    describe("Valida critérios de adição e busca de pessoas",()=>{
        it("Deveria lançar erro ao detectar novas entradas com cpfs repetidos",()=>{
            let repo = adicionarSetPessoasA();
            try
            {
                repo.guarda(new Pessoa("123", "Alberto"));
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Já existe uma pessoa com este CPF cadastrado.");
            }
            
        })
        it("Deveria buscar pessoas adicionadas",()=>{
            let repo = adicionarSetPessoasA();

            expect(repo.recupera("123").getNome()).toBe("Fulany");
            expect(repo.recupera("321").getNome()).toBe("Beltrany");
            expect(repo.recupera("213").getNome()).toBe("Ciclany");
        })
        it("Deveria buscar a primeira pessoa",()=>{
            let repo = adicionarSetPessoasA();
            let pessoa = repo.primeiro();

            expect(pessoa.getCpf()).toBe("123");
            expect(pessoa.getNome()).toBe("Fulany");
        })
    })

    describe("Deveria validar os critérios de busca sequencial",()=>{
        it("Deveria buscar a segunda pessoa",()=>{
            let repo = adicionarSetPessoasA();
            repo.primeiro();
            let pessoa = repo.proximo();

            expect(pessoa.getCpf()).toBe("321");
            expect(pessoa.getNome()).toBe("Beltrany");
        })
        it("Deveria buscar a terceira pessoa",()=>{
            let repo = adicionarSetPessoasA();
            repo.primeiro();
            repo.proximo();
            let pessoa = repo.proximo();

            expect(pessoa.getCpf()).toBe("213");
            expect(pessoa.getNome()).toBe("Ciclany");
        })
        it("Deveria obter erro ao tentar buscar item inexistente",()=>{
            let repo = adicionarSetPessoasA();
            repo.primeiro();
            repo.proximo();
            repo.proximo();
            try
            {
                repo.proximo();
            }
            catch(error)
            {
                const testError = <Error>error
                expect(testError.message).toBe("Não há próxima pessoa. Para utilizar esta função novamente adicione otra pessoa.");
            }
        })
        it("Deveria obter próxima pessoa ao chegar ao limite do uso da função próximo e cadastrar nova pessoa",()=>{
            let repo = adicionarSetPessoasA();
            repo.primeiro();
            repo.proximo();
            repo.proximo();
            repo.guarda(new Pessoa("910","Astolfo"));
            const pessoa = repo.proximo();
            
            expect(pessoa.getCpf()).toBe("910");
            expect(pessoa.getNome()).toBe("Astolfo");
        })
    })

    describe("Valida critérios da classe Utilitários",()=>{
        it("Valida cópia de todos os itens do Set A para o Set B",()=>{
            let setA = adicionarSetPessoasA();
            let setB = adicionarSetPessoasB();

            const util = new Utilitarios();
            util.duplica(setA,setB);

            expect(setB.recupera("123").getNome()).toBe("Fulany");
            expect(setB.recupera("321").getNome()).toBe("Beltrany");
            expect(setB.recupera("213").getNome()).toBe("Ciclany");
        })

        it("Valida cópia para Set C de Todos itens de Set A que não Estão em Set B",()=>{
            let setA = adicionarSetPessoasA();
            setA.guarda(new Pessoa("978", "Asterix"));
            setA.guarda(new Pessoa("789", "Obelix"));
            setA.guarda(new Pessoa("879", "Ideafix"));

            let setB = adicionarSetPessoasA();
            let setC = new PessoaRepositorio();

            const util = new Utilitarios();
            util.diferencia(setA,setB,setC);

            expect(setC.recupera("978").getNome()).toBe("Asterix");
            expect(setC.recupera("789").getNome()).toBe("Obelix");
            expect(setC.recupera("879").getNome()).toBe("Ideafix");
        })
    })
})

function adicionarSetPessoasA():IRepositorio<IPessoa>
{
    let repo = new PessoaRepositorio();
    repo.guarda(new Pessoa("123", "Fulany"));
    repo.guarda(new Pessoa("321", "Beltrany"));
    repo.guarda(new Pessoa("213", "Ciclany"));
    return repo;
}

function adicionarSetPessoasB():IRepositorio<IPessoa>
{
    let repo = new PessoaRepositorio();
    repo.guarda(new Pessoa("978", "Asterix"));
    repo.guarda(new Pessoa("789", "Obelix"));
    repo.guarda(new Pessoa("879", "Ideafix"));
    return repo;
}