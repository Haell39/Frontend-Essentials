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
















