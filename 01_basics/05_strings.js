const name = "jashan"
const repoCount = 5 

//console.log(name + repoCount)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jashanpreet Singh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
//console.log(newString);

const anotherString = gameName.slice(-16,4);
//console.log(anotherString);

const newStringOne = "   Jashan  ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://jashan.com/jashan%20dhaliwal"

console.log(url.replace('%20','-'))
console.log(url.includes('red'))

console.log(gameName.split('-'))





