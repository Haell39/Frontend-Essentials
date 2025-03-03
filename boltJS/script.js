// Types

console.log(typeof 1)
console.log(typeof 2.4)
console.log(typeof 'bolt')
console.log(typeof true)

console.log(2 === 2)
console.log(1 / 0)
console.log('bolt' / 0)
console.log(0 / 0)

console.log(null == undefined)
console.log(null === undefined)

const car = {
    brand: 'BMW',
    model: 'M5',
    year: 2020
}

console.log([1, 2, 3, 'bolt', true])

console.log([2, 'bolt', [5, 7], {
    brand: 'BMW',
    model: 'M5',
    year: 2020
}])

new Date()
console.log(new Date().getFullYear())
console.log(new Date().getMilliseconds()) // etc..

let channel = 'bolt'
const PI = 3.14

const person = {
    name: 'bolt',
    age: 25,
    phone: 123456789

}

const person2 = {
    name: 'Ronaldo',
    age: 20,
    phone: 154823456
}

const people = [
    {
        name: 'bolt',
        age: 25,
        phone: 123456789
    },
    {
        name: 'Ronaldo',
        age: 20,
        phone: 154823456
    },
    {
        name: 'Messi',
        age: 30,
        phone: 154823456
    }
]

console.log(people[0].phone, people[1].name)

// Accessing the last element of an array

console.log(people[people.length - 1])

// Loops

let i = 0
while (i <= people.length - 1) {
    console.log(people[i].name)
    i++
}

for (let c = 0; c <= people.length - 1; c++) {
    console.log(people[c].age)
}

for (const person of people) {
    console.log(person.name)
}

//*** For in loop ***

for (const person of people) {
    for (const prop in person) {
        console.log('prop - value:', person[prop])
    }
}

// loop map

console.log(people.map(person => person.name))

// Estruturas de comparação

let note = 3.668

if (note <= 5) {
    console.log('Reprovado')
} else if (note <= 7) {
    console.log('Recuperação')
} else
    console.log('Aprovado')

// switch case

const num = 258

switch (num) {
    case 1:
        console.log('Number is 1')
        break
    case 258:
        console.log('Number is 2')
        break
    default:
        console.log('Number is not defined')
}

// arrow function

const sum = (a, b) => a + b
console.log(sum(78, 99))

// destructuring objects

const obj = {
    name: 'kaka',
    age: 22,
    phone: 778456789,
}

// sem a destruturação:

/*

const name = obj.name
const age = obj.age
const phone = obj.phone
*/


// com a destruturação:

/*
const {name, age, phone} = obj
*/

//Exemplo Real:

const pessoa = {
    nome: 'Rael',
    idade: 24,
    telefone: 81999654790
}
// ** Renomeando variáveis é possivel mudar o nome da variável:
const {nome: nomeCompleto, idade: anos, telefone: celular} = pessoa

console.log(nomeCompleto)
console.log(anos)

// ** Se uma propriedade não existir

const {nome, cidade = "Desconhecida"} = pessoa
console.log(cidade)

// ** Usando em funções

function saudar({nome, idade}) {
    console.log(`Olá, ${nome} de ${idade} anos!`)
}

saudar(pessoa)

// propriedade_computada

const nome2 = 'test_prop'

const obj2 = {
    [2 ** 5]: 'propriedade_computada',
    age: 25,
}

console.log(obj2[32])

// Template String

const notebook = 'AcerN'
// const variable = 'minha marca é ' + notebook
const variable = `minha marca é ${notebook}`
console.log(variable)

// more arrow functions

/*
function myFunction() {
    return console.log('Hello World')
}
*/

// arrow function

const myFunction = () => console.log('Hello World Exemplo')
myFunction()

// ES7

const cars = ['BMW', 'Audi', 'Ferrari', 'Porsche']

const find = cars.map(car => car === 'Audi')
console.log(find)

// Now with includes

const find2 = cars.includes('Porsche')
console.log(find2)

const find3 = 'Ferrari'.includes('r')
console.log(find3)

// exponencial

const square = (x) => x ** 2
console.log(square(9))

// ES8

// padStart e padEnd

const phoneNumber = '123456789'
console.log(phoneNumber.padStart(17, '9'))
console.log(phoneNumber.padEnd(17, '5'))

// Object.values e Object.entries

const obj3 = {
    user1: 'Nutella',
    user2: '25',
    user3: '123456789'
}

// before:

Object.keys(obj3).forEach((key, index) => {
    console.log(key, obj3[key])
})

// now:

Object.values(obj3).forEach(value => console.log(value)
)

Object.entries(obj3).forEach(value => console.log(value))

// callback functions

/*
function myCallback(callback) {
    setTimeout(() => {
        callback(null, 'Hello World')
    }, 1000)
}

myCallback(function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})
*/

// promise

/*
function myCallback() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('Feito')
        }, 1000)
    })
}

myCallback()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
*/

// async await

function myCallback() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('Feito')
        }, 1000)
    })
}

async function doTasks() {
    try {
        const result = await myCallback()
        const result2 = await myCallback()

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

doTasks()








