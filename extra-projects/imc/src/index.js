const heightInput = document.querySelector("#patient-height")
const weightInput = document.querySelector("#patient-weight")
const calcButton = document.querySelector("#calc-button")
const resetButton = document.querySelector(`input[type="reset"]`)

//Evento para caso o usuário clique no botão calcular
calcButton.addEventListener('click', () => {
  let patientHeight = heightInput.value
  let patientWeight = weightInput.value

  if (patientHeight === "" | patientWeight === "") {
    return
  } else {
    if (patientHeight.includes(",") | patientWeight.includes(",")) {
      patientHeight = Number(patientHeight.replace(",", "."))
      patientWeight = Number(patientWeight.replace(",", "."))
    }
  
    console.log(patientHeight)
    console.log(patientWeight)
    calcIMC(patientWeight, patientHeight)
  }
})

//Evento para caso o usuário clique no botão limpar
resetButton.addEventListener("click", () => {
  clearTableColor()
  clearResultPlaceholder()
})

function calcIMC(weight, height) {
  let imc = (weight / height**2).toFixed(2)
  updateImcPlaceholder(imc)
  clearTableColor()
  updateTableColor(imc)
}

function updateImcPlaceholder(imc) {
  const imcPlaceholder = document.querySelector(".result-container strong")
  imcPlaceholder.innerText = imc
}

function clearResultPlaceholder() {
  const imcPlaceholder = document.querySelector(".result-container strong")
  imcPlaceholder.innerText = "--.--"
}

function updateTableColor(imc) {
  imc = Number(imc)

  switch (true) {
    case imc > 40:
      let section5 = document.querySelectorAll('#imc-app .imc-table tbody tr:nth-child(6) td')
    
      changeTdColor(section5)
      break;
    case imc > 30:
      let section4 = document.querySelectorAll('#imc-app .imc-table tbody tr:nth-child(5) td')
    
      changeTdColor(section4)
      break;
    case imc > 25:
      let section3 = document.querySelectorAll("#imc-app .imc-table tbody tr:nth-child(4) td")

      changeTdColor(section3)
      break;
    case imc > 18.5:
      let section2 = document.querySelectorAll("#imc-app .imc-table tbody tr:nth-child(3) td")

      changeTdColor(section2)
      break;
    default:
      let section1 = document.querySelectorAll("#imc-app .imc-table tbody tr:nth-child(2) td")

      changeTdColor(section1)
      break;
  }
}

function clearTableColor() {
  const tableData = document.querySelectorAll("#imc-app .imc-table tbody tr td")

  tableData.forEach(td => {
    td.style.backgroundColor = "#fff"
  })
}
function changeTdColor(section) {
  section.forEach(td => {
    td.style.backgroundColor = "lightgreen"
  })
}

//prevent form send:
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
})
