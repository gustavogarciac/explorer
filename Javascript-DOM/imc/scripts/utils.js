export function calcIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value == ""
}

export function closeAlertBoxWhenTyping(firstInput, secondInput, alertError) {
  firstInput.addEventListener("input", () => alertError.close())
  secondInput.addEventListener("input", () => alertError.close())
}