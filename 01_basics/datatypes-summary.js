// Primitive

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const name = "jashan"
const score = 100
const isloggedIn = false 
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 34558354853845837458586997n


// Reference (Non primitive)

// Array,Objects,Functions


const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"jashan",
    age: 22
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof(bigNumber))