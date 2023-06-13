function sayMyName(myFunction) {
    myFunction()
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)