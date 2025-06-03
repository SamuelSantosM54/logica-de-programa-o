let respostaCorreta = 0
let respostaIncorreta = 0
//Pergunta1
console.log(&quot;Qual maior país do mundo? &quot;)
console.log(&quot;A - Rússia&quot;)
console.log(&quot;B - Canadá&quot;)
console.log(&quot;C - China&quot;)
console.log(&quot;D - EUA&quot;)
let pergunta1 = prompt(&quot;Digite a alternativa correta: &quot;)
switch(pergunta1) {
case &quot;A&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta ++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta ++
}

//Pergunta2
console.log(&quot;Qual maior cidade do mundo? &quot;)
console.log(&quot;A - Xangai&quot;)
console.log(&quot;B - Tóquio&quot;)
console.log(&quot;C - São Paulo&quot;)
console.log(&quot;D - Malina&quot;)
let pergunta2 = prompt(&quot;Digite a alternativa correta: &quot;)
switch (pergunta2) {
case &quot;B&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break

default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta ++
}

//Pergunta3
console.log(&quot;Qual maior animal do mundo? &quot;)
console.log(&quot;A - Avestruz&quot;)
console.log(&quot;B - Salamandra&quot;)
console.log(&quot;C - Crocodilo&quot;)
console.log(&quot;D - Baleia azul&quot;)
let pergunta3 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta3) {
case &quot;D&quot;:
console.log(&quot;alternativa correta!&quot;)
respostaCorreta ++
break
default:
console.log(&quot;Alternativa correta!&quot;)
respostaIncorreta ++
}

//Pergunta4
console.log(&quot;Qual animal mais pesado do mundo? &quot;)
console.log(&quot;A - Sucuri&quot;)
console.log(&quot;B - Baleia azul&quot;)
console.log(&quot;C - Girafa&quot;)
console.log(&quot;D - Urso Polar&quot;)

let pergunta4 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta4) {
case &quot;B&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta5
console.log(&quot;Qual animal mais lento do mundo? &quot;)
console.log(&quot;A - Lesma&quot;)
console.log(&quot;B - Coala&quot;)
console.log(&quot;C - Tartaruga&quot;)
console.log(&quot;D - Bicho-Preguiça&quot;)

let pergunta5 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta5) {
case &quot;D&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta6

console.log(&quot;Qual animal mais calmo do mundo? &quot;)
console.log(&quot;A - Panda&quot;)
console.log(&quot;B - Bicho-preguiça&quot;)
console.log(&quot;C - Leopardo&quot;)
console.log(&quot;D - Golden retriever&quot;)

let pergunta6 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta6) {
case &quot;B&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta7
console.log(&quot;Qual animal mais Bravo do mundo? &quot;)
console.log(&quot;A - Tubarão Branco&quot;)
console.log(&quot;B - Leão&quot;)
console.log(&quot;C - Escorpião&quot;)
console.log(&quot;D - Búfalo&quot;)

let pergunta7 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta7) {
case &quot;A&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++

break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta8
console.log(&quot;Qual animal mais inteligente do mundo? &quot;)
console.log(&quot;A - Golfinhos&quot;)
console.log(&quot;B - Papagaios&quot;)
console.log(&quot;C - Porcos&quot;)
console.log(&quot;D - Chimpanzés&quot;)

let pergunta8 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta8) {
case &quot;D&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta9
console.log(&quot;Qual animal mais rápido do mundo? &quot;)
console.log(&quot;A - Gazela&quot;)
console.log(&quot;B - Peixe-agulhão&quot;)
console.log(&quot;C - Falcão-peregrino&quot;)
console.log(&quot;D - Guepardo&quot;)

let pergunta9 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta9) {
case &quot;C&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Pergunta10
console.log(&quot;Qual animal mais caro do mundo? &quot;)
console.log(&quot;A - Carneiro Texel&quot;)
console.log(&quot;B - Pato Big Dave&quot;)
console.log(&quot;C - Panda-gigante&quot;)
console.log(&quot;D - Cavalo Fusaichi Pegasus&quot;)

let pergunta10 = prompt(&quot;Digite a alternativa correta: &quot;)

switch(pergunta10) {
case &quot;D&quot;:
console.log(&quot;Alternativa correta!&quot;)
respostaCorreta++
break
default:
console.log(&quot;Alternativa Errada!&quot;)
respostaIncorreta++
}

//Exibir Resultado
console.log(&quot;\n Resumo Final&quot;)
console.log(&quot; respostas Correta: &quot; + respostaCorreta)
console.log(&quot; respostas Incorreta: &quot; + respostaIncorreta)
