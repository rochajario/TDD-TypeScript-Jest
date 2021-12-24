import {Aluno} from "../../src/lista-1/exercicio-1/Aluno"

const dummyNome:string = "Josivaldo";
const dummyMatricula:string = "abc123";
const media = 6;

describe('Lista 1 - Exercício 1', ()=>{
    describe('Identifica alunos conforme média ponderada das notas atribuídas',()=>{
    
        it('Dado aluno com notas baixas, verifica se está abaixo da média',()=>{
    
            const notasProva: number[] = [1,2];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 3);
            
            expect(aluno.media).toBeLessThan(media);
        });
    
        it('Dado aluno com notas médias, verifica se aluno está na média', ()=>{
            const notasProva: number[] = [6.5, 6.5];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 6.5);
            expect(aluno.media).toBeGreaterThan(media);
            expect(aluno.media).toBeLessThan(7);
        });
    
        it('Dado aluno com notas altas, verifica se aluno está na acima da média', ()=>{
            const notasProva: number[] = [9, 8];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 10);
            expect(aluno.media).toBeGreaterThan(8);
        });
    });
    
    describe('Identifica quanto falta para alunos atingirem a média',()=>{
        
        it('Dado aluno com notas baixas, identifica que faltam pontos para atingir a média',()=>{
    
            const notasProva: number[] = [1,2];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 3);
            
            expect(aluno.final).toBe(8.2);
        });
    
        it('Dado aluno com notas médias, identifica que não faltam pontos para atingir a média', ()=>{
            const notasProva: number[] = [6.5, 6.5];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 6.5);
    
            expect(aluno.final).toBe(0);
        });
    
        it('Dado aluno com notas altas, identifica que não faltam pontos para atingir a média', ()=>{
            const notasProva: number[] = [9, 8];
            const aluno = new Aluno(dummyNome, dummyMatricula, notasProva, 10);
            
            expect(aluno.final).toBe(0);
        });
    });
});

