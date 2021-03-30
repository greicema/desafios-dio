let entries = parseInt(gets());
let list = [];
let exit = 0;

const findPrefix = (fix, strg) => strg.startsWith(fix);

do {
    for (let counter = 0; counter < entries; counter++) {
        let str = gets();
        list.map(word => {

            if (word.length < str.length) {
                findPrefix(word, str) && exit++;
            } else {
                findPrefix(str, word) && exit++;
            }
        });
        list.push(str);
    }

    if (exit > 0) {
        console.log("Conjunto Ruim");
    } else {
        console.log("Conjunto Bom");
    }

    exit = 0;
    list = [];
    entries = parseInt(gets());

}
while (entries !== 0);