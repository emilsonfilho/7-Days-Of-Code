let deseja = prompt('Você deseja adicionar um item à sua lista de compras?')
let frutas = []
let laticinios = []
let congelados = []
let doces = []

while (deseja === "sim" || deseja === "s" || deseja === "Sim" || deseja === "S" || deseja === "SIM") {
  const item = prompt('Qual item você deseja adicionar?')
  const categoria = prompt(`A qual categoria ${item} pertence: frutas, laticínios, congelados ou doces?`)
  adicionarNoArray(item, categoria)
  
  deseja = prompt('Desejais adicionar algum outro item à lista de compras?')
}

if (deseja === "não" || deseja === "NÃO" || deseja === "n" || deseja === "N" || deseja === "nao" || deseja === "NAO") {
  removerItems()
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

function removerItems() {
 let listaDeCompras = []
  adicionarCadaElemento(frutas, listaDeCompras)
  adicionarCadaElemento(laticinios, listaDeCompras)
  adicionarCadaElemento(congelados, listaDeCompras)
  adicionarCadaElemento(doces, listaDeCompras)

  while (listaDeCompras.length !== 0) {
    let itemRemocao = prompt(`------- SUA LISTA DE COMPRAS -------\n${listaDeCompras.toString()}\n--------------\nDeseja remover qual item?`)
  
    while (itemRemocao.length === 0) {
      itemRemocao = prompt(`Você não diguitou nada.\n------- SUA LISTA DE COMPRAS -------\n${listaDeCompras.toString()}\n--------------\nDeseja remover qual item?`)
    }
  
    let index = listaDeCompras.indexOf(itemRemocao)
  
    while (index === -1) {
      itemRemocao = prompt(`Item não encontrado.\n------- SUA LISTA DE COMPRAS -------\n${listaDeCompras.toString()}\n--------------\nDeseja remover qual item?`)
      index = listaDeCompras.indexOf(itemRemocao)
    }
  
    listaDeCompras.splice(index, 1)
  } 
}

// arr = array a ser extraído os elementos
/// array = array a ser colocados os elementos
function adicionarCadaElemento(arr, array) {
    for (let item in arr) {
        array.push(arr[item])
    }
}

