let idade = prompt("Digite sua idade: ")
let categoria
if(idade >= 60){
    categoria = "Idosa"
    console.log("Idade Final: ", idade)
    console.log("Categoria: ", categoria)
}
else if(idade > 18 && idade < 60){
    categoria = "Adulta"
    console.log("Idade Final: ", idade)
    console.log("Categoria: ", categoria)
}
else if(idade >= 12 && idade <= 18){
    categoria = "Adolescente"
    console.log("Idade Final: ", idade)
    console.log("Categoria: ", categoria)
}
else if(idade < 12){
    categoria = "Criança"
    console.log("Idade Final: ", idade)
    console.log("Categoria: ", categoria)
}
else{
    console.log("?")
}
//Idade para votar
let idade = prompt("Digite sua idade: ")
if (idade >= 18 && idade < 70){
    console.log("Voto obrigatório")
}
else if(idade >= 16 && idade < 18){
    console.log("Voto facultativo")
}
else if(idade < 16){
    console.log("Não vota")
}
else{
    console.log("Idade invalido")
}//Numero negativo ou positivo
let numero = prompt("Digite um número: ")
if (numero < 0){
    console.log("Negativo")
}
else if(numero == 0){
    console.log("Zero")
}
else if (numero > 0){
    console.log("Positivo")
}//Tipos de Combustivel
let combustivel = prompt("Digite um tipo de combustível: ")
if(combustivel === "Gasolina"){
    console.log("Você escolheu Gasolina")
}
else if(combustivel === "Álcool"){
    console.log("Você escolheu Álcool")
}
else if(combustivel === "Diesel"){
    console.log("Você escolheu Diesel")
}
else{
    console.log("Combustível Inválido")
}//Tipos de Combustivel
/*
let combustivel = prompt("Digite um tipo de combustível: ")
if(combustivel === "Gasolina"){
    console.log("Você escolheu Gasolina")
}
else if(combustivel === "Álcool"){
    console.log("Você escolheu Álcool")
}
else if(combustivel === "Diesel"){
    console.log("Você escolheu Diesel")
}
else{
    console.log("Combustível Inválido")
}
*/

let velocidade = prompt("Digite sua velocidade(km): ")
if(velocidade > 90){
    console.log("Multado")
}