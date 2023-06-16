//Captação dos dados
let number1 = Number(window.prompt("Qual é o primeiro valor?"))
let number2 = Number(window.prompt("Qual é o segundo valor?"))
const resultContainer = document.querySelector(".result-container")

//Determinando os resultados
const sumResult = number1 + number2
const minusResult = number1 - number2
const multiplyResult = number1 * number2
const divideResult = number1 / number2
const restResult = number1 % number2

//Demonstrando os resultados via DOM.
resultContainer.innerHTML = `Resultado da soma: ${sumResult} <br> Resultado da subtração: ${minusResult} <br> Resultado da multiplicação: ${multiplyResult} <br> Resultado da divisão: ${divideResult} <br> Resultado do resto da divisão: ${restResult}`