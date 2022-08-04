let deseja = prompt('Você deseja adicionar um item à sua lista de compras?')
let frutas = []
let laticinios = []
let congelados = []
let doces = []

while (deseja === "sim" || deseja === "s" || deseja === "Sim" || deseja === "S" || deseja === "SIM") {
  const item = prompt('Qual item você deseja adicionar?')
  const categoria = prompt(`A qual categoria ${item} pertence: frutas, laticínios, congelados ou doces?`)
  alert(categoria)
  adicionarNoArray(item, categoria)
  
  deseja = prompt('Desejais adicionar algum outro item à lista de compras?')
}

if (deseja === "não" || deseja === "NÃO" || deseja === "n" || deseja === "N" || deseja === "nao" || deseja === "NAO") {
  alert(`OK. Então aqui está a sua lista:\nFrutas: ${frutas.toString()}.\nLaticinios: ${laticinios.toString()}.\nCongelados: ${congelados.toString()}.\nDoces: ${doces.toString()}.`)
} else {
  alert('Você digitou uma opção inválida.\nResponda com "sim" ou "não".')
}

function adicionarNoArray(item, categoria) {
  switch (categoria) {
    case 'Frutas':
    case 'frutas':
    case 'FRUTAS':
      frutas.push(item)
      break;
    case 'laticínios':
    case 'laticinios':
    case 'Laticínios':
    case 'Laticinios':
    case 'LATICÍNIOS':
    case 'LATICINIOS':
      laticinios.push(item)
      break
    case 'CONGELADOS':
    case 'Congelados':
    case 'congelados':
      congelados.push(item)
      break
    case 'DOCES':
    case 'Doces':
    case 'doces':
      doces.push(item)
      break
    default:
      alert('Você não selecionou nenhuma das categorias citadas. Certifique-se de que digitou corretamente.')
  }
}
