const tempo = document.getElementById('tempo')

let tempoRestante = 1000000000

setInterval(() => {

    tempo.innerText = `${tempoRestante} segs`
    tempoRestante = tempoRestante - 1
}, 1000)