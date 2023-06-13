// Control flow
// Segue linha a linha.

// if...else

// let temperature = 37.6
// if (temperature >= 37.5) {
//     console.log("FEBRE ALTA!")
// } else if (temperature >= 37){
//     console.log("Febre.")
// }


function Person(name, age, hasCNH) {
    this.name = name
    this.age = age
    this.hasCNH = hasCNH 
}

const gustavo = new Person("Gustavo", 18, true)
const canDrive = gustavo.age >= 18 && gustavo.hasCNH

if (canDrive) {
    console.log("Pode dirigir.")
} else {
    console.log("Incapaz de dirigir.")
}