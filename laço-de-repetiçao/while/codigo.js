let tentativas = 0
const usuario = prompt("Crie o usuario: ")
const senha = prompt("Crie a senha: ")

let confirmarUsuario = prompt("Confirme seu usuário: ")
let confirmeSenha = prompt("Confirme sua senha: ")


while (confirmarUsuario !== usuario || confirmeSenha !== senha){
    console.log("Usuário ou senha incorretos.")
    let confirmarUsuario = prompt("Confirme seu usuário: ")
    let confrmeSenha = prompt("Confirme sua senha: ")
}
console.log("Para fazer login, confime sua senha")


confirmeSenha = prompt("Confirme sua senha: ")
while((confirmeSenha !== senha)  && tentativas < 8){
    console.log("Senha incorreta, insira novamente.")
    confirmeSenha = prompt("Confirme sua senha: ")
    tentativas ++
    console.log("Acesso Bloqueado")

    let recuprarSenha = prompt("Esqueceu a senha? (Sim/Não): ").toLowerCase()
    if (recuperarSenha = "sim"){
        console.log("Sua senha é ",senha)
        confirmeSenha = prompt("Confirme sua senha: ")
    }
    
    else if (recuperarSenha == "não"){
        confirmeSenha = prompt("Confirme sua senha: ")
    }
}

console.log("Você está logado")

let sair = prompt("Deseja sair do login? (digite 'sair'): ")
if (sair = "sair"){
  console.log("Voce saiu da sua conta.")
}