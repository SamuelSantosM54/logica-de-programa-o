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

console.log(&quot;\nOperações: \n1-Soma \n2-Multiplicação \n3-Divisão \n4-Subtração.\n&quot;)

let escolha = prompt(&quot;Digite qual operação deseja realizar: &quot;).toLowerCase()

if (escolha == &quot;soma&quot;|| escolha == 1){
console.log(&quot;O resultado é: &quot;,soma())
}
else if (escolha == &quot;multiplicação&quot; || escolha == 2){

console.log(&quot;O resultado é:&quot;,multiplicacao())
}
else if (escolha == &quot;divisão&quot; || escolha == 3){
console.log(&quot;O resultado é:&quot;,divisao())
}
else if (escolha == &quot;subtração&quot; || escolha == 4){
console.log(&quot;O resultado é:&quot;,subtracao())
}

else{
console.log(&quot;Não reconheço essa operação.&quot;)
}
