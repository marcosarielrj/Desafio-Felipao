class Heroi {

    constructor(nome, idade, tipo) {

        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }

    atacar() {

        let verifi = this.tipo
        let message

        switch (verifi) {

            case "mago": message = "usou magia"
            break

            case "guerreiro": message = "usou espada"
            break

            case "monge": message = "usou artes marciais"
            break

            case "ninja": message = "usou shuriken"
            break
        }
        
        console.log(`o ${this.tipo} atacou usando ${message}`)
    }
}
let Mago = new Heroi("joao", 15, "mago")
Mago.atacar()