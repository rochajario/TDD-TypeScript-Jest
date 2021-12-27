import { Data } from "../../src/lista-1/exercicio-2/Data";
import {Equipamentos} from "../../src/lista-2/exercicio-2/equipamentos"
import {EquipamentosCorrigidos} from "../../src/lista-2/exercicio-2/equipamentos-corrigidos"

describe("Lista 2 - Exercício 2",()=>{
    describe("Valida critérios gerais da classe Equipamentos",()=>{
        const equipamentos = new Equipamentos(3);
        equipamentos.setValor(0,210);
        equipamentos.setValor(1,220);
        equipamentos.setValor(2,230);
        it("Valida quantidade de equipamentos",()=>{
            expect(equipamentos.getQuantidadeEquipamentos()).toBe(3);
        })
        it("Valida valor do utilmo equipamento",()=>{
            expect(equipamentos.getValor(2)).toBe(230);
        })
    })

    describe("Valida critérios da classe EquipamentosCorrigidos relacionados à data",()=>{
        const equipamentos = defaultSetup();

        it("Valida mês por extenso das datas atribuídas",()=>{
            expect(equipamentos.getMesCompra(0)).toBe("Maio");
            expect(equipamentos.getMesCompra(1)).toBe("Abril");
        })
        it("Valida objeto data atribuído a cada equipamento",()=>{
            expect(equipamentos.getDataCompra(0).getDia()).toBe(18);
            expect(equipamentos.getDataCompra(0).getMes()).toBe(5);
            expect(equipamentos.getDataCompra(0).getAno()).toBe(2021);
            expect(equipamentos.getDataCompra(1).getDia()).toBe(6);
            expect(equipamentos.getDataCompra(1).getMes()).toBe(4);
            expect(equipamentos.getDataCompra(1).getAno()).toBe(1968);
        })
    })

    describe("Valida critérios da classe EquipamentosCorrigidos relacionados à data",()=>{
        const equipamentos = defaultSetup();

        it("Valida mês por extenso das datas atribuídas",()=>{
            expect(equipamentos.getMesCompra(0)).toBe("Maio");
            expect(equipamentos.getMesCompra(1)).toBe("Abril");
        })
        it("Valida objeto data atribuído a cada equipamento",()=>{
            expect(equipamentos.getDataCompra(0).getDia()).toBe(18);
            expect(equipamentos.getDataCompra(0).getMes()).toBe(5);
            expect(equipamentos.getDataCompra(0).getAno()).toBe(2021);
            expect(equipamentos.getDataCompra(1).getDia()).toBe(6);
            expect(equipamentos.getDataCompra(1).getMes()).toBe(4);
            expect(equipamentos.getDataCompra(1).getAno()).toBe(1968);
        })
    })

    describe("Valida critérios relacionados à substituição de itens",()=>{
        const equipamentosA = defaultSetup();
        it("Verifica substituição do item 0",()=>{
            const equipamentosB = defaultSetup();
            equipamentosB.setDataCompra(0, new Data(11,11,2011));
            equipamentosB.setValor(0, 1110);

            equipamentosA.substitui(equipamentosB);

            expect(equipamentosA.getDataCompra(0).getDia()).toBe(11);
            expect(equipamentosA.getDataCompra(0).getMes()).toBe(11);
            expect(equipamentosA.getDataCompra(0).getAno()).toBe(2011);
            expect(equipamentosA.getValor(0)).toBe(1110);
        })

        it("Falha ao substituir por objeto com quantidade de itens diferente",()=>{
            const equipamentosB = new EquipamentosCorrigidos(1);
            try
            {
                equipamentosA.substitui(equipamentosB);
            }
            catch(error)
            {
                expect(error).toBeInstanceOf(Error);
            }
        })
    })

    describe("Valida critérios relacionados à correção dos valores de itens",()=>{
        const equipamentos = defaultSetup();
        for(let i=0; i<4; i++)
        {
            equipamentos.corrige(10);        
        }
        it("Deveria alterar o item 1 com acréscimo de 10% em seu valor",()=>{
            expect(equipamentos.getValor(0)).toBe(210);
            expect(equipamentos.getValor(1)).toBe(242);
        })
    })
})

function defaultSetup():EquipamentosCorrigidos
{
    const equipamentos = new EquipamentosCorrigidos(2);
    equipamentos.setValor(0,210);
    equipamentos.setDataCompra(0,new Data(18,5,2021));
    equipamentos.setValor(1,220);
    equipamentos.setDataCompra(1,new Data(6,4,1968));
    return equipamentos;
}