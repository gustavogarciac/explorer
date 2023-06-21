export const alertError = {
  wrapper: document.querySelector(".alert-box"),
  open() {
    alertError.wrapper.classList.add("open")
  },
  close() {
    alertError.wrapper.classList.remove("open")
  }
}



