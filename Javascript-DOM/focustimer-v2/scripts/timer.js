import { secondsWrapper, minutesWrapper } from "./elements.js"
import { finishingSound } from "./sounds.js"

let minutes = String(minutesWrapper.textContent).padStart(2, "0")
let seconds = String(secondsWrapper.textContent).padStart(2, "0")
let idTimeOut

function countdown() {
  idTimeOut = setTimeout(() => {
    let minutes = Number(minutesWrapper.textContent)
    let seconds = Number(secondsWrapper.textContent)
    if (minutes <= 0 && seconds <= 0) {
      finishingSound()
      return
    }
    if (seconds == 0) {
      seconds = 60
      minutes--
    }
    seconds--
    updateTimeDisplay(seconds, minutes)
    countdown()
  }, 1000)
}

function updateTimeDisplay(seconds, minutes) {
  secondsWrapper.textContent = String(seconds).padStart(2, "0")
  minutesWrapper.textContent = String(minutes).padStart(2, "0")
}
function resetTimerDisplay() {
  secondsWrapper.textContent = "00"
  minutesWrapper.textContent = 25
}
function stopTimer() {
  clearTimeout(idTimeOut)
}
function addFiveMinutes() {
  minutes = Number(minutes) + 5
  minutesWrapper.textContent = String(minutes).padStart(2, "0")
}
function minusFiveMinutes() {
  if ((Number(minutes) - 5) < 0) {
    return
  } else {
    minutes = Number(minutes) - 5
    minutesWrapper.textContent = String(minutes).padStart(2, "0")
  }
}
function checkTimerDisplay() {
  if(minutesWrapper.textContent == 0 && secondsWrapper.textContent == 0) {
    minutes = 25
    seconds = 0
    updateTimeDisplay(seconds, minutes)
  } else {
    return
  }
}

export {
  countdown,
  resetTimerDisplay,
  stopTimer,
  addFiveMinutes,
  minusFiveMinutes,
  checkTimerDisplay,
}