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

//console.log(typeof(myFunction))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "jashanpreet singh"

let anothername = myYoutubename
anothername = "sadaf qureshi"

console.log(anothername);
console.log(myYoutubename);



let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "jashan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





