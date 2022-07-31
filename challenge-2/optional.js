import { linguagem } from './app.js'
import { body } from './app.js'

let gostando = prompt(`Você está gostando de estudar ${linguagem}?\nDigite 1 para SIM\nDigite 2 para NÃO`)

while (gostando !== "1" && gostando !== "2") {
  gostando = prompt(`Número inválido.\nVocê está gostando de estudar ${linguagem}?\nDigite 1 para SIM\nDigite 2 para NÃO`)
}

switch (gostando) {
  case "1":
    createDiv(`Que bom! Continue estudando e você terá muito sucesso!`)
    break;
  case "2":
    createDiv(`Ahh... que pena. Já tentou aprender outras linguagens?`)
  default:
}

function createDiv(msg) {
  const div = document.createElement('div')
  const para = document.createElement('p')
  para.innerText = msg
  div.appendChild(para)
  div.setAttribute('class', 'box')
  body.appendChild(div)
}