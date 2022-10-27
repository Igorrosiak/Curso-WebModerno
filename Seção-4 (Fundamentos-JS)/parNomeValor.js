// par nome/valor
const saudacao = 'opa' // contexto léxico

function exec(){
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)