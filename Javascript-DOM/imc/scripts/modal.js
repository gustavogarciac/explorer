export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  messageWrapper: document.querySelector(".modal-wrapper .modal h2 span"),
  closeButton: document.querySelector(".modal-wrapper .modal button"),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
  printMessage(message) {
    Modal.messageWrapper.innerText = message
  },
  //Close the modal whenever the user presses Enter.
  closeModalWhenEsc() {
    document.addEventListener("keydown", event => {
      if (Modal.wrapper.classList.contains("open") && event.key == "Escape") {
        Modal.close()
      }
    })
  }
}

Modal.closeButton.addEventListener("click", Modal.close)