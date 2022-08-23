console.log(7 / 0) /* Infinito */
console.log("10" / 2) /* Realiza o calculo (a não ser que o 10 tivesse casa decimal) */
console.log("3" + 2) /* Nesse caso ele concatena (string ganha no caso do mais, gerando 32) */
console.log("Show!" * 2) /* NaN (Not a Number) */
console.log(0.1 + 0.7) /* Imprecisão, resultado seria 0.799.. */
// console.log(10.toString()) /* Isso não funciona */
console.log(10.345.toFixed(2)) /* Isso funciona */