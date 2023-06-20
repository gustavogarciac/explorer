const tryButton = document.querySelector("#try-button")
const resetButton = document.querySelector("#return-button")
const randomNumber = Math.round(Math.random() * 10)
const screenOne = document.querySelector(".screen-1")
const screenTwo = document.querySelector(".screen-2")
let attempts = 1

console.log(randomNumber)
//callback function
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#input-number");
  
  if(Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")
    document.querySelector(".screen-2 h2").innerText = `Você acertou em ${attempts} tentativas.`
  }
  inputNumber.value = ""
  attempts++
}

tryButton.addEventListener("click",  handleTryClick)
resetButton.addEventListener("click", () => {
  screenTwo.classList.add("hide");
  screenOne.classList.remove("hide");
  attempts = 1
})