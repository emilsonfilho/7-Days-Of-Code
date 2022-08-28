const div = document.querySelector('div.res')

const msgOperacao = "\nDigite a operação que você quer realizar.\nSomar, Subtrair, Multiplicar, Dividir ou Sair"
const msgNum1 = "\nDigite o primeiro número."
const msgNum2 = "\nDigite o segundo número."
const nDigitou = "Você não digitou nada ainda."
const invalida = "A opção que você digitou não é válida."

let operacao = prompt(`${msgOperacao}`)
console.log(operacao)

while (operacao.length === 0) {
    operacao = prompt(`${nDigitou}${msgOperacao}`)
}

while (operacao !== "somar" && operacao !== "subtrair" && operacao !== "multiplicar" && operacao !== "dividir" && operacao !== "sair") {
    operacao = prompt(`${invalida}${msgOperacao}`)
}

if (operacao === "sair") {
    alert('Até mais.')
} else {
    let x = prompt(`${msgNum1}`)
    console.log(x)
    console.log(x.length)

    while (x.length === 0) {
        x = prompt(`${nDigitou}${msgNum1}`)
    }

    let y = prompt(`${msgNum2}`)

    while (y.length === 0) {
        y = prompt(`${nDigitou}${msgNum2}`)
    }

    const num1 = Number(x)
    const num2 = Number(y)
    let resultado = 0

    const somar = (a, b) => a + b
    const subtrair = (a, b) => a - b
    const multiplicar = (a, b) => a * b
    const dividir = (a, b) => a / b

    switch (operacao) {
        case "somar":
            resultado = somar(num1, num2)
            mostrarDiv(operacao, num1, num2, resultado)
            break;
        case "subtrair":
            resultado = subtrair(num1, num2)
            mostrarDiv(operacao, num1, num2, resultado)
            break
        case "multiplicar": 
            resultado = multiplicar(num1, num2)
            mostrarDiv(operacao, num1, num2, resultado)
            break
        case "dividir":
            resultado = dividir(num1, num2)
            mostrarDiv(operacao, num1, num2, resultado)
            break
    }
}

function mostrarDiv(operacao, num1, num2, resultado) {
    div.innerHTML = `<strong>A operação selecionada foi: </strong> ${operacao}<br>
                <strong>O primeiro número digitado foi: </strong> ${num1}<br>
                <strong>O segundo número digitado foi: </strong> ${num2}<br>
                <strong>O resultado da operação é: </strong> ${resultado}`
}

