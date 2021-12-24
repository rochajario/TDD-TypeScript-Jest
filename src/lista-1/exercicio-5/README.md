# Lista 1 - Questão 5

> A linguagem Java dispõe de um suporte nativo a vetores, que exige a definição de seu tamanho no
momento da instanciação. Depois de instanciado, o tamanho do vetor não pode ser modificado. Escreva
uma classe chamada Vetor cujos objetos simulem vetores de tamanho variável. A classe define os
seguintes métodos

---

> IMPORTANTE: Implementações próprias da linguagem de programação não devem ser utilizadas.

---

<table>
    <tr>
        <th>Construtor</th>
        <td>Recebe como parâmetro o tamanho inicial do vetor</td>
    </tr>
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

Nome do Teste:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-5.test.ts" -t "Lista 1 - Exercício 5 Nome do Teste"
```