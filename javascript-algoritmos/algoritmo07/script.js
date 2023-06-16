let userName = prompt("Olá, me diga o seu nome.")
let userAnswer
let items = []

while (userAnswer != "3") {
    userAnswer = prompt(`Olá ${userName}! Digite a opção desejada.
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.`)
    switch (userAnswer) {
        case "1":
            let item = prompt("Insira o item que você gostaria de cadastrar.")
            items.push(item)
            break;
        case "2":
            if (items.length == 0) {
                alert("Não há nenhum item cadastrado.")
            } else {
                alert(items)
            }
            break;
        case "3":
            userAnswer = "3"
            break;
        default:
            alert("[ERRO] Tente novamente!")
    }   
}
