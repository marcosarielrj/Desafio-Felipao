function calcRanking (vitorias, derrotas){
    return vitorias - derrotas
}

let ranking = calcRanking(30, 10)
let nivel


if (ranking <= 10) {
    nivel = "Ferro"

}

else if (ranking <= 20 && ranking > 10) {
    nivel = "Bronze"

}

else if (ranking <= 50 && ranking > 20) {
    nivel = "Prata"

}

else if (ranking <= 80 && ranking > 50) {
    nivel = "Ouro"

}

else if (ranking <= 90 && ranking > 80) {
    nivel = "Diamante"

}

else if (ranking <= 100 && ranking > 90) {
    nivel = "Lendário"

}

else if (ranking >= 101) {
    nivel = "Imortal"

}

console.log("O Heroi tem saldo de " +ranking + " está no nível " + nivel)