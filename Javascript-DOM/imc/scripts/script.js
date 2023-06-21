import { Modal } from "./modal.js"
import {alertError} from "./alert-error.js"
import { notNumber, calcIMC, closeAlertBoxWhenTyping } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//Preventing the form submit.
form.addEventListener('submit', event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotNumber) {
    alertError.open()
    closeAlertBoxWhenTyping(inputWeight, inputHeight, alertError)
    return
  } else {
    alertError.close()
    const result = calcIMC(weight, height)
    const message = `O seu IMC é de ${result}`
    
    Modal.open()
    Modal.printMessage(message)
    Modal.closeModalWhenEsc()
  }
})

