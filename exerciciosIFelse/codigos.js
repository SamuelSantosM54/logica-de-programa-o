let idade = 20;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

let hora = 14;
if (hora >= 6 && hora < 12) {
  console.log("Bom dia");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

let idadeEvento = 15;
if (idadeEvento < 16) {
  console.log("Não pode entrar");
} else {
  console.log("Pode entrar");
}

let a = 10, b = 15;
if (a > b) {
  console.log(a + " é maior");
} else if (b > a) {
  console.log(b + " é maior");
} else {
  console.log("Os números são iguais");
}

let temp = 18;
if (temp < 15) {
  console.log("Frio");
} else if (temp <= 25) {
  console.log("Térmico");
} else {
  console.log("Quente");
}

let palavra = "Felicidade";
if (palavra === "Felicidade") {
  console.log("Palavra correta");
} else {
  console.log("Palavra incorreta");
}

let moedas = 12;
if (moedas < 10) {
  console.log("Poucas moedas");
} else if (moedas <= 20) {
  console.log("Quantidade média");
} else {
  console.log("Muitas moedas");
}

let temperatura = 25;
if (temperatura > 30) {
  console.log("Muito quente");
} else if (temperatura >= 20) {
  console.log("Calor");
} else {
  console.log("Frio");
}

let num = -5;
if (num >= 0) {
  console.log("Número positivo");
} else {
  console.log("Número negativo");
}

let nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

let animal = "Gato";
if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  console.log("Animal listado");
} else {
  console.log("Animal não listado");
}

let diaSemana = "Segunda-feira";
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
  console.log("Fim de semana");
} else {
  console.log("Dia útil");
}

let experiencia = 3;
if (experiencia > 2) {
  console.log("Experiente");
} else {
  console.log("Iniciante");
}

let numero = 15;
if (numero >= 10 && numero <= 20) {
  console.log("Dentro do intervalo");
} else {
  console.log("Fora do intervalo");
}

let idadeCNH = 18;
if (idadeCNH >= 18) {
  console.log("Pode tirar carteira de motorista");
} else {
  console.log("Não pode tirar carteira de motorista");
}

let valor = 0;
if (valor > 0) {
  console.log("Positivo");
} else if (valor < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
