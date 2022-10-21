let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
/* ! seria diferente */
/* !! seria o originial em boolean */

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!Nan)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || 0 || 'epa' || 123))
/* ele retorna o epa, pois é o 1º verdadeiro */

let nome = ''
console.log(nome || 'desconhecido')
/* ele retorna desconhecido, pois é o 1º verdadeiro */