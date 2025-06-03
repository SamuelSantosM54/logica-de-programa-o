CÓDIGO 1

let idade = (prompt(&quot;Digite a sua idade: &quot;))
let categoria

if (idade &gt;= 60) {
categoria = &quot;idosa&quot;
} else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {
categoria = &quot;adulta&quot;
} else {
categoria = &quot;criança&quot;
}

if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;adolescente&quot;
}

console.log(&quot;Categoria: &quot; + categoria)

if (idade &lt; 12) {

} else {
}

EXPLICAÇÃO:
let idade = (prompt(&quot;Digite a sua idade: &quot;))
let categoria
Pede a idade do usuário via prompt().
Cria a variável categoria (sem valor inicial).

if (idade &gt;= 60) {
categoria = &quot;idosa&quot;
} else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {

categoria = &quot;adulta&quot;
} else {
categoria = &quot;criança&quot;
}
Classifica a pessoa como:

&quot;idosa&quot; (60+),

&quot;adulta&quot; (entre 19 e 59),

ou &quot;criança&quot; (até 18).

if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;adolescente&quot;
}
Se a idade for entre 12 e 18, substitui a categoria anterior por &quot;adolescente&quot;.

console.log(&quot;Categoria: &quot; + categoria)
Exibe no console o resultado final da categoria.

CÓDIGO 2
let idade = (prompt(&quot;Digite a sua idade: &quot;))
if (idade &lt; 16) {
console.log(&quot;Não vota.&quot;)
} else if (idade &gt;= 16 &amp;&amp; idade &lt; 18) {
console.log(&quot;Voto facultativo.&quot;)
} else if (idade &gt;= 70){
console.log(&quot;Voto facultativo&quot;)
} else {
console.log(&quot;Voto obrigatório.&quot;)
}

CÓDIGO 3
let numero = (prompt(&quot;Digite o numero: &quot;))

if (numero &lt; 0) {
console.log(&quot;Negativo&quot;)
} else if (numero &gt; 0) {
console.log(&quot;Positivo&quot;)
} else if (numero == 0) {
console.log(&quot;Zero&quot;)
} else {
}

CÓDIGO 4

let combustivel = (prompt(&quot;Escolha um combustível: &quot;))

if (combustivel === &quot;Gasolina&quot;) {
console.log(&quot;Você escolheu Gasolina&quot;)
} else if (combustivel === &quot;Álcool&quot;) {
console.log(&quot;Você escolheu Álcool&quot;)
} else if (combustivel === &quot;Diesel&quot;) {
console.log(&quot;Você escolheu Diesel&quot;)
} else {
console.log(&quot;Opção inválida&quot;)
}

CÓDIGO 5
let velocidade = (prompt(&quot;Qual a velocidade do veículo: &quot;))

if(velocidade &gt;= 80) {
console.log(&quot;Multado&quot;)
} else if (velocidade &lt;= 60) {
console.log(&quot;Dentro dos limites&quot;)
} else {
console.log(&quot;Atenção&quot;)
}