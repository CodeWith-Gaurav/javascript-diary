// what is function
// block of code jo app kabhi
// chalana chaoge toh woh run ho jayega if we call that function

function greet(){
    console.log("Hello World");
}

greet();
greet();

// why function: - jab bhi apko code 
// turant nhi chalana and saath hi saath apko us code ko reuse bhi krna hai aap function bnate hai

function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
    
}

sayMyName //it is reference but not executing it
sayMyName()

//num1 and num2 are parameters
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(14, 8) //14, 8 are arguements
// addTwoNumbers(3, "a")

// console.log("Result: ", result);

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(14, 8)
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Gaurav"))
console.log(loginUserMessage()) //undefined just logged in

function calculateCartPrice(val1, val2, ...num1){ // here ... is rest operator
    return num1
}

console.log(calculateCartPrice(2, 300, 200, 500)) //got an array

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})