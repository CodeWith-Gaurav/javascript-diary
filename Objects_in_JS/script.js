/* 

    Define a JavaScript Object:
    1. Using an Object Literal
    2. Using an Object Constructor

*/
//object literals : An object literal is a list of name:value [key: value] pairs inside curly braces {}

const mySym = Symbol("key1")

const jsUser = {
    name: "Gaurav",
    "full name": "Gaurav Vashistha",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "gaurav@hotmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}


console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

//change object values
jsUser.email = "gaurav@yahoo.com"
// Object.freeze(jsUser) //freeze no changes will occur after this
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

