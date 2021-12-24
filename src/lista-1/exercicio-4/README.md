# Lista 1 - Questão 4

> Considere a seguinte classe Java, cujo método respostaQuestao recebe como parâmetro o número de uma
questão e retorna a sua resposta correta, proveniente de um gabarito.

```Java
public class Gabarito
{
    public char respostaQuestao(int numeroQuestao)
    {
        //retorna letra correspondente à questão solicitada.
    }
}
```
> Escreva uma classe classe Prova em que cada objeto representa uma prova feita por um aluno. Esta
prova possui 15 questões de múltipla escolha (letras A a E). As 10 primeiras questões valem 0,5 ponto e as
5 últimas questões valem 1 ponto. Esta classe deverá controlar as questões respondidas pelo aluno. Para
isto, a classe deve implementar os métodos:

<table>
    <tr>
        <th>Construtor</th>
        <td>Recebe como parâmetro um objeto da classe Gabarito contendo o gabarito da prova</td>
    </tr>
    <tr>
        <th>respostaAluno</th>
        <td>recebe como parâmetro a resposta dada pelo aluno a uma questão; este método não recebe entre os parâmetros o número da questão, ele mesmo deve estabelecer um controle interno de modo que as questões sejam inseridas sequencialmente, ou seja, a primeira vez que o método é chamado, insere a primeira questão, a segunda, insere a segunda questão, e assim por diante.</td>
    </tr>
    <tr>
        <th>acertos</th>
        <td>retorna a quantidade de questões que o aluno acertou</td>
    </tr>
    <tr>
        <th>nota</th>
        <td>retorna a nota que o aluno tirou na prova</td>
    </tr>
    <tr>
        <th>maior</th>
        <td>recebe como parâmetro um outro objeto da classe Prova e retorna a nota do aluno que acertou mais questões; se houver empate, retorna a maior nota; se houver empate novamente, retorna a nota do aluno representado no objeto corrente</td>
    </tr>
</table>

---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-1\exercicio-4.test.ts -t "Lista 1 - Exercício 4"
```

Nome do Teste:

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-1/exercicio-4.test.ts" -t "Lista 1 - Exercício 4 Nome do Teste"
```