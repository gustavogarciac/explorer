//Lista de pacientes:
let patients = [
    {
        name: "Gustavo",
        age: 18,
        weight: 82.2,
        height: 1.77,
        gender: "M",
    },
    {
        name: "Diego",
        age: 23,
        weight: 72.2,
        height: 1.87,
        gender: "M",
    },
    {
        name: "Mayk",
        age: 40,
        weight: 92.2,
        height: 1.97,
        gender: "M",
    },
    {
        name: "Alessandra",
        age: 77,
        weight: 37.9,
        height: 1.69,
        gender: "F",
    },
    {
        name: "Giovanni",
        age: 32,
        weight: 99.6,
        height: 1.83,
        gender: "M",
    }
]

//Declarando função que irá calcular o imc do paciente
function IMC(height, weight) {
    return (weight / height**2).toFixed(1)
}

function printIMC(patient) {
    let imc = IMC(patient.height, patient.weight)
    if (patient.gender == "F") {
        return `A paciente ${patient.name} possui o IMC de ${imc}.`
    } else {
        return `O paciente ${patient.name} possui o IMC de ${imc}.`
    }
}

//Executando a função para cada paciente.
for (let patient of patients) {
    const imcMessage = printIMC(patient)
    alert(imcMessage)
}

//Declarando função para calcular o IMC:
// function calcIMC() {
//     for (let patient of patients) {
//         //Declarando variável para calcular imc
//         let imc = patient.weight / (patient.height**2)
//         if (patient.gender == "F") {
//             alert(`A paciente ${patient.name} possui o IMC de ${imc.toFixed(1)}.`)
//         } else {
//             alert(`O paciente ${patient.name} possui o IMC de ${imc.toFixed(1)}`)
//         }
//     }
// }

//Invocando a função
// calcIMC()
