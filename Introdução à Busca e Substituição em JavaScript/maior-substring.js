let nSubstring = [];
let palavra = "";

do {
    palavra = gets();
    if (palavra !== "") {
        nSubstring.push(palavra);
    }
} while (palavra !== "");

function achaSubstring(palavra1, palavra2) {
    let cont = [];
    for (let i = 0; i <= palavra1.length; i++) {
        for (let j = 0; j < palavra1.length; j++) {
            if (palavra2.includes(palavra1.substring(i, j))) {
                cont.push(palavra1.substring(i, j).length);
            }
        }
    }

    return Math.max(...cont);
}

for (let i = 0; i < nSubstring.length; i += 2) {
    console.log(achaSubstring(nSubstring[i], nSubstring[(i + 1)]));
}