let tentativas = 0
const usuario = prompt("Crie o usuario: ")
const senha = prompt("Crie a senha: ")

let confirmarUsuario = prompt("Confirme seu usu�rio: ")
let confirmeSenha = prompt("Confirme sua senha: ")


while (confirmarUsuario !== usuario || confirmeSenha !== senha){
    console.log("Usu�rio ou senha incorretos.")
    let confirmarUsuario = prompt("Confirme seu usu�rio: ")
    let confrmeSenha = prompt("Confirme sua senha: ")
}
console.log("Para fazer login, confime sua senha")


confirmeSenha = prompt("Confirme sua senha: ")
while((confirmeSenha !== senha)  && tentativas < 8){
    console.log("Senha incorreta, insira novamente.")
    confirmeSenha = prompt("Confirme sua senha: ")
    tentativas ++
    console.log("Acesso Bloqueado")

    let recuprarSenha = prompt("Esqueceu a senha? (Sim/N�o): ").toLowerCase()
    if (recuperarSenha = "sim"){
        console.log("Sua senha � ",senha)
        confirmeSenha = prompt("Confirme sua senha: ")
    }
    
    else if (recuperarSenha == "n�o"){
        confirmeSenha = prompt("Confirme sua senha: ")
    }
}

console.log("Voc� est� logado")

let sair = prompt("Deseja sair do login? (digite 'sair'): ")
if (sair = "sair"){
  console.log("Voce saiu da sua conta.")
}