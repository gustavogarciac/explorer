const screenOne = document.querySelector(".screen-1");
const screenTwo = document.querySelector(".screen-2");
const closedBiscuit = document.querySelector(".screen-1 img")
const sentenceWrapper = document.querySelector(".sentence-wrapper p")
const returnButton = document.querySelector(".screen-2 button")

//This function is responsible for changing between screen1 and screen2. I found it useful to use toggle.
function changeWindow() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}
//This function is responsible for generating a random number that will be used to generate the sentence.
function generateNumber() {
  return Math.round(Math.random() * 10)
}

//This function generates a sentence based on a random number that has been generated before.
function generateSentence(randomNumber) {
  switch (randomNumber) {
    case 0:
      printSentence(`Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`)
      break;
    case 1:
      printSentence(`Você nunca será velho demais para sonhar um novo sonho.`)
      break;
    case 2:
      printSentence(`Para certas coisas, não basta querer, é preciso batalhar.`)
      break;
    case 3:
      printSentence(`Que os dias bons se tornem rotina e os ruins se tornem raros.`)
      break;
    case 4:
      printSentence(`Seus medos morrerão de fome se você alimentar a sua motivação.`)
      break;
    case 5:
      printSentence(`Já pensou que você já superou muitas dificuldades até aqui?`)
      break;
    case 6:
      printSentence(`Você só vai vencer amanhã se não desistir hoje.`)
      break;
    case 7:
      printSentence(`Quando pensar em desistir, lembre-se porque começou. 🍀`)
      break;
    case 8:
      printSentence(`Comece onde você está. Use o que você tem. Faça o que puder.`)
      break;
    case 9:
      printSentence(`O corpo alcança o que a mente acredita.`)
      break;
    case 10:
      printSentence(`Dias de luz sempre retornam para quem iluminado está.`)
      break;
  }
}

//This function will change the sentence placeholder everytime a sentence is generated.
function printSentence(sentence) {
  sentenceWrapper.innerText = sentence
}

//This is the event area. The closedBiscuit is responsible for sending the random number to respective functions to generate the sentence and alternate the screens.
closedBiscuit.addEventListener("click", () => {
  let randomNumber = generateNumber()
  generateSentence(randomNumber)
  changeWindow()
})

//This event will cause the screen to change so that the user can see another sentence.
returnButton.addEventListener("click", () => { changeWindow() })