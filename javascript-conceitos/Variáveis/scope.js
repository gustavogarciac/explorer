// Determinar visibilidade de uma variável.


// Global = código inteiro
// Local = dentro do block statement


console.log("Existe x antes do bloco? ", x)

{
    var x = 0 // Sofre hoisting
}


console.log("Existe x antes do bloco? ", false)

{
    let x = 0 // Incapaz de hoisting
}