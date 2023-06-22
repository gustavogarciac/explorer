import { sunSwitch, lightSwitch } from "./elements.js"

function changeThemeToDark() {
  document.querySelector("body").classList.toggle("dark-theme")
  toggleThemeSwitch()
}
function toggleThemeSwitch() {
  sunSwitch.classList.toggle("hide")
  lightSwitch.classList.toggle("hide")
}

export {changeThemeToDark}