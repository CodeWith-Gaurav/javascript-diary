//Problem-1. Log "Hello, JavaScript!" to the console in 3 different ways.
console.log("Hello World")
console.warn("Hello World")
console.error("Hello World")
console.info("Hello World")
console.table({ name: 'harsh', age: 25 })

//Problem-2. Perform 35 * 2 - (10 / 2) + 7 and log the result.
console.log(35 * 2 - (10 / 2) + 7);

//Problem-3. Log the data type of "123", 123, true, and null using typeof.
console.log(typeof 12)
console.log(typeof "123")
console.log(typeof true)
console.log(typeof null) //object
//typeof --works on datatag so by mistaken the same 
// typetag/datatag(i.e. 0) is given to null which is assigned to object

//Problem-4. Write a program that swaps the values of two variables.
let a = 12;
let b = 10;

let c;
// c = a;
// a = b;
// b = c;

// [a, b] = [b, a]

a = a + b
b = a - b
a = a - b
console.log(a, b);

//Problem-5. Use console.group() to organize logs into a group.
// console.group("Aaj ka hissab")
console.groupCollapsed("Aaj ka hissab");
console.log("daal chawal 50");
console.log("neembu pani 20");
console.log("daan bhi kiya 10");
console.groupEnd();

//Problem-6. Declare a const object, modify its properties, and log the updated object.
const obj = {
    name: "Gaurav",
    age: 23,
    email: "tes@gmail.com",
}
obj.age = 21 //constant se aap value change nhi kr skte but vakue update kr skte hai
console.log(obj)
// if don't want to update values also in object use ""Object.freeze(obj_name)""

//Problem-7. Convert "50" (string) into a number using 3 different methods.
console.log(Number("50"))
console.log(parseInt("50"))
console.log(typeof +"50")

//Problem-8. Check if "JavaScript" contains "Script" without using .includes().
let str = "JavaScript"
// console.log(str.includes("Script"))
// console.log(str.indexOf("Script"))
if (str.indexOf("Script") === -1) {
    console.log(false);

} else {
    console.log(true);

}

console.log(str.search("Script")) //gives index

//Problem-
//undefined:-
//null:-
//NaN:- mathematical invalid calculation give u Nan