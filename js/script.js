var mensagens = [
    "Quem com ferro fere, vai ter que pagar a indenização",
    "Quem espera, demora mais para chegar",
    "Hoje é seu dia da sorte: pegue outro biscoito!",
    "Um dia é da caça, o outro também",
    "Depois da tempestade, vem a enchente",
    "Um raio nunca cai duas vezes no mesmo lugar",
    "Caçar com gato é melhor quando existem muitos ratos",
    "Melhor morrer do que perder a vida",
    "Vini, vidi et vinci",
    "Nunca acredite num agroboy"
]

function mostrar(){
    var numero = Math.floor(Math.random()*10)
    document.getElementById("texto").innerHTML = mensagens[numero]
}