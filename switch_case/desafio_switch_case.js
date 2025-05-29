let respostascorretas = 0;
let respostasincorretas = 0;

// Função auxiliar para comparar sem se preocupar com maiúsculas/minúsculas
function comparar(resposta, alternativas) {
    return alternativas.includes(resposta.toLowerCase());
}

// Pergunta 1
console.log("Qual o melhor jogo do roblox?");
console.log("A - Murder Mistery");
console.log("B - Flee The Facility");
console.log("C - Undergroud 2");
console.log("D - Bigpaintball");
let pergunta1 = prompt("Digite sua resposta: ");
if (comparar(pergunta1, ["a", "c", "undergroud 2"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 2
console.log("Quantos Grammys a Lady Gaga tem?");
console.log("A - 20");
console.log("B - 13");
console.log("C - 10");
console.log("D - 16");
let pergunta2 = prompt("Digite sua resposta: ");
if (comparar(pergunta2, ["d", "16"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 3
console.log("Em que ano o Ayrton Sena morreu?");
console.log("A - 1992");
console.log("B - 2000");
console.log("C - 1994");
console.log("D - 1993");
let pergunta3 = prompt("Digite sua resposta: ");
if (comparar(pergunta3, ["c", "1994"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 4
console.log("Quem é melhor no futebol?");
console.log("A - Cristiano Ronaldo");
console.log("B - Lionel Messi");
console.log("C - Neymar Junior");
console.log("D - Luiz Gustavo de Salto Alto");
let pergunta4 = prompt("Digite sua resposta: ");
if (comparar(pergunta4, ["d", "luiz gustavo de salto alto"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 5
console.log("Qual o melhor vilão da Disney?");
console.log("A - Mamãe Gothel");
console.log("B - Malevola");
console.log("C - Hades");
console.log("D - Rainha má");
let pergunta5 = prompt("Digite sua resposta: ");
if (comparar(pergunta5, ["c", "hades"])) {
    console.log("Resposta Correta");
    respostascorretas++; // <- faltava isso
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 6
console.log("Qual a pior cantora do mundo do pop");
console.log("A - Katy Perry");
console.log("B - Taylor Swift");
console.log("C - Ariana Grande");
console.log("D - Beyonce");
let pergunta6 = prompt("Digite sua resposta: ");
if (comparar(pergunta6, ["b", "taylor swift"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 7
console.log("Qual a nacionalidade do Leonardo Da Vinci");
console.log("A - Alemão");
console.log("B - Italiano");
console.log("C - Francês");
console.log("D - Português");
let pergunta7 = prompt("Digite sua resposta: ");
if (comparar(pergunta7, ["b", "italiano"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 8
console.log("Em que ano foi fundado o Corinthians?");
console.log("A - 1910");
console.log("B - 1990");
console.log("C - 1920");
console.log("D - 1990");
let pergunta8 = prompt("Digite sua resposta: ");
if (comparar(pergunta8, ["a", "1910"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 9
console.log("Qual a melhor princesa da Disney?");
console.log("A - Bela Adormecida");
console.log("B - Tiana");
console.log("C - Ariel");
console.log("D - Branca de Neve");
let pergunta9 = prompt("Digite sua resposta: ");
if (comparar(pergunta9, ["b", "tiana"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Pergunta 10
console.log("Qual o melhor jogo?");
console.log("A - Genshin Impact");
console.log("B - Valorant");
console.log("C - Roblox");
console.log("D - PopPlayTime");
let pergunta10 = prompt("Digite sua resposta: ");
if (comparar(pergunta10, ["c", "roblox"])) {
    console.log("Resposta Correta");
    respostascorretas++;
} else {
    console.log("Resposta Incorreta");
    respostasincorretas++;
}

// Resultado final
console.log("\nResumo Final");
console.log("Respostas Corretas: " + respostascorretas);
console.log("Respostas Incorretas: " + respostasincorretas);
