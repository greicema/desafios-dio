nAlunos = gets();

while (nAlunos > 0) {
    alunos = [];

    for (i = 1; i <= nAlunos; i++) {
        aux = gets().split(' ');
        alunos.push({ nome: aux[0], valor: parseInt(aux[1]) });
    }

    contValorFicha = 0;
    valorFicha = alunos[0].valor;

    while ((alunoGrupo = alunos.length) > 1) {
        (valorFicha % 2 == 1) ?
        contValorFicha = (contValorFicha + valorFicha) % alunoGrupo:
            contValorFicha = (contValorFicha - (valorFicha % alunoGrupo)) % alunoGrupo;

        if (contValorFicha < 0) contValorFicha = alunoGrupo + contValorFicha;
        valorFicha = alunos[contValorFicha].valor;
        alunos.splice(contValorFicha, 1);

        if (valorFicha % 2 == 1) contValorFicha--;
        alunoGrupo--;
    }

    console.log("Vencedor(a): " + alunos[0].nome);

    nAlunos = gets();
}