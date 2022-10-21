let valor /* não inicializada */
console.log(valor) /* undefined */
console.log(valor2) /* !ERRO! is not defined */

valor = null //ausência de valor
console.log(valor)/* null */

console.log(valor.toString()) /* ERRO! */

const produto = {}
console.log(produto.preco) /* undefined */

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)