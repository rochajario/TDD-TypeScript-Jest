import {VooComFumantes} from "../../src/lista-2/exercicio-1/voo-com-fumantes";
import {Data} from "../../src/lista-1/exercicio-2/Data";
describe("Lista 2 - Exercício 1",()=>{
    const dummyNumeroVoo = 123;
    const dummyDataVoo = new Data(18,5,1993);

    describe("Valida Construção de Objeto Voo Com Fumantes",()=>{
        it("Não aceita voo com exclusividade de fumantes",()=>{
            try
            {
                new VooComFumantes(dummyNumeroVoo, dummyDataVoo, 10, 10);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(Error);
            }
        })        
    })

    describe("Valida utilização de métodos extendidos",()=>{
        const voo = new VooComFumantes(dummyNumeroVoo, dummyDataVoo, 80, 5);

        it("Obtém a quantidade máxima de assentos",()=>{
            expect(voo.maxVagas()).toBe(80);
        })
        it("Obtém a quantidade de assentos reservados para fumantes",()=>{
            expect(voo.cadeirasFumantes()).toBe(5);
        })

        it("Verifica se cadeiras de 1 a 75 são para não fumantes",()=>{
            for(let i = 1; i < 75; i++)
            {
                expect(voo.tipo(i)).toBe("Não Fumante");
            }
        })

        it("Verifica se cadeiras de 76 a 80 são para fumantes",()=>{
            for(let i = 76; i < 80; i++)
            {
                expect(voo.tipo(i)).toBe("Fumante");
            }
        })
    })
})