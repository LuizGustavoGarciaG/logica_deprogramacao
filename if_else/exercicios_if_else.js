// Exercício 1
/*
let idade = 6;
if (idade >= 18) {
  console.log("Maior idade");
} else {
  console.log("Menor idade");
}
*/

// Exercício 2
/*
let horario = prompt("Qual o horário atual?");
if (horario >= 6 && horario < 12) {
  console.log("Bom dia");
} else if (horario >= 12 && horario < 18) {
  console.log("Boa tarde");
} else if (horario >= 18) {
  console.log("Boa noite");
} else {
  console.log("Opção inválida");
}
*/

// Exercício 3
/*
let idade = 18;
if (idade >= 16) {
  console.log("Maior idade");
} else {
  console.log("Menor idade");
}
*/

// Exercício 4
/*
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

if (numero1 > numero2) {
  console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
  console.log("O maior número é: " + numero2);
} else {
  console.log("Os números são iguais.");
}
*/

// Exercício 5
/*
let temperatura = prompt("Digite a temperatura:");

if (temperatura < 15) {
  console.log("Frio");
} else if (temperatura <= 25) {
  console.log("Térmico");
} else {
  console.log("Quente");
}
*/

// Exercício 6
/*
let palavra = prompt("Digite uma palavra:");

if (palavra === "Felicidade") {
  console.log("Palavra correta");
} else {
  console.log("Palavra incorreta");
}
*/

// Exercício 7
/*
let moedas = prompt("Digite a quantidade de moedas:");

if (moedas < 10) {
  console.log("Poucas moedas");
} else if (moedas <= 20) {
  console.log("Quantidade média");
} else {
  console.log("Muitas moedas");
}
*/

// Exercício 8
/*
let temperatura = prompt("Digite a temperatura:");

if (temperatura > 30) {
  console.log("Muito quente");
} else if (temperatura >= 20) {
  console.log("Calor");
} else {
  console.log("Frio");
}
*/

// Exercício 9
/*
let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
*/

// Exercício 10
/*
let nota = prompt("Digite a nota do aluno:");

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
*/

// Exercício 11
/*
let animal = prompt("Digite um animal:");

if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  console.log(animal);
} else {
  console.log("Animal não listado");
}
*/

// Exercício 12
/*
let dia = prompt("Digite o dia da semana:");

if (dia === "Sábado" || dia === "Domingo") {
  console.log("Fim de semana");
} else {
  console.log("Dia útil");
}
*/

// Exercício 13
/*
let experiencia = prompt("Digite os anos de experiência:");

if (experiencia > 2) {
  console.log("Experiente");
} else {
  console.log("Iniciante");
}
*/

// Exercício 14
/*
let numero = prompt("Digite um número:");

if (numero >= 10 && numero <= 20) {
  console.log("Dentro do intervalo");
} else {
  console.log("Fora do intervalo");
}
*/

// Exercício 15
/*
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Pode tirar carteira de motorista");
} else {
  console.log("Não pode tirar carteira de motorista");
}
*/

// Exercício 16
let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}