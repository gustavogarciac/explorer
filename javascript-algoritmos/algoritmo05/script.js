let buyList = []
let numberItems = prompt("Quantos itens você precisa comprar?")
numberItems = Number(numberItems)

const container = document.querySelector(".container")

for (let c = 0; c < numberItems; c++) {
    buyList[c] = window.prompt(`Digite o ${c + 1}° item:`)
}

// for (let item of buyList) {
//     container.innerHTML += ` ${item},`
// }

container.innerHTML = `${buyList}`