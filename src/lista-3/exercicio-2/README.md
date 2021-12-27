# Listagem III - Questão II

> Um   órgão   de   levantamento   meteorológico   possui   equipamentos   para   medir   a   pluviosidade
(pluviômetros), onde cada unidade é representada em um programa de computador por um objeto da
classe:

```Java
public class Pluviometro
{
    protected String tipo;
    public Pluviometro(String tipo)
    {
        :
    }
    public String getTipo()
    {
        :
    }
    public int getPeso()
    {
        :
    }
    public int getCapacidade()
    {
        :
    }
}
```

<table>
    <tr>
        <th>construtor</th>
        <td>Recebe como parâmetro o tipo de equipamento.</td>
    </tr>
    <tr>
        <th>getTipo</th>
        <td>Retorna o peso do pluviômetro em quilos. Este peso é calculado automaticamente pela classe a partir do tipo.</td>
    </tr>
    <tr>
        <th>getCapacidade</th>
        <td>Retorna a capacidade do pluviômetro em mililitros. Esta capacidade é calculada automaticamente pela classe à partir do tipo.</td>
    </tr>
</table>

> Os pluviômetros são carregados por caminhões que, no programa de computador, são representados
genericamente por objetos da classe Caminhao (esta classe não deve ser implementada nesta questão). A
classe define os seguintes métodos.

<table>
    <tr>
        <th>construtor</th>
        <td>Recebe como parâmetro o tipo de equipamento.</td>
    </tr>
    <tr>
        <th>inserePluviometro</th>
        <td>Recebe como parâmetro um objeto da classe Pluviometro e o coloca dentro do caminhão se a capacidade do mesmo permitir.</td>
    </tr>
</table>

> Cada  objeto   da   classe   representa   um   caminhão.   Esta   classe   não   possui   nenhum   atributo   e   seus
métodos não possuem implementação, pois serão implementados nas subclasses.
Escreva  duas classes herdeiras da classe  Caminhao  que representam dois tipos deste veículo com
capacidades diferentes:

<ul>
    <li><strong>Caminhão Alfa</strong></li>
    <ul>
        <li>Consegue carregar no máximo 5 toneladas de pluviômetros, independente da quantidade e tipo.</li>
    </ul>
    <li><strong>Caminhão Beta</strong></li>
    <ul>
       <li>Consegue carregar qualquer quantidade e peso de pluviômetros, no entanto, não é capaz de carregar mais do que um pluviômetro de cada tipo.</li>
    </ul>
</ul>

> Ambas as classes devem sobrescrever o método <em>inserePluviometro</em>.

---

Para executar toda a suíte de testes referente à este exercício:

```bash
npm run test -i .\test\lista-3\exercicio-1.test.ts -t "Lista 3 - Exercício 2"
```

Teste Específico

```bash
node "./node_modules/jest/bin/jest.js" "./test/lista-3/exercicio-2.test.ts" -t "Lista 3 - Exercício 2 Teste Específico"
```