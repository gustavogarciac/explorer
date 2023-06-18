import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g > g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g > g:nth-child(2) path")



function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }
  const ccLogoImage = document.querySelector(".cc-logo span:nth-child(2) img")

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  if (type == "visa" || type == "mastercard") {
    ccLogoImage.setAttribute('src', `cc-${type}.svg`)
  }
}

globalThis.setCardType = setCardType

//Filtering Inputs throughout IMask
const securityCode = document.querySelector("#security-code");
const securityCodePattern = {
  mask: "0000"
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
let minimumYear = Number(String(new Date().getFullYear()).slice(2));
let maximumYear = Number(String(new Date().getFullYear()).slice(2)) + 10;
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: minimumYear,
      to: maximumYear,
    }
  }
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

const cardNumber = document.querySelector("#card-number");
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex:/^4\d{0,15}/,
      cardtype: "visa"
    },
    {
      mask: "0000 0000 0000 0000",
      regex:/(^5[1-5]\d{0,2})|(^22[2-9]\d)|(^2[3-7]\d{0,12})/,
      cardtype: "mastercard"
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default"
    },
  ],
  dispatch: function(appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "");

    const foundMask = dynamicMasked.compiledMasks.find(function(item) {
      
      return number.match(item.regex)
    })
    console.log(foundMask)

    return foundMask
  },
}

const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

//Adicionando event listener ao botão de adicionar cartão.
const addCardButton = document.querySelector("#add-card");
addCardButton.addEventListener('click', () => {
  console.log("Cartão adicionado.")
})

//Prevenindo submit do form
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
})

//Atualizando dado de nome no cartão
const cardHolder = document.querySelector("#card-holder");
cardHolder.addEventListener('input', () => {
  const ccHolder = document.querySelector(".cc-holder .value")
  ccHolder.innerText = cardHolder.value.length === 0 ? "SEU NOME" : cardHolder.value 
})

securityCodeMasked.on('accept', () => {
  updateSecurityCode(securityCodeMasked.value)
})

function updateSecurityCode(code) {
  const ccSecurity = document.querySelector('.cc-security .value');

  ccSecurity.innerText = code.length === 0 ? "123" : code
}

cardNumberMasked.on('accept', () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype
  setCardType(cardType)
  updateCardNumber(cardNumberMasked.value)
})

function updateCardNumber(number) {
  const ccNumber = document.querySelector('.cc-number')
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number;
}

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})

function updateExpirationDate(date) {
  const ccExpDate = document.querySelector(".cc-extra .value")
  ccExpDate.innerText = date.length === 0 ? "12/32" : date
}





