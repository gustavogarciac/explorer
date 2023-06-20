let randomNumber = generateRandomNumber()
const numberInput = document.querySelector("form input")
const tryButton = document.querySelector("form button")
const restartButton = document.querySelector("#return-button")
const firstScreen = document.querySelector(".screen-1")
const secondScreen = document.querySelector(".screen-2")
const answerPlaceholder = document.querySelector(".screen-1 p")
const tryPlaceholder = document.querySelector(".screen-2 h2")
let tryes = 1
console.log(randomNumber)

//This function is responsible for generating a random number so that the user can guess it. It will be invoked in the start of the game and whenever the reset game happens.
function generateRandomNumber() {
  return Math.round(Math.random() * 10);
}

//This function will alternate between screen1 and screen2 depending on the situation of the game.
function changeWindow() {
  firstScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
}

//This function is responsible for updating the placeholder that appears on the second screen after the user guesses the right number.
function changeTryPlaceholder() {
  switch (tryes) {
    case 1:
      tryPlaceholder.innerText = `Você acertou em ${tryes} tentativa.`
      break;
    default:
      tryPlaceholder.innerText = `Você acertou em ${tryes} tentativas.`
      break;
  }
}

//This function will start whenever the user clicks on the restart button and its responsible for reseting the game data to start it all over again.
function restartGame() {
  randomNumber = generateRandomNumber()
  tryes = 1
  answerPlaceholder.innerText = `Adivinhe um número entre 0 e 10.`
}

//This will add an event listener to the try button that will start the game whenever the user puts a value inside the input and try to guess it.
tryButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent form sent
  let userNumber = Number(numberInput.value)
  if (userNumber < 0 || userNumber > 10) {
    answerPlaceholder.innerText = `Por favor, insira um número entre 0 e 10.`
    return
  }
  if (userNumber == randomNumber) {
    changeWindow()
    changeTryPlaceholder()
  } else {
    answerPlaceholder.innerText = `Você errou, tente novamente algum número entre 0 e 10.`
  }

  if (numberInput.value != "") {
    ++tryes
  }
  numberInput.value = ""
})

//This event listener is responsible to restart the game, reseting game data and changing the windows so that the user can put numbers inside the input.
restartButton.addEventListener("click", () => {
  restartGame()
  changeWindow()
})
