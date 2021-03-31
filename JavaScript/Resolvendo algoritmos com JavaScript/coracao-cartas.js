let pilhasCartas = [];
let leitura = "";

do {
    leitura = gets();
    if (leitura !== "0") {
        let qtdPilha = parseInt(leitura);
        let pilha = [];

        for (let i = 0; i < qtdPilha; i++) {
            pilha.push(gets());
        }
        pilhasCartas.push(pilha);
    }
} while (leitura !== "0");

let resultados = [];
for (pilhas of pilhasCartas) {
    let resultadoJogo = [];
    for (pilha of pilhas) {
        let cartas = pilha.split(" ").map(num => parseInt(num));
        resultadoJogo.push(verificarRetirada(cartas));
    }
    resultados.push(resultadoJogo);
}

for (resultado of resultados) {
    let jogo = true;
    for (let i = 0; i < resultado.length; i++) {
        jogo = jogo && resultado[i];
    }
    if (jogo) {
        console.log(1);
    } else {
        console.log(0);
    }
}

function verificarRetirada(cartas) {
    let tipo1 = cartas[0];
    let tipo2 = retornarSoma(cartas, 1);
    let tipo3 = retornarSoma(cartas, 2);

    if (tipo1 % 3 === 0 || tipo2 % 3 === 0 || tipo3 % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

function retornarSoma(cartas, indiceMax) {
    let soma = 0;
    for (let i = 0; i <= indiceMax; i++) {
        soma += cartas[i];
    }
    return soma;
}