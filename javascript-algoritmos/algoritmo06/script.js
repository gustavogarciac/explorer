//Declarando containers da DOM
const userInput = document.querySelector("#user-number")
const resultContainer = document.querySelector(".result-container")
const inputButton = document.querySelector(".send-number")

//Gerando número aleatório
const randomNumber = Math.random().toFixed(1) * 10

//Declarando variável que irá contar as tentativas
let tryes = 0

//Iniciar a função com o evento de clique
inputButton.addEventListener('click', testResult)

//Declaração da função
function testResult() {
    tryes += 1 // Aumenta as tentativas toda vez que a função é iniciada
    let userAnswer = userInput.value
    if (userAnswer == randomNumber) {
        if (tryes == 1) {
            resultContainer.innerHTML = `Muito bem, você acertou em <span class="correct">${tryes} tentativa.</span>`
        } else {
            resultContainer.innerHTML = `Muito bem, você acertou em <span class="correct">${tryes} tentativas.</span>`
        }
    } else {
        resultContainer.innerHTML = `Você errou, tente novamente!`
    }
}