let notas = [100, 50, 20, 10, 5, 2, 1];
let nNotas = [0, 0, 0, 0, 0, 0, 0];

let quantia = parseInt(gets());

let resto = quantia;

while (resto >= 1) {

    nota = notas.findIndex(value => value <= resto);
    nNotas[nota] = Math.trunc(resto / notas[nota]);
    resto = resto % notas[nota];

}

console.log(quantia);
console.log(nNotas[0] + " nota(s) de R$ 100,00");
console.log(nNotas[1] + " nota(s) de R$ 50,00");
console.log(nNotas[2] + " nota(s) de R$ 20,00");
console.log(nNotas[3] + " nota(s) de R$ 10,00");
console.log(nNotas[4] + " nota(s) de R$ 5,00");
console.log(nNotas[5] + " nota(s) de R$ 2,00");
console.log(nNotas[6] + " nota(s) de R$ 1,00");