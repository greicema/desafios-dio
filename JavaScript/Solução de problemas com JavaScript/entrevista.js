let palavra = '';
let correcao;
let erros = 0;

while (true) {
    palavra = gets()

    if (!palavra || palavra === '' || palavra.length > 30) break;

    erros = -Math.floor(palavra.length / 2);
    correcao = [];

    for (let index = -1; index >= erros; index--) {
        palavra.slice(index) === palavra.slice(index * 2, index) && correcao.push(palavra.slice(0, index));
    }

    if (!correcao || correcao.length === 0) {
        console.log(palavra);
        continue;
    }

    for (const result of correcao.sort()) {
        console.log(result);
    }
}