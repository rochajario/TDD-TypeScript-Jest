import { OutOfBoundException } from "../../src/lista-1/exercicio-5/exceptions/out-of-bound-exception";
import {Lista} from "../../src/lista-1/exercicio-5/lista";

describe("Lista 1 - Exercício 5",()=>{
    describe("Valida propriedades durante criaçao de Lista",()=>{
        const lista = new Lista<string>();
        it("Ao criar nova lista deve possuir 0 objetos",()=>{
            expect(lista.size()).toBe(0);
        })
        it("Ao tentar obter índice não existente recebe um erro ", ()=>{
            try
            {
                lista.get(10);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(OutOfBoundException);
            }
        })
    })
    
    describe("Valida propriedades de Lista ao inserir novos itens",()=>{
        it("Ao adicionar 2 objetos, identifica o tamanho da lista",()=>{
            const listaAdicionada = new Lista<number>();
            listaAdicionada.insert(1);
            listaAdicionada.insert(2);
            expect(listaAdicionada.size()).toBe(2);
        })
    
        it("Ao adicionar 2 objetos, identifica seus respectivos valores",()=>{
            const listaAdicionada = new Lista<number>();
            listaAdicionada.insert(1);
            listaAdicionada.insert(2);
            expect(listaAdicionada.get(0)).toBe(1);
            expect(listaAdicionada.get(1)).toBe(2);
        })
    })
})