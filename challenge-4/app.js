const num_A_Ser_Adivinhado = Math.floor(Math.random() * 11)
let nTentativas = 3;

while (nTentativas !== 0) {
  const tentativa = Number(prompt(`Adivinhe o número!!\nVocê tem ${nTentativas} tentativas`))
  if (tentativa === num_A_Ser_Adivinhado) {
    alert('Parabéns! Você acertou o número!!!')
    break
  } else {
    alert('Você errou o número. Tente novamente.')
    nTentativas--
  }
}

if (nTentativas === 0) {
  alert(`Acabaram as suas tentativas.\nO número a ser descoberto era ${num_A_Ser_Adivinhado}.`)
} else {
  alert('Se quiser jogar outra rodada, basta reiniciar o jogo.')
}
