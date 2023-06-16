// Captação dos dados
let studentName = window.prompt("Insira o nome do aluno:")
let studentNoteOne = Number(window.prompt("Insira a primeira nota do aluno:"))
let studentNoteTwo = Number(window.prompt("Insira a segunda nota do aluno:"))
let studentNoteThree = Number(window.prompt("Insira a terceira nota do aluno:"))

const containerResult = document.querySelector("#result-container")

//Captação da média
const media = (studentNoteOne + studentNoteTwo + studentNoteThree) / 3

//Função que imprime se o aluno aprovou ou reprovou.
function passedOrNot() {
    if (media <= 5) {
        return `Infelizmente você <span class="failed">reprovou</span>.`
    } else if (media < 7){
        return "Você está em recuperação."
    } else {
        return `Parabéns, você <span class="passed">passou.</span>`
    }
}

//Pequeno tratamento de erro:
if (studentNoteOne <= 10 && studentNoteOne >= 0 && studentNoteTwo <= 10 && studentNoteTwo >= 0 && studentNoteThree <= 10 && studentNoteThree >= 0 && studentName.length != 0) {
    containerResult.innerHTML = `Querido aluno(a) ${studentName} <br> <br> ${passedOrNot()} <br> A sua média final foi: ${media.toFixed(1)}`
} else {
    //Caso não tenha os dados corretos:
    containerResult.innerHTML = `Querido aluno(a), você informou os dados de modo <span class="failed">incorreto.</span> <br> Por favor, atualize a página.`
}