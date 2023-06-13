// É possível declarar funções dentro de variáveis.

const sum = function(number1, number2) {
    return number1 + number2
}

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`O número 1 é ${number1} e o número 2 é ${number2}, a soma entre eles é ${sum(number1, number2)}`)