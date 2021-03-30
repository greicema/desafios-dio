palavrasUm = gets();

do {
    palavrasDois = gets();

    if (palavrasUm !== "") valorA = validaCaracter(palavrasUm);
    if (palavrasDois !== "") valorB = validaCaracter(palavrasDois);

    if (valorA == false && valorB == false) comparar(palavrasUm, palavrasDois);
    palavrasUm = gets();
} while (palavrasUm !== '');

function comparar(a, b) {
    let palavrasUm = a.split('');
    let palavrasDois = b.split('');
    let cont = 0;

    for (i in palavrasUm) {
        for (x in palavrasDois) {
            if (palavrasDois[x] != '' && palavrasUm[i] == palavrasDois[x]) cont++;
        }
    }
    console.log(cont);
}

function validaCaracter(caracter) {
    var regex = /^(?=(?:.*?[]){0})[]*$/;
    return (!regex.exec(caracter) ? false : true);
}