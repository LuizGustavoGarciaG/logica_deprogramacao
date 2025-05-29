//Primeiro
/*let nome =prompt("Digite seu nome: ")
while(nome !== "luiz" ){
    nome = prompt("Digite seu nome:")
}
*/
//Segundo
/*let senha = Number(prompt("Digite sua senha: "))
while(senha !== 1234){
    senha = prompt("Digite sua senha: ")
}
*/
//Terceiro
/*
let senha = Number(prompt("Digite sua senha:"))
let confirmacao = Number (prompt("Confirme sua senha:"))
while(senha !== 1234 || confirmacao !== 1234){
    senha = Number(prompt("Digite sua senha:"))
    confirmacao = Number (prompt("Confirme sua senha:"))
}
*/
//Quarto
/*let usuario = prompt("Digite seu usuário: ");
let senha = Number(prompt("Digite sua senha: "));
while (usuario !== "admin" || senha !== 1234) {
  usuario = prompt("Digite seu usuário: ");
  senha = prompt("Digite sua senha: ");
}
*/
//Quinto
/*
usuario = prompt("Digite seu usuário: ");
senha = Number(prompt("Digite sua senha: "));
while (usuario !== "admin" || senha != 1234) {
  usuario = prompt("Login:");
  senha = prompt("Senha:");
  if (usuario !== "admin" || senha != 1234) {
    console.log("Usuário ou senha incorretos.");
  }
}
*/
//Sexto
/*let tentativas = 0;
usuario = "";
senha = "";
while (tentativas < 3 && (usuario !== "luiz" || senha !== "1234")) {
  usuario = prompt("Login:");
  senha = prompt("Senha:");
  if (usuario !== "admin" || senha !== "1234") {
    console.log("Usuário ou senha incorretos.");
    tentativas++;
  }
}
if (tentativas === 3) {
  console.log("Acesso bloqueado.");
}
*/
/*
// Sétimo
let novoUsuario = prompt("Cadastre um usuario:");
let novaSenha = prompt("Cadastre uma senha:");

usuario = "";
senha = "";
while (usuario !== novoUsuario || senha !== novaSenha) {
  usuario = prompt("Login:");
  senha = prompt("Senha:");
}
*/
/*
// Oitavo
user = "";
pass = "";
while (user !== novoUser || pass !== novaSenha) {
  user = prompt("Login:");
  pass = prompt("Senha:");
  let resposta = prompt("Esqueceu a senha? (sim/nao)");
  if (resposta === "sim") {
    console.log("Senha salva: " + novaSenha);
  }
}
*/
/*
// Nono
user = "";
pass = "";
while (user !== novoUser || pass !== novaSenha) {
  user = prompt("Login:");
  pass = prompt("Senha:");
}
console.log("Você está logado!");

let comando = "";
while (comando !== "sair") {
  comando = prompt("Digite 'sair' para fazer logout:");
}
console.log("Você saiu do sistema.");
*/
