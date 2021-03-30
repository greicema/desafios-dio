let n = gets();
let aluno = [];

for (let i = 0; i < n; i++) {
    let nome = gets();
    let uniforme = gets();
    let espaco = uniforme.split(" ");
    let cor = espaco[0];
    let tamanho = espaco[1];

    aluno.push({
        nome,
        cor,
        tamanho
    });
}

aluno.sort((a, b) => (a.cor > b.cor) ? 1 :
    (a.cor === b.cor) ? (a.tamanho < b.tamanho) ? 1 :
    (a.cor === b.cor) && (a.tamanho === b.tamanho) ?
    (a.nome > b.nome) ? 1 : -1 : -1 : -1);

aluno.map(aluno => console.log(aluno.cor, aluno.tamanho, aluno.nome));