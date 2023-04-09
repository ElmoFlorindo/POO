/*
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

}


let p1 = new Person("Elmo", 31)
let p2 = new Person("Helena" , 2)

console.log(`P1 = ${p1.name} tem ${p1.age} anos!`)
console.log(`P2 = ${p2.name} tem ${p2.age} anos!`)

*/

/*
class Personagem {
    
    
    constructor(name, age, surname) {
        this.nome = name
        this.idade = age
        this.sobrenome = surname
    }


    get fullName() {
        return `${this.nome} ${this.sobrenome}`
    }
    get age(){
        return this.idade
    }

    set age(x){
        this.idade = x
    }

    qPassos = 0
    passos() {
        this.qPassos += 1

    }
}

let p1 = new Personagem("Elmo", 31, "Florindo")

p1.passos()
p1.age = 20

console.log(`${p1.fullName} tem ${p1.age} anos e deu ${p1.qPassos} passos!`)
*/

// herança 

class pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    fala() {
        console.log(`Meu nome é ${this.nome} e estou estudando POO!`)
    }
}

class estudante extends pessoa {
    constructor(nome, sobrenome, idade, id) {
        super(nome, sobrenome, idade)
        this.id = id
    }

    meuid() {
        console.log(`Meu id é ${this.id}`)
    }

}

let p1 = new estudante("Elmo", "Florindo", 31, 1)



p1.fala()
p1.meuid()

// metodos estáticos

class pessoa2 {

    static maos = 2

    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    fala() {
        console.log(`Meu nome é ${this.nome} e estou estudando POO! Eu tenho ${pessoa2.maos} maos!`)
    }
}

let p2 = new pessoa2("Elmo", "Florindo", 31)
pessoa2.maos = 1


p2.fala()


//Factory

class pessoa3 {

    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }


    fullName() {
        return `${this.nome} ${this.sobrenome}`
    }
}

function criaPessoa(nome, sobrenome, idade) {
    let p = new pessoa3(nome, sobrenome, idade)
    return p
}


let p3 = criaPessoa("Elmo", "florindo", 31)

console.log(`P3 = ${p3.fullName()} tem ${p3.idade} `)