import { 
  playButton,
  stopButton,
  plusButton,
  minusButton,
  themeSwitch,
} from "./elements.js"

import { 
  countdown, 
  resetTimerDisplay, 
  stopTimer, 
  addFiveMinutes, 
  minusFiveMinutes,
  checkTimerDisplay
} from "./timer.js"

import {
  forestSound,
  rainSound,
  cafeSound,
  fireplaceSound,
  forestSoundButton,
  rainSoundButton,
  cafeSoundButton,
  fireplaceSoundButton,
  toggleSound,
  pressButtonSound,
  forestWrapper,
  rainWrapper,
  fireplaceWrapper,
  cafeWrapper,
  changeSoundVolume,
  forestRange,
  cafeRange,
  fireplaceRange,
  rainRange,
} from "./sounds.js"

import {
  changeThemeToDark
} from "./theme.js"


//This section is responsible for adding click events to the timer buttons.
playButton.addEventListener("click", () => {
  checkTimerDisplay()
  pressButtonSound()
  countdown()
})

stopButton.addEventListener('click', () => {
  resetTimerDisplay()
  pressButtonSound()
  stopTimer()
})

plusButton.addEventListener("click", () => {
  addFiveMinutes()
  pressButtonSound()
})

minusButton.addEventListener("click", () => {
  minusFiveMinutes()
  pressButtonSound()
})

// This section is resposible for the start and end of the sounds. It adds a click event that will run a function toggleSound. this function will turn the wrapper to active state and start running the sound.
forestSoundButton.addEventListener("click", () => {
  toggleSound(forestSound, forestWrapper)
})
rainSoundButton.addEventListener("click", () => {
  toggleSound(rainSound, rainWrapper)
})
cafeSoundButton.addEventListener("click", () => {
  toggleSound(cafeSound, cafeWrapper)
})
fireplaceSoundButton.addEventListener("click", () => {
  toggleSound(fireplaceSound, fireplaceWrapper)
})

// This section is responsible for the input range events. whenever the user changes the input value it will change the sound volume.
forestRange.addEventListener("input", () => {
  changeSoundVolume(forestRange, forestSound)
})
cafeRange.addEventListener("input", () => {
  changeSoundVolume(cafeRange, cafeSound)
})
rainRange.addEventListener("input", () => {
  changeSoundVolume(rainRange, rainSound)
})
fireplaceRange.addEventListener("input", () => {
  changeSoundVolume(fireplaceRange, fireplaceSound)
})

// This event is responsible to check if the user clicks in the theme Switch. If so, it will run the function to change some color properties of svgs and buttons to make it look like a dark theme.
themeSwitch.addEventListener("click", () => {
  changeThemeToDark()
})