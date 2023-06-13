/* 
    Javascript é case-sensitive. Ou seja, "A" é diferente de "a".
*/

// Posso:
/* 
    - Iniciar com $ ou _
    - Iniciar com letras
    - Colocar acentos
    - Letras maíusculas e minúsculas fazem diferença.
*/

let alisson = "alisson"
let Alisson = "Alisson"
let Álisson = "Álisson"
let álisson = "álisson"

const checkIfItsEqual = alisson == Alisson
console.log(`a variável alisson é igual a variavel Alisson? ${checkIfItsEqual}`)