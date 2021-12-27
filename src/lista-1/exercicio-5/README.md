# Listagem I - Questão V

>Escreva uma classe que implemente uma lista de tamanho variável baseada em um vetor. A classe define os
seguintes métodos

---

> IMPORTANTE: Implementações próprias da linguagem de programação não devem ser utilizadas.

---

<table>
    <tr>
        <th>insert</th>
        <td>recebe como parâmetro uma string e a coloca na próxima posição disponível do vetor; note que o vetor cresce automaticamente, portanto, se a inserção ultrapassar o tamanho inicial estabelecido na criação, por exemplo, o vetor deve aumentar seu tamanho automaticamente</td>
    </tr>
    <tr>
        <th>get</th>
        <td>recebe como parâmetro uma posição do vetor e retorna a string que estiver naquela posição; se a posição não estiver ocupada ou ultrapassar o tamanho do vetor, este método retorna nulo</td>
    </tr>
    <tr>
        <th>size</th>
        <td>retorna o número de elementos inseridos no vetor (independente do tamanho do mesmo)</td>
    </tr>
</table>


---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-5.test.ts -t "Lista 1 - Exercício 5"
```

Valida propriedades durante criaçao de Lista:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-5.test.ts" -t "Lista 1 - Exercício 5 Valida propriedades durante criaçao de Lista"
```

Valida propriedades de Lista ao inserir novos itens:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-5.test.ts" -t "Lista 1 - Exercício 5 Valida propriedades de Lista ao inserir novos itens"
```