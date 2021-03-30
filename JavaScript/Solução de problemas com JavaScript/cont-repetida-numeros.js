let nNumeros = gets();
let numeros = [];

for (i = 0; i < nNumeros; i++) {
    numeros[i] = gets();
}
contagemRepetida(numeros);

function contagemRepetida(num) {

    naoRepetidos = num.sort((a, b) => a - b).filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });

    var cont = 0;
    for (i = 0; i < naoRepetidos.length; i++) {
        var valor = naoRepetidos[i];

        for (j = 0; j < num.length; j++) {
            if (naoRepetidos[i] === num[j]) cont++;
        }

        console.log(valor + ' aparece ' + cont + ' vez(es)');
        cont = 0;
    }
}