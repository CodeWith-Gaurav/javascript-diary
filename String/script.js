const name = "gaurav"
const repoCount = 50

// console.log(name + " " + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//String is an object not an array
const gameName = new String("Gaur-avv")

console.log(gameName[2])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(3, 6)
console.log(anotherString);


const newString1 = "   gaurav   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://gaurav.com/gaurav%20choudhary"

console.log(url.replace('%20', '-'))

console.log(gameName.split('-'));



