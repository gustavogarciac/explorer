const form = document.querySelector("form")
const modal = document.querySelector("#modal")
const modalClose = document.querySelector(".close-modal")

function toggleModal() {
  modal.classList.toggle("hide")
}

form.addEventListener('submit', event => {
  event.preventDefault()
  toggleModal()
})

modalClose.addEventListener("click", () => {
  toggleModal()
})

