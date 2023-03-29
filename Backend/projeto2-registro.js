import { users } from "./database.js";

const clickRegistrar = document.getElementById('botaoRegistrar')


clickRegistrar.addEventListener('click', () => {

    const inputNome = document.getElementById('nome1')
    const nome = inputNome.value;

    const inputEmail = document.getElementById('email1')
    const email = inputEmail.value;

    const inputSenha = document.getElementById('senha1')
    const senha = inputSenha.value;

    addUser(nome, email, senha)

    console.log(users)


})

function addUser(nome, email, senha) {

    if (checarRegistro(nome, email, senha)) {

        const obj = { Nome: nome, Email: email, Senha: senha }
        users.push(obj)
    }

}

function checarRegistro(nome, email, senha) {
    if (nome == "" || email == "" || senha == "") {
        return alert('ERRO\nDADOS FALTANDO')

    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].Nome == nome || users[i].Email == email || users[i].Senha == senha) {
            return alert('ERRO\nDADOS JA EXISTENTES')
        }
    }
    return true
}
