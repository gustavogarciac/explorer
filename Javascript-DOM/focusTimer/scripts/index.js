import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sound from "./sounds.js"
import { 
  playButton,
  pauseButton,
  stopButton,
  setButton,
  soundOffButton,
  soundOnButton,
  minutesPlaceholder,
  secondsPlaceholder,
} from "./elements.js"

let minutes = 25
let seconds = 0

const sound = Sound()

const controls = Controls({
  pauseButton,
  playButton,
  setButton,
  stopButton,
})

const timer = Timer({
  resetButtonWrapper: controls.reset, 
  minutesPlaceholder,
  secondsPlaceholder,
})

playButton.addEventListener("click", () => {
  controls.play()
  timer.countdown()
  sound.pressButton()
})
pauseButton.addEventListener("click", () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

stopButton.addEventListener("click", () => {
  controls.reset()
  timer.resetTimer(minutes, seconds)
  sound.pressButton()
})

soundOffButton.addEventListener("click", () => {
  soundOnButton.classList.toggle("hide");
  soundOffButton.classList.toggle("hide")
  sound.bgAudio.pause()
})

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.toggle("hide");
  soundOffButton.classList.toggle("hide")
  sound.bgAudio.play()
})

setButton.addEventListener("click", () => {
  let newMinutes = controls.getMinutes() || 25
  let newSeconds = controls.getSeconds() || 0
  minutes = newMinutes
  seconds = newSeconds
  timer.updateTimerDisplay(minutes, seconds)
})