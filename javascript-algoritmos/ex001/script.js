let firstNumber = promptMessage("Insira o valor do primeiro número.")
let secondNumber = promptMessage("Insira o valor do segundo número.")

function promptMessage(message) {
    return Number(prompt(message))
}
function isEqual(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return `Os valores apresentados são iguais.`
    } else {
        return `Os valores apresentados foram ${firstNumber} e ${secondNumber}`
    }
}

function isPar(firstNumber, secondNumber) {
    if ((firstNumber + secondNumber) % 2 === 0) {
        return `A soma dos valores ${firstNumber} e ${secondNumber} é par.`
    } else {
        return `A soma dos valores ${firstNumber} e ${secondNumber} é ímpar.`
    }
}

function calculateResults(firstNumber, secondNumber) {
    const sumResult = firstNumber + secondNumber
    const minusResult = firstNumber - secondNumber
    const multiplyResult = firstNumber * secondNumber
    const divResult = firstNumber / secondNumber
    const restResult = firstNumber % secondNumber

    return {
        sumResult,
        minusResult,
        multiplyResult,
        divResult,
        restResult,
    };
}

const { sumResult, minusResult, multiplyResult, divResult, restResult } = calculateResults(firstNumber, secondNumber)

alert(`Resultado da soma: ${sumResult}`)
alert(`Resultado da subtração: ${minusResult}`)
alert(`Resultado da multiplicação: ${multiplyResult}`)
alert(`Resultado da divisão: ${divResult}`)
alert(`Resultado do resto da divisão: ${restResult}`)
alert(isPar(firstNumber, secondNumber));
alert(isEqual(firstNumber, secondNumber))

