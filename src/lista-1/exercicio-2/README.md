# Listagem I - Questão II

> Escreva uma classe Data cuja instância (objeto) represente uma data. Esta classe deverá dispor dos
seguintes métodos:

<table>
    <tr>
        <th>Construtor</th>
        <td> Define a data que determinado objeto (através de parâmetro), este método verifica se a data está correta, caso não esteja é levantado erro com a descrição cabível;</td>
    </tr>
    <tr>
        <th>Compara</th>
        <td> 
            Recebe como parâmetro um outro objeto da Classe data, compare com a data corrente e retorne:
            <ul>
                <li>0 se as datas forem iguais</li>
                <li>1 se a data corrente for maior que a do parâmetro</li>
                <li>-1 se a data do parâmetro for maior que a corrente</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>getDia</th>
        <td>Retorna o dia da data</td>
    </tr>
    <tr>
        <th>getMes</th>
        <td>Retorna o mês da data</td>
    </tr>
    <tr>
        <th>getMesExtenso</th>
        <td>Retorna o mês por extenso da data</td>
    </tr>
    <tr>
        <th>getAno</th>
        <td>Retorna o ano da data</td>
    </tr>
    <tr>
        <th>isBissexto</th>
        <td>Retorna verdadeiro se o ano da data corrente for bissexto e falso caso contrário</td>
    </tr>
</table>

---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-2.test.ts -t "Lista 1 - Exercício 2"
```

Validação de critérios de construção da classe:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-2.test.ts" -t "Testa Diversos aspectos do objeto Data Valida construção de objeto "Data""
```

Validação de critérios de obtenção de valores de unidades de data:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-2.test.ts" -t "Testa Diversos aspectos do objeto Data Valida obtenção de partes específicas da data"
```

Validação de critérios de obtenção de nomes de meses por extenso:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-2.test.ts" -t "Testa Diversos aspectos do objeto Data Valida obtenção de Mêses por extenso"
```

Validação de critérios de identificação de Ano Bissexto:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-2.test.ts" -t"Testa Diversos aspectos do objeto Data Valida Critérios para identificação de Ano Bissexto"
```