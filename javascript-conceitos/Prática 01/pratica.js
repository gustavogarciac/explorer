// 1) declade uma variável de nome weight.

// let weight

// 2) que tipo de dado é a variável acima?

// console.log(typeof weight)


// 3)
// let name = "Gustavo"
// let age = 18
// let stars = 4.7
// let isSubscribed = true

// 4)
// Object

// 4.1)
let student = {
    name: "Gustavo",
    age: 18,
    weight: 82.2,
    isSubscribed: true,
}
let student2 = {
    name: "Joana",
    age: 23,
    weight: 62.1,
    isSubscribed: true,
}

// 4.2)
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// 5)
let students = []
students = [
    student,
] 
console.log(students[0])
students.push(student2)
console.log(students)
console.log(students[1])