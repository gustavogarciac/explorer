function Student(name, age, height, isCsMajor) {
    this.name = name
    this.age = age
    this.height = height
    this.isCsMajor = isCsMajor
    this.walk = function() {
        console.log(`${name} está andando.`)
    }
}

const gustavo = new Student("Gustavo", 18, 1.77, true)
const joao = new Student("João", 23, 1.81, false)
const pietro = new Student("Pietro", 71, 1.99, false)
const pammela = new Student("Pammela", 34, 1.62, true)
const marcio = new Student("Marcio", 17, 1.59, true)
console.log(gustavo)
console.log(joao)
console.log(pietro)
console.log(pammela)
console.log(marcio)
console.log(gustavo.walk())

// Já existem diversas funções construtoras no JS.
let date = new Date("2023-12-06")
console.log(date)
