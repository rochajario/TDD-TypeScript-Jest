# Listagem I - Questão I

> Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
trabalho. Escreva os seguintes métodos para esta classe:


<table>
    <tr>
        <th>Média</th>
        <td> Calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2) </td>
    </tr>
    <tr>
        <th>Final</th>
        <td> Calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final). </td>
    </tr>
</table>

---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-2.test.ts -t "Lista 1 - Exercício 1"
```

Identifica alunos conforme média ponderada das notas atribuídas:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-1.test.ts" -t "Lista 1 - Exercício 1 Identifica alunos conforme média ponderada das notas atribuídas"
```

Identifica quanto falta para alunos atingirem a média:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-1.test.ts" -t "Lista 1 - Exercício 1 Identifica quanto falta para alunos atingirem a média"
```