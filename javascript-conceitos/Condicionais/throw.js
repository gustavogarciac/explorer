// throw

function sayMyName(name = '') {
    if (name === "") {
        throw "[ERRO] ~~ Nome é necessário"
    }

    console.log(name)
}
//try...catch

try {
    sayMyName("Hello")
} catch(e) {
    console.log(e)
}

console.log("Após a função de erro")