let n = parseInt(gets());

for (let i = 1; i <= n; i++) {

    let naoAltera = 0;
    let clientes = parseInt(gets());
    let entra = (gets()).split(" ").map((entra) => entra);

    let fila = entra.map((entra) => entra).sort(ordena);

    function ordena(a, b) {
        return (b - a)
    }

    for (let j = 0; j < clientes; j++) {
        if (entra[j] === fila[j]) {
            naoAltera++;
        };
    };

    console.log(naoAltera);
};