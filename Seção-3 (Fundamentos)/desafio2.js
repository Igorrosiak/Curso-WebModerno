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
let a2 = 7;
let b2 = 94;

let temp = a2;

a2 = b2;
b2 = temp;

console.log(a);
console.log(b);
