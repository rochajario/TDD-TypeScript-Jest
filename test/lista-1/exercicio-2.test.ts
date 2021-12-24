import { Data } from "../../src/lista-1/exercicio-2/Data";
import {ParametroDataErro} from "../../src/lista-1/exercicio-2/ComponentesData/ParametroDataErro";

describe('Testa Diversos aspectos do objeto Data', ()=>{
    describe('Valida construção de objeto "Data"',()=>{
        describe('Deveria obter erro ao tentar criar classe com Dia fora de intervalo aceitável',()=>{
            it('Levanta exceção quando dia é menor que 0',()=>{
                try
                {
                    new Data(-1,1,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
            it('Levanta exceção quando dia é igual a 0',()=>{
                try
                {
                    const data = new Data(0,1,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
            it('Levanta exceção quando dia é maior que 31',()=>{
                try
                {
                    const data = new Data(32,1,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
        });
    
        describe('Deveria obter erro ao tentar criar classe com Mês fora de intervalo aceitável',()=>{
            it('Levanta exceção quando Mês é menor que 1',()=>{
                try
                {
                    new Data(1,-1,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
            it('Levanta exceção quando Mês é igual a 0',()=>{
                try
                {
                    new Data(1,0,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
            it('Levanta exceção quando Mês é maior que 31',()=>{
                try
                {
                    new Data(1,13,2000);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
        });
    
        describe('Deveria obter erro ao tentar criar classe com Ano fora de intervalo aceitável',()=>{
            it('Levanta exceção quando Ano é igual a 0',()=>{
                try
                {
                    new Data(1,1,0);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
    
            it('Levanta exceção quando Ano é menor que 1',()=>{
                try
                {
                    new Data(1,1,-1);
                }
                catch(error)
                {
                    expect(error).toBeInstanceOf(ParametroDataErro);
                }
            });
            
        });
    });

    describe('Valida obtenção de partes específicas da data', ()=>{    
        const data = new Data(10,11,2021);
        
        it('Obtém Dia Corretamente',()=>{
            expect(data.getDia()).toBe(10);
        });
        it('Obtém Mês Corretamente',()=>{
            expect(data.getMes()).toBe(11);
        });
        it('Obtém Ano Corretamente',()=>{
            expect(data.getAno()).toBe(2021);
        });
    });

    describe('Valida obtenção de Mêses por extenso', ()=>{
        it('Valida mês de Janeiro',()=>{
            const data = new Data(1,1,2021);
            expect(data.getMesExtenso()).toBe("Janeiro");
        });

        it('Valida mês de Junho',()=>{
            const data = new Data(1,6,2021);
            expect(data.getMesExtenso()).toBe("Junho");
        });

        it('Valida mês de Dezembro',()=>{
            const data = new Data(1,12,2021);
            expect(data.getMesExtenso()).toBe("Dezembro");
        });
    });

    describe('Valida Critérios para identificação de Ano Bissexto', ()=>{
        it('Identifica anos como Bissexto',()=>{
            const anosBissextos: Array<number> = [
                1988,
                1992,
                2000,
                2004
            ];

            anosBissextos.forEach(ano =>{
                var data = new Data(1,1,ano);
                expect(data.isBissexto()).toBe(true);
            })
        });

        it('Identifica anos como Não Bissexto',()=>{
            const anosBissextos: Array<number> = [
                1989,
                1993,
                2001,
                2005
            ];

            anosBissextos.forEach(ano =>{
                var data = new Data(1,1,ano);
                expect(data.isBissexto()).toBe(false);
            })
        });
    });
});
