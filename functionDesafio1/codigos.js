function soma(){
let resultado = numero1 + numero2
return resultado
}

function multiplicacao(){
let resultado = numero1 * numero2
return resultado
}

function divisao(){
let resultado = numero1 / numero2
return resultado
}

function subtracao(){
let rsultado = numero1 - numero2
return resultado
}

let numero1 = Number(prompt(&quot;Digite o primeiro numero: &quot;))
let numero2 = Number(prompt(&quot;Digite o segundo numero: &quot;))

console.log(&quot;\nOpera��es: \n1-Soma \n2-Multiplica��o \n3-Divis�o \n4-Subtra��o.\n&quot;)

let escolha = prompt(&quot;Digite qual opera��o deseja realizar: &quot;).toLowerCase()

if (escolha == &quot;soma&quot;|| escolha == 1){
console.log(&quot;O resultado �: &quot;,soma())
}
else if (escolha == &quot;multiplica��o&quot; || escolha == 2){

console.log(&quot;O resultado �:&quot;,multiplicacao())
}
else if (escolha == &quot;divis�o&quot; || escolha == 3){
console.log(&quot;O resultado �:&quot;,divisao())
}
else if (escolha == &quot;subtra��o&quot; || escolha == 4){
console.log(&quot;O resultado �:&quot;,subtracao())
}

else{
console.log(&quot;N�o reconhe�o essa opera��o.&quot;)
}
