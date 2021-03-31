let leituras = [];
let dado = "";

do {
    dado = gets();
    if (dado !== ".") {
        leituras.push(dado);
    }
} while (dado !== ".");

let novasLeituras = [];

for (leitura of leituras) {
    let arrayLeitura = leitura.split(" ");
    let novasLinhas = [];
    let palavra = [];
    let palavraTrocada = [];
    let trocas = [];
    let contadorTroca = 0;

    for (let i = 0; i < arrayLeitura.length; i++) {
        let subs = arrayLeitura[i];
        palavra.push(subs);
        if (subs.length > 2) {
            let novaPalavra = arrayLeitura[i].substring(0, 1).concat(".");
            palavraTrocada.push(novaPalavra);
            let novaLinha = arrayLeitura.map(linha => {
                if (linha === arrayLeitura[i]) {
                    contadorTroca++;
                    return novaPalavra;
                }
                return linha;
            });
            novasLinhas.push(novaLinha.join(" "));
            trocas.push(contadorTroca);
        }
    }

    let menorPalavra = 9999999;
    let indice = 0;

    for (novaLinha in novasLinhas) {
        if (novasLinhas[novaLinha].length < menorPalavra) {
            menorPalavra = novasLinhas[novaLinha].length;
            indice = parseInt(novaLinha);
        }
    }

    console.log();
    console.log(novasLinhas[indice]);
    console.log(trocas[indice]);
    console.log(palavraTrocada[indice], " = ", palavra[indice]);
}