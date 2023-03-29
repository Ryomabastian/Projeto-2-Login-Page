import { users } from "./database.js";


const clickLogar = document.getElementById('botaoLogar')

clickLogar.addEventListener('click', () => {

    const inputNome = document.getElementById('nome2')
    const nome2 = inputNome.value;

    const inputSenha = document.getElementById('senha2')
    const senha2 = inputSenha.value;

    checarLogin(nome2, senha2)

})

function checarLogin(nome2, senha2) {
    if (nome2 == "" || senha2 == "") {
        return alert('DADOS INVALIDOS')
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i].Nome == nome2 && users[i].Senha == senha2) {
            return alert('LOGADO')
        }
    }
}