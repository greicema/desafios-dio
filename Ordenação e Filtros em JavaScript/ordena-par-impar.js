const linha = parseInt(gets());
let entra = [];

for (let i = 0; i < linha; i++) {
    entra = [...entra, gets()];
}

entra = entra.sort((a, b) => a - b);

const par = entra
    .filter(n => n % 2 === 0);

const impar = entra
    .filter(n => n % 2 === 1)
    .reverse();

const sai = [...par, ...impar];
sai.map((n) => console.log(n));