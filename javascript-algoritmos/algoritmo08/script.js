let patients = [
    {
        name: "Gustavo",
        age: 18,
        weight: 82.2,
        height: 1.77,
    },
    {
        name: "Diego",
        age: 23,
        weight: 72.2,
        height: 1.87,
    },
    {
        name: "Mayk",
        age: 40,
        weight: 92.2,
        height: 1.97,
    },
    {
        name: "Alessandra",
        age: 77,
        weight: 57.9,
        height: 1.69,
    },
    {
        name: "Giovanni",
        age: 32,
        weight: 99.6,
        height: 1.83,
    }
]

//Getting the name
for (let patient of patients) {
    alert(`O paciente ${patient.name} tem ${patient.age} anos de idade. Pesa ${patient.weight}kg. e mede ${patient.height}m. de altura.`)
}

