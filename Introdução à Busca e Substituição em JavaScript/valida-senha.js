function validaSenha(senha) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[_])\w{6,32}$/.test(senha)
}

let senha = "";

do {
    senha = gets();
    if (senha !== "") {
        let validou = validaSenha(senha);
        console.log("Senha " + (validou ? "valida." : "invalida."));
    }
} while (senha !== "");