do {
  var area = prompt('Qual área você deseja seguir?\n[1] - Front-End\n[2] - Back-End')
  
  verificacaoArea(area)
  addTec()
} while (inicio.length === 0) 

function verificacaoArea(area) {
  switch (area) {
    case "1":
      mostrarTecnologias('Front-Ender', 'React', 'Vue')
      break;
    case "2":
      mostrarTecnologias('Back-Ender', 'C#', 'Java')
      break;
    default:
      area = prompt('Você não digitou nada ainda.\n[1] - Front-End\n[2] - Back-End')
      verificacaoArea(area)
  }
}

function mostrarTecnologias(profissional, primeiraTec, segundaTec) {
  var tec = prompt(`Ah, então você quer ser um ${profissional}, hein?\nVocê tem duas opções para seguir:\n[1] - ${primeiraTec}\n[2] - ${segundaTec}`)
  mostrarMensagemPersonalizada(profissional, tec)
}

function mostrarMensagemPersonalizada(prof, tec) {
  if (prof === 'Front-Ender' && tec === '1') {
    alert('React, boa!')
    futuro()
  } else if (prof === 'Front-Ender' && tec === '2') {
    alert('Vue é uma ótima escolha!')
    futuro()
  } else if (prof === 'Back-Ender' && tec === '1') {
    alert('C# pode parecer chato, mas é ótima!')
    futuro()
  } else {
    alert('Linguagem odiada, alguma vezes amada. Esse é o Java.')
    futuro()
  }
}

function futuro() {
  var escolha = prompt('Você deseja:\n[1] - Continuar se especializando na área\n[2] - Se desenvolver para ser FullStack')
  if (escolha === '1') {
    alert('Continue estudando e você será um ótimo profissional')
  } else if (escolha === '2') {
    alert('Ah, entendi! \'Cê quer ser o(a) mestre das tecnologias, não é?')
  } else {
    console.log('Resposta Inválida.')
    futuro()
  }
}

function addTec() {
  do {
    var isNovo = prompt('Tem alguma tecnologia a mais que deseja aprender?\n[1] - Sim\n[2] - Não')
  } while (isNovo.length === 0)
  laco(isNovo)
}

function laco(res) {
  switch (res) {
    case '1':
      var linguagem = prompt('Qual?')
      verificacaoLinguagem(linguagem)
      break;
    case '2':
      alert('Com certeza você obterá muito sucesso na sua jornada')
      break;
    default:
      alert('Resposta Inválida')
      addTec()
  }
}

function verificacaoLinguagem(l) {
  do {
    l = prompt('Você não digitou uma resposta.\nQual?')
  } while(l.length === 0)
  alert(`${l} adicionada com sucesso.`)
  addTec()
}
