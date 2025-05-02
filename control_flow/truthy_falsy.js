// const userEmail = "g@email.com"
const userEmail = []

if(userEmail) {
    console.log("Got the user email");
    
} else{
    console.log("Don't have user mail");
    
}

// falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN[not a number]

// truthy values
// "0", 'false', " ", [] (empty array), {} (object), function(){}

//to check array is empty or not
if(userEmail.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}
//to check object is empty or not
// Object.keys(emptyObj)---> this will create an array and for arrya we know how to check emptiness
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 13



//console.log(val1); //print 5 according to first
// console.log(val1); // 10
// console.log(val1); // 13


