/* COMO EU FIZ */
let a = 7;
let b = 94;

let c = a;
let d = b;

a = d;
b = c;

console.log(a);
console.log(b);

/* CORRETO */
a = 7;
b = 94;

let temp = a2;

a = b;
b = temp;

console.log(a);
console.log(b);

/* MAIS MODERNO */
[a, b] = [b,a]