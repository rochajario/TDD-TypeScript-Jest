# Lista 1 - Questão 5

> Cria uma classe VetorOrdenado que é uma variante da classe anterior, com as seguintes modificações
e acréscimos:

<table>
    <tr>
        <th>insert</th>
        <td>recebe uma string como parâmetro e a insere em uma posição tal que o vetor de nomes se mantenha sempre em ordem alfabética</td>
    </tr>
    <tr>
        <th>merge</th>
        <td>recebe como parâmetro um outro objeto da classe VetorOrdenado e retorna um terceiro objeto da classe VetorOrdenado (criado dentro do método) que contém o merge do vetor corrente com aquele recebido como parâmetro</td>
    </tr>
</table>


---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-6.test.ts -t "Lista 1 - Exercício 6"
```

Nome do Teste:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-6.test.ts" -t "Lista 1 - Exercício 6 Nome do Teste"
```