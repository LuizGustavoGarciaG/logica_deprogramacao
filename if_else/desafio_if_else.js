let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 1
console.log("1. Em que ano estamos?");
console.log("A - 2025");
console.log("B - 2050");
console.log("C - 2060");
console.log("D - 2070");
let pergunta1 = prompt("Digite a resposta: ");
if (pergunta1 === "A" || pergunta1 === "a" || pergunta1 == 2025) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 2
console.log("\n2. Quantos grammys a Lady Gaga tem?");
console.log("A - 20");
console.log("B - 13");
console.log("C - 10");
console.log("D - 16");
let pergunta2 = prompt("Digite a resposta: ");
if (pergunta2 === "D" || pergunta2 === "d" || pergunta2 == 16) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 3
console.log("\n3. Em que ano Ayrton Senna faleceu?");
console.log("A - 1992");
console.log("B - 2000");
console.log("C - 1993");
console.log("D - 1994");
let pergunta3 = prompt("Digite a resposta: ");
if (pergunta3 === "D" || pergunta3 === "d" || pergunta3 == 1994) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 4
console.log("\n4. Quem é melhor no futebol?");
console.log("A - Cristiano Ronaldo");
console.log("B - Lionel Messi");
console.log("C - Luiz Gustavo de salto alto");
console.log("D - Neymar Jr");
let pergunta4 = prompt("Digite a resposta: ");
if (pergunta4 === "C" || pergunta4 === "c" || pergunta4.includes("Luiz Gustavo")) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 5
console.log("\n5. Quem é o pai de Simba?");
console.log("A - Oscar");
console.log("B - Timão");
console.log("C - Mufasa");
console.log("D - Pumba");
let pergunta5 = prompt("Digite a resposta: ");
if (pergunta5 === "C" || pergunta5 === "c" || pergunta5 === "Mufasa") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 6
console.log("\n6. Qual a pior cantora do mundo pop?");
console.log("A - Katy Perry");
console.log("B - Beyoncé");
console.log("C - Taylor Swift");
console.log("D - Ariana Grande");
let pergunta6 = prompt("Digite a resposta: ");
if (pergunta6 === "C" || pergunta6 === "c" || pergunta6 === "Taylor Swift") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 7
console.log("\n7. Quando começou a pandemia da Covid-19?");
console.log("A - 2020");
console.log("B - 2021");
console.log("C - 2019");
console.log("D - 2022");
let pergunta7 = prompt("Digite a resposta: ");
if (pergunta7 === "A" || pergunta7 === "a" || pergunta7 == 2020) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 8
console.log("\n8. Em que ano foi fundado o Corinthians?");
console.log("A - 1910");
console.log("B - 1990");
console.log("C - 1920");
console.log("D - 1912");
let pergunta8 = prompt("Digite a resposta: ");
if (pergunta8 === "A" || pergunta8 === "a" || pergunta8 == 1910) {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 9
console.log("\n9. Quem é o ex da Bruna Marquezine?");
console.log("A - Neynar");
console.log("B - Neymar Jr");
console.log("C - Vini Jr");
console.log("D - Casemiro");
let pergunta9 = prompt("Digite a resposta: ");
if (pergunta9 === "B" || pergunta9 === "b" || pergunta9 === "Neymar Jr") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 10
console.log("\n10. Qual cantora Grande é pequena?");
console.log("A - Iza");
console.log("B - Selena Gomez");
console.log("C - Ariana Grande");
console.log("D - Ludmilla");
let pergunta10 = prompt("Digite a resposta: ");
if (pergunta10 === "C" || pergunta10 === "c" || pergunta10 === "Ariana Grande") {
  console.log("Alternativa correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Resultado final
console.log("\n===== RESUMO FINAL =====");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);