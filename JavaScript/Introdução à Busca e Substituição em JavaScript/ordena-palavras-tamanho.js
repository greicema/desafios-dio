let n = parseInt(gets());
let palavras = [];
let entrada = '';
let saida = '';

if (n <= 50) {
    for (i = 0; i < n; i++) {
        entrada = gets();
        palavras = entrada.split(" ");
        palavras.sort((a, b) => b.length - a.length || a.localeCompare(b));
        saida = palavras.join(" ");
        console.log(saida);
    }
}