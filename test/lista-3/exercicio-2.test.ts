import {Pluviometro} from "../../src/lista-3/exercicio-2/pluviometro";
import {TipoPluviometro} from "../../src/lista-3/exercicio-2/enum-pluviometros";
import {CaminhaoAlfa} from "../../src/lista-3/exercicio-2/caminhoes/caminhao-alfa";
import {CaminhaoBeta} from "../../src/lista-3/exercicio-2/caminhoes/caminhao-beta";

describe("Lista 3 - Exercício 2",()=>{
    describe("Valida critérios de criação de Pluviometro",()=>{
        const pluviometroA = new Pluviometro(TipoPluviometro.Convencional);
        const pluviometroB = new Pluviometro(TipoPluviometro.Semiautomatico);
        const pluviometroC = new Pluviometro(TipoPluviometro.Automatico);

        it("Obtém Tipo do Pluviometro Corretamente",()=>{
            expect(pluviometroA.getTipo()).toBe("Convencional");
            expect(pluviometroB.getTipo()).toBe("Semiautomatico");
            expect(pluviometroC.getTipo()).toBe("Automatico");
        })
        it("Obtém Peso do Pluviometro Corretamente",()=>{
            expect(pluviometroA.getPeso()).toBe(2000);
            expect(pluviometroB.getPeso()).toBe(4000);
            expect(pluviometroC.getPeso()).toBe(6000);
        })
        it("Obtém Capacidade Corretamente",()=>{
            expect(pluviometroA.getCapacidade()).toBe(4);
            expect(pluviometroB.getCapacidade()).toBe(8);
            expect(pluviometroC.getCapacidade()).toBe(12);
        })
    })

    describe("Valida critérios de Caminhão Alfa",()=>{
        const pluviometroA = new Pluviometro(TipoPluviometro.Convencional);
        const pluviometroB = new Pluviometro(TipoPluviometro.Semiautomatico);
        const pluviometroC = new Pluviometro(TipoPluviometro.Automatico);
        it("Deveria Lançar erro por exceço de Peso",()=>{
            const caminhaoAlfa = new CaminhaoAlfa(5);
            try
            {
                caminhaoAlfa.inserePluviometro(pluviometroC);
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Transbordo da capacidade de transporte em 1t.");
            }
        })
        it("Deveria lançar erro por transbordo de capacidade de Peso",()=>{
            const caminhaoAlfa = new CaminhaoAlfa(5);
            caminhaoAlfa.inserePluviometro(pluviometroA);
            caminhaoAlfa.inserePluviometro(pluviometroA);
            try
            {
                caminhaoAlfa.inserePluviometro(pluviometroB);
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Transbordo da capacidade de transporte em 3t.");
            }
        })
        it("Deverua lançar erro por exceder quantidade de itens permitidos",()=>{
            const caminhaoAlfa = new CaminhaoAlfa(1);
            caminhaoAlfa.inserePluviometro(pluviometroA);
            try
            {
                caminhaoAlfa.inserePluviometro(pluviometroB);
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Limite de equipamentos atingido.");
            }
        })
    })

    describe("Valida critérios de Caminhão Beta",()=>{
        const pluviometroA = new Pluviometro(TipoPluviometro.Convencional);
        const pluviometroB = new Pluviometro(TipoPluviometro.Semiautomatico);
        const pluviometroC = new Pluviometro(TipoPluviometro.Automatico);
        it("Deveria Lançar erro por tentativa de adicionar item de mesmo tipo",()=>{
            const caminhaoBeta = new CaminhaoBeta(5);
            caminhaoBeta.inserePluviometro(pluviometroC);
            try
            {
                caminhaoBeta.inserePluviometro(pluviometroC);
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Não é possível adicionar mais um Pluviometro Automatico.");
            }
        })

        it("Deveria lançar erro por exceder quantidade de itens permitidos",()=>{
            const caminhaoBeta = new CaminhaoBeta(1);
            caminhaoBeta.inserePluviometro(pluviometroA);
            try
            {
                caminhaoBeta.inserePluviometro(pluviometroB);
            }
            catch(error)
            {
                const testError = error as Error;
                expect(testError.message).toBe("Limite de equipamentos atingido.");
            }
        })
    })
})