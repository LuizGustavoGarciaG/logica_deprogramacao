function adicao(a, b) {
    return a + b
}

function multiplicacao(a, b) {
    return a * b
}

function subtracao(a, b) {
    return a - b
}

function divisao(a, b) {
    return a / b
}

function calcular(a, b, operacao) {
    switch (operacao) {
        case "+":
            return adicao(a, b)
        case "-":
            return subtracao(a, b)
        case "*":
            return multiplicacao(a, b)
        case "/":
            return divisao(a, b)
        default:
            return "Operação inválida"
    }
}

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let operacao = prompt("Digite a operação (+, -, *, /):")
let resultado = calcular(numero1, numero2, operacao)
console.log(resultado)