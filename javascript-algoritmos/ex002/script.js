const students = [
    {
        name: "Julia",
        noteOne: 10,
        noteTwo: 7,
        noteThree: 10,
    },
    {
        name: "Gustavo",
        noteOne: 9,
        noteTwo: 5,
        noteThree: 4,
    },
    {
        name: "Pedro",
        noteOne: 3,
        noteTwo: 5,
        noteThree: 1,
    },
    {
        name: "Giovanni",
        noteOne: 9,
        noteTwo: 10,
        noteThree: 10,
    },
    {
        name: "Martha",
        noteOne: 5,
        noteTwo: 5,
        noteThree: 4,
    }
]

function calculateMedia(noteOne, noteTwo, noteThree) {
    let media = ((noteOne + noteTwo + noteThree) / 3).toFixed(1)
    return media
}

function printMedia(mediaResult, studentName) {
    if (mediaResult > 6) {
        return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
        Parabéns, você foi aprovado(a)`)
    } else if (mediaResult > 5) {
        return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
        Caro aluno(a), você está EM RECUPERAÇÃO.`)
    } else {
        return alert(`A média do aluno(a) ${studentName} é: ${mediaResult}
        Caro aluno(a), infelizmente você foi REPROVADO(A).`)
    }
}

for (let student of students) {
    let mediaResult = calculateMedia(student.noteOne, student.noteTwo, student.noteThree)
    printMedia(mediaResult, student.name)
}