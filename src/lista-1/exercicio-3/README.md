# Listagem I - Questão III

> Escreva uma classe em que cada objeto representa um vôo que acontece em determinada data. Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação
das vagas. A classe deve ter os seguintes métodos:

<table>
    <tr>
        <th>Construtor</th>
        <td>Configura os dados do vôo (recebidos como parâmetro): número do vôo, data (para armazenar a data utilize um objeto da classe Data, criada na questão anterior)</td>
    </tr>
    <tr>
        <th>ProximoLivre</th>
        <td>Retorna o número da próxima cadeira livre</td>
    </tr>
    <tr>
        <th>EstaOcupado</th>
        <td>Verifica se o número da cadeira recebido como parâmetro está ocupada</td>
    </tr>
    <tr>
        <th>Ocupa</th>
        <td>Ocupa determinada cadeira do vôo, cujo número é recebido como parâmetro, e retorna verdadeiro se a cadeira ainda não estiver ocupada (operação foi bem sucedida) e falso caso contrário</td>
    </tr>
    <tr>
        <th>Vagas</th>
        <td>Retorna o número de cadeiras vagas disponíveis (não ocupadas) no vôo</td>
    </tr>
    <tr>
        <th>getVoo</th>
        <td>Retorna o número do vôo</td>
    </tr>
    <tr>
        <th>getData</th>
        <td>Retorna a data do vôo (na forma de objeto)</td>
    </tr>
</table>

---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-3.test.ts -t "Lista 1 - Exercício 3"
```

Valida critérios de criação da classe Voo:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-3.test.ts" -t "Lista 1 - Exercício 3 Valida critérios de criação da classe Voo"
```

Valida critérios de reseva de assento:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-3.test.ts" -t "Lista 1 - Exercício 3 Valida critérios de reseva de assento"
```