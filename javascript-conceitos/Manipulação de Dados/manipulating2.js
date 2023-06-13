// let phrase = "Eu quero viver o amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore.toUpperCase())

// let phrase = "Eu quero viver!"
// console.log(phrase.includes("Amor"))

// let myArray = new Array("a", "b", "c")
// console.log(myArray)

// console.log(["a", "b", "c"].length)

// let word = "manipulação"
// console.log(Array.from(word))

//Adicionar item no fim
let techs = ["html", "css", "js"]

techs.push("react")
techs.unshift("react-native")
// techs.pop()
// techs.shift()
// console.log(techs.slice(0, 3))
// techs.splice(1, 2)

let index = techs.indexOf('js')
techs.splice(index, 1)


console.log(techs)