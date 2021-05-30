// const person = require('./person')
// common JS instead of ES6
const Person = require('./person')

// ES6 way, but isn't supported in Node.js yet
// import { something } from '/person'

const person1 = new Person('John Doe', 30);
const person2 = new Person('Jane Doe', 20);
const person3 = new Person('John Smith', 35);
person1.greeting()
person2.greeting()
person3.greeting()

// console.log(person)