// const students = [
//     {
//         name: "Julia",
//         noteOne: 10,
//         noteTwo: 7,
//         noteThree: 10,
//     },
//     {
//         name: "Gustavo",
//         noteOne: 9,
//         noteTwo: 5,
//         noteThree: 4,
//     },
//     {
//         name: "Pedro",
//         noteOne: 3,
//         noteTwo: 5,
//         noteThree: 1,
//     },
//     {
//         name: "Giovanni",
//         noteOne: 9,
//         noteTwo: 10,
//         noteThree: 10,
//     },
//     {
//         name: "Martha",
//         noteOne: 5,
//         noteTwo: 5,
//         noteThree: 4,
//     }
// ]

// function calculateMedia(noteOne, noteTwo, noteThree) {
//     let media = ((noteOne + noteTwo + noteThree) / 3).toFixed(1)
//     return media
// }

// function printMedia(mediaResult, studentName) {
//     if (mediaResult > 6) {
//         return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
//         Parabéns, você foi aprovado(a)`)
//     } else if (mediaResult > 5) {
//         return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
//         Caro aluno(a), você está EM RECUPERAÇÃO.`)
//     } else {
//         return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
//         Caro aluno(a), infelizmente você foi REPROVADO(A).`)
//     }
// }

// for (let student of students) {
//     let mediaResult = calculateMedia(student.noteOne, student.noteTwo, student.noteThree)
//     printMedia(mediaResult, student.name)
// }

const students = [
    {
        name: "Gustavo",
        noteOne: 7,
        noteTwo: 8,
        noteThree: 9,
    },
    {
        name: "Giovanni",
        noteOne: 10,
        noteTwo: 10,
        noteThree: 10,
    },
    {
        name: "Marcia",
        noteOne: 5,
        noteTwo: 9,
        noteThree: 4,
    },
    {
        name: "Henrique",
        noteOne: 2,
        noteTwo: 3,
        noteThree: 4,
    },
    {
        name: "Luciano",
        noteOne: 10,
        noteTwo: 9,
        noteThree: 10,
    },
    {
        name: "Martha",
        noteOne: 6,
        noteTwo: 6,
        noteThree: 6,
    }
];

function calculateMedia(noteOne, noteTwo, noteThree) {
    return ((noteOne + noteTwo + noteThree) / 3).toFixed(1)
}

function printMedia(noteOne, noteTwo, noteThree, studentName) {
    const media = calculateMedia(noteOne, noteTwo, noteThree)
    if (media > 6) {
        return `A média do aluno(a) ${studentName} é: ${media}.
        Parabéns, você foi APROVADO(A).`
    } else if (media > 5) {
        return `A média do aluno(a) ${studentName} é: ${media}
        Você está em RECUPERAÇÃO.`
    } else {
        return `A média do aluno(a) ${studentName} é: ${media}
        Você está REPROVADO(A)`
    }
}

for (let student of students) {
    alert(printMedia(student.noteOne, student.noteTwo, student.noteThree, student.name))
}