import {ListaOrdenada} from "../../src/lista-1/exercicio-6/lista-ordenada"
describe("Lista 1 - Exercício 6",()=>{
    describe("Valida Propriedades da Lista Ordenada",()=>{
        const lista = new ListaOrdenada();
        lista.insert("c");
        lista.insert("x");
        lista.insert("a");

        it("Valida Tamanho da lista",()=>{
            expect(lista.size()).toBe(3);
        })
        it("Valida Ordenação da lista",()=>{
            expect(lista.get(0)).toBe("a");
            expect(lista.get(1)).toBe("c");
            expect(lista.get(2)).toBe("x");
        })
    })

    describe("Valida Propriedades da Lista Ordenada após união com outra lista ordenada",()=>{
        const listaA = new ListaOrdenada();
        listaA.insert("c");
        listaA.insert("x");
        listaA.insert("a");

        const listaB = new ListaOrdenada();
        listaB.insert("d");
        listaB.insert("u");
        listaB.insert("v");

        listaA.merge(listaB);

        it("Valida Tamanho da lista",()=>{
            expect(listaA.size()).toBe(6);
        })
        it("Valida Ordenação da lista",()=>{
            expect(listaA.get(0)).toBe("a");
            expect(listaA.get(1)).toBe("c");
            expect(listaA.get(2)).toBe("d");
            expect(listaA.get(3)).toBe("u");
            expect(listaA.get(4)).toBe("v");
            expect(listaA.get(5)).toBe("x");
        })
    })

})
