const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
/* isInteger averigua se o número é inteiro */

const avaliacao1 = 9.87
const avaliacao2 = 6.87

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
/* toFixed fixa o número a duas casas decimais */
console.log(media.toString())
/* toString transforma o valor em uma string */
/* Se o parâmetro fosse 2, transformaria em binario */
console.log(typeof media)