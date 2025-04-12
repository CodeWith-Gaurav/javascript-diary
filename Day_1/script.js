//Data-Types in JS [two types]
//      -- Primitive
//              -Number (10, 10.5,10.5555 etc) [range-> 2^53-1]
//              -String ('a', "Gaurav", 'this is string')
//              -Boolean (true, false)
//              -undefined
//              -null
//              -Symbol
//              -BigInt (store large numbers)

//      -- reference
//              -Array
//              -Object
//              -Function

var a = 10
var b = "Gaurav is cute"
var c = true

console.log(a, b, c)

var num1 = prompt('Enter num 1')
var num2 = prompt('Enter num 2')
console.log(num1+num2) // return num1num2 
//as prompt store everything in form of string
// to resolve this we use typecasting

var num1Real = Number(num1)
var num2Real = Number(num2)
var num1 = Number(prompt('Enter num 1'))
var num2 = Number(prompt('Enter num 2'))

console.log(num1+num2)

//undefined
var d
console.log(d)

// //BigInt
var h = 100000000000n
console.log(h)

//HOISTING
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//Using a let variable before it is declared will result in a ReferenceError.
//Using a const variable before it is declared, is a syntax error, so the code will simply not run.


var a = 10 //declaration + initialization in one step

console.log(a) //print 10
//but what if we print a first
//var a  declaration at top 
console.log(a)

var a = 10

console.log(a)

//conditionals
var a = 10;
var b = 9
if (a < b) {
    console.log('Yes')
} else {
    console.log('No')
}

//Q: ask a user his age and check if he is adult or not or can vote or not

var age = Number(prompt("Enter your age"))
if(age>=18){
    console.log("You are allowed to vote")
}else{
    console.log("You are not adult, not allowed to vote")
}

// ==: Compare krta hai values ko sirf
var a = 10
var b = '10'

if (a == b) {
    console.log('True')// return true
} else {
    console.log('False')
}

// ===: Compare values and types as well
if (a === b) {
    console.log('True')
} else {
    console.log('False') //return false
}

//Q: ask a user his bijli ke units and if it is greater than 100 units then calculate on the basis of 10 rs per unit 
// if more than 50 units then calculate on the basis of 8 rs per unit and 
// if less calculate on 5 rs per unit

var unit = Number(prompt('Enter Units'))
var bill

if (unit >= 100) {
    bill = unit * 10
} else if (unit >= 50) {
    bill = unit * 8

} else {
    bill *= 5
}

console.log(bill)

//ternary operators
var n = 18
console.log(n>10? 'hello' : 'not hello') 

//loops
while(10>5){
    console.log('Hello')
}
