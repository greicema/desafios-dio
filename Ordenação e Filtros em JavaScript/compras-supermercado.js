let n = parseInt(gets());

for (let i = 0; i < n; i++) {
    let nProdutos = (gets()).split(" ");
    let lista = new Set(nProdutos);
    let nLista = [...lista].sort().toString().replace(/,/g, ' ');
    console.log(nLista);
};