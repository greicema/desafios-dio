let texto = gets();
const italico = /\_(.*?)\_/gim;
const negrito = /\*(.*?)\*/gim;

function parseMarkdown(text) {
    const html = texto.replace(italico, "<i>$1</i>").replace(negrito, "<b>$1</b>");

    return html.trim();
}

let cont = 0;

do {
    console.log(parseMarkdown(texto));
    texto = gets();
    cont++;
} while (cont < 60);