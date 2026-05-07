const tempo = document.getElementById('tempo')
const diminuirBtn = document.getElementById('diminuir')
const aumentarBtn = document.getElementById('aumentar')
const valorAtualInput = document.getElementById('valor-atual')
const botaoZerar = document.getElementById('botao-zerar')
const botaoAdd = document.getElementById('botao-add')

let tempoRestante = 0
let valorAtual = 0


botaoZerar.onclick = () => {
    tempoRestante = 0
}

botaoAdd.onclick = () => {
    let valor = valorAtualInput.value
    tempoRestante += valor
}

diminuirBtn.addEventListener('click', () => {
    if (valorAtual - 10 <= 0) {
        valorAtual = 1
    } else {
        valorAtual -= 10
    }

    valorAtualInput.value = valorAtual
})

aumentarBtn.addEventListener('click', () => {
    valorAtual += 10

    valorAtualInput.value = valorAtual
})

setInterval(() => {
    if (tempoRestante <= 0) {
        tempoRestante = 0
    } else {
        tempo.innerText = `${tempoRestante} segs`
        tempoRestante = tempoRestante - 1

    }

}, 1000)