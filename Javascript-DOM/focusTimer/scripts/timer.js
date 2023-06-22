import Sounds from "./sounds.js"

export function Timer({
  resetButtonWrapper,
  minutesPlaceholder,
  secondsPlaceholder,
}) {
  let timerTimeOut

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsPlaceholder.textContent)
      let minutes = Number(minutesPlaceholder.textContent)
  
      if (minutes == 0 && seconds == 0) {
        resetButtonWrapper()
        Sounds().timeEnd()
        return
      }
      if (seconds <= 0) {
        seconds = 60
        minutes--
      }
      seconds--
      updateTimerDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }
  function updateTimerDisplay(minutes, seconds) {
    minutesPlaceholder.textContent = String(minutes).padStart(2, "0")
    secondsPlaceholder.textContent = String(seconds).padStart(2, "0")
  }
  function resetTimer(minutes, seconds) {
    updateTimerDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }
  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    updateTimerDisplay,
    resetTimer,
    hold,
  }
}
