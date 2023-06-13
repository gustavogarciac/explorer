// É um dado estrutural
// Possui propriedades, atributos e funcionalidades.

const celular = {
    tamanho: "28px",
    cor: "preto",
    sistemaOperacional: "android",
    modelo: "Xiaomi Mi9",
    durabilidade: "Resistente",
    funcionalidade: function() {
        console.log('Sou capaz de muitas coisas.')
    }
}

console.log(celular)
console.log(celular.tamanho)
console.log(celular.modelo)
console.log(celular.funcionalidade)
celular.funcionalidade()