import {Data} from "../../src/lista-1/exercicio-2/Data";
import { AssentoException } from "../../src/lista-1/exercicio-3/AssentoException";
import {Voo} from "../../src/lista-1/exercicio-3/Voo";

describe('Lista 1 - Exercício 3',()=>{
    const dummyData = new Data(1,1,2021);
    const dummyNumeroVoo = 123;

    describe('Valida critérios de criação da classe Voo',()=>{
        const voo = new Voo(dummyNumeroVoo, dummyData);
        it('Valida quantidade de vagas após criar Voo',()=>{
            expect(voo.Vagas()).toBe(100);
        });

        it('Valida número do Voo',()=>{
            expect(voo.getVoo()).toBe(dummyNumeroVoo);
        });

        it('Valida data do Voo',()=>{
            expect(voo.getData()).toEqual(dummyData);
        });
    });

    describe('Valida critérios de reseva de assento',()=>{
        const voo = new Voo(dummyNumeroVoo, dummyData);
        voo.ocupa(1);
        voo.ocupa(2);

        it('Recebe erro ao tentar ocupar lugar já ocupado', ()=>{
            try
            {
                voo.ocupa(2);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(AssentoException);
            }
        });

        it('Valida quantidade de vagas após ocupar 2 assentos do Voo',()=>{
            expect(voo.Vagas()).toBe(98);
        });

        it('Obtém o número do próximo assento livre',()=>{
            expect(voo.proximoLivre()).toBe(3);
        });

        it('Confirma que está ocupado',()=>{
            expect(voo.estaOcupado(1)).toBeTruthy;
        });

        it('Confirma que está livre',()=>{
            expect(voo.estaOcupado(100 )).toBeFalsy;
        });
    });
});