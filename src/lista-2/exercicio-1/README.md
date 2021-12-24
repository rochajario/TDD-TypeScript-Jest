# Lista 2 - Questão 1

> Escreva uma classe herdeira à voo criada na lista de exercícios anterior, que permita definir quantas
cadeiras existem no máximo no voo e se dividir o avião em ala de fumantes e não fumantes. Para isto esta
classe deve acrescentar os atributos necessários e adicionar os seguintes métodos:

<table>
    <tr>
        <th>construtor</th>
        <td>Além dos parâmetros recebidos pelo construtor da superclasse, receberá também como parâmetros o número de vagas do voo e quantas cadeiras serão destinadas para fumantes</td>
    </tr>
    <tr>
        <th>maxVagas</th>
        <td>Determina o número máximo de cadeiras no voo</td>
    </tr>
    <tr>
        <th>cadeirasFumantes</th>
        <td>determina quantas cadeiras estão destinadas aos fumantes (as demais serão automaticamente destinadas aos não fumantes); as cadeiras dos fumantes serão sempre as últimas do avião</td>
    </tr>
    <tr>
        <th>tipo</th>
        <td>recebe como parâmetro o número da cadeira e retorna ‘F’ se for uma cadeira para fumantes e ‘N’ se for para não fumantes</td>
    </tr>
</table>

> Os métodos proximoLivre, verifica e ocupa da superclasse devem ser adaptados para tratar o número
máximo de vagas informado, ao invés do número fixo de 100.
---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-2\exercicio-1.test.ts -t "Lista 2 - Exercício 1"
```

Nome do Teste:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-2/exercicio-1.test.ts" -t "Lista 2 - Exercício 1 Nome do Teste"
```