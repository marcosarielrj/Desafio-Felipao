function calcRanking(vitorias, derrotas) {
    return vitorias - derrotas
}

let ranking = calcRanking(85, 20)
let nivel = calcNivel(ranking)


function calcNivel(ranking) {

    let result 

    if (ranking <= 10) {
        nivel = "Ferro"

    }

    else if (ranking <= 20 && ranking > 10) {
        result = "Bronze"

    }

    else if (ranking <= 50 && ranking > 20) {
        result = "Prata"

    }

    else if (ranking <= 80 && ranking > 50) {
        result = "Ouro"

    }

    else if (ranking <= 90 && ranking > 80) {
        result = "Diamante"

    }

    else if (ranking <= 100 && ranking > 90) {
        result = "Lendário"

    }

    else if (ranking >= 101) {
        result = "Imortal"

    }return result
}

console.log("O Heroi tem saldo de " + ranking + " está no nível " + nivel)