const escola = "Cod3r"

console.log(escola.charAt(4)) 
/* Letra conforme o indice (começa do 0)*/

console.log(escola.charAt(5))
/* Nesse caso não existe letra no indice 5, resultado = nulo, sem erro no sistema */

console.log(escola.indexOf('d'))
/* Vai buscar em qual indice está a letra d */

console.log(escola.substring(1))
/* Vai buscar todo o texto a partir do indice 1 */

console.log(escola.substring(0, 3))
/* Vai buscar todo o texto do indice 0 ao indice 3 (sem incluir o indice 3) */

console.log('Escola '.concat(escola).concat("!"))
/* Concatena textos */

console.log(escola.replace(3, 'e'))
/* Troca o valor do indice pelo texto após virgula */

console.log('Ana, Maria, Pedro'.split(','))
/* Gera um array, usando como separados o parametro passado */