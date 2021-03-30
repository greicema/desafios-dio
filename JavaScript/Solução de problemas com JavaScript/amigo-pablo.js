const removerItensRepetidos = (arrInscricoes) => {
    let naoRepetidos = [];
    let contAmigosPablo = [];
    naoRepetidos = arrInscricoes.filter((valorAtual, indexAtual, array) => indexAtual === array.indexOf(valorAtual));

    for (i in naoRepetidos) {
        let [nome, valor] = naoRepetidos[i].split(" ");
        contAmigosPablo.push({ nome: nome, valor: valor });
    }
    return contAmigosPablo;
}


const votaSim = (arrAmigos) => {
    let vSim = [];
    arrAmigos.map(item => {
        if (item.valor === 'SIM') vSim.push({ nome: item.nome, valor: item.valor });
    })
    return vSim;
}


const ordenaAmigosPablo = (arrAmigos) => {
    arrAmigos.sort((a, b) => a.valor < b.valor ? 1 : a.valor > b.valor ? -1 : a.nome > b.nome ? 1 : -1)
        .map(item => console.log(item.nome))
}

const ordenaVotacaoSim = (arrVSim) => {
    arrVSim.sort((a, b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : 0);
    console.log('Amigo do Pablo:' + '\n' + arrVSim[0].nome);
}

(function entradaDeDados(str) {
    let arrInscricoes = [];
    let amigosPablo = [];
    let amigosVotaramSim = [];;

    while (str != "FIM") {
        arrInscricoes.push(str);
        str = gets();
    }

    amigosPablo = removerItensRepetidos(arrInscricoes);

    amigosVotaramSim = votaSim(amigosPablo);

    ordenaAmigosPablo(amigosPablo);

    ordenaVotacaoSim(amigosVotaramSim);

})(gets());