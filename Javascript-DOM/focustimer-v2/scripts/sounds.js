const forestSound = new Audio("../assets/Floresta.wav")
const rainSound = new Audio("../assets/Chuva.wav")
const cafeSound = new Audio("../assets/Cafeteria.wav")
const fireplaceSound = new Audio("../assets/Lareira.wav")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

const forestSoundButton = document.querySelector("#forest-button")
const rainSoundButton = document.querySelector("#rain-button")
const cafeSoundButton = document.querySelector("#cafe-button")
const fireplaceSoundButton = document.querySelector("#fireplace-button")
const forestWrapper = document.querySelector("#forest-wrapper")
const rainWrapper = document.querySelector("#rain-wrapper")
const cafeWrapper = document.querySelector("#cafe-wrapper")
const fireplaceWrapper = document.querySelector("#fireplace-wrapper")
const forestRange = document.querySelector("#forest-range")
const cafeRange = document.querySelector("#cafe-range")
const rainRange = document.querySelector("#rain-range")
const fireplaceRange = document.querySelector("#fireplace-range")

function disableAllSounds() {
  forestWrapper.classList.remove("active")
  rainWrapper.classList.remove("active")
  cafeWrapper.classList.remove("active")
  fireplaceWrapper.classList.remove("active")

  forestSound.pause()
  rainSound.pause()
  cafeSound.pause()
  fireplaceSound.pause()
}

function toggleSound(sound, soundwrapper) {
  soundwrapper.classList.toggle("active")
  if (soundwrapper.classList.contains("active")) {
    disableAllSounds()
    soundwrapper.classList.add("active")
    sound.play()
    sound.loop = true;
  } else {
    sound.pause()
  }
}

function pressButtonSound() {
  buttonPressAudio.play()
}

function finishingSound() {
  disableAllSounds()
  setTimeout(() => {
    kitchenTimer.play()
  }, 1000)
}

function changeSoundVolume(soundRange, sound) {
  let soundVolume = Number(soundRange.value) / 10
  sound.volume = soundVolume
}

export {
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
  finishingSound,
  forestWrapper,
  rainWrapper,
  fireplaceWrapper,
  cafeWrapper,
  changeSoundVolume,
  forestRange,
  cafeRange,
  rainRange,
  fireplaceRange,
}