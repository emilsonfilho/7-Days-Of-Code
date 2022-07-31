const body = document.querySelector('body')

let nome = prompt('Bem-vindo(@), qual seu nome?')

while(nome.length === 0) {
  switch (nome.length) {
  case 0:
    nome = prompt('Vimos que não digitaste um nome. Por favor, digite seu nome.')
    break;
  case 1: 
  case 2:
    nome = prompt('Pelo comprimento da sua resposta, vimos que não parecia ser um nome válido. \n Por favor, digite seu nome.')
    break;
  default:
  }
}
console.log('Verificar nome: OK')

let idade = prompt('Qual sua idade?')
verificar(idade)
console.log('Verificar idade: OK')

let linguagem = prompt('Qual linguagem de programação você está estudando?')
verificar(linguagem)
console.log('Verificar linguagem: OK')

createMessage()

function verificar(variavel) {
  while(variavel.length === 0) {
    variavel = prompt('Você não digitou nada. \n Nos dê uma resposta')
  }
}

function createMessage() {
  const p = document.createElement('p')
  p.innerHTML = `<div class="box"><p>&#x1F44B; Olá, ${nome}! Você tem ${idade} anos de idade e está aprendendo ${linguagem}.</p></div>`
  body.appendChild(p)
}

export { linguagem }
export { body }