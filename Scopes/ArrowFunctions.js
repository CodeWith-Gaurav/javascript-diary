const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        //console.log(this); //this current context/value ki baat krta hai
        
    }
}

// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()

//console.log(this); //when we are in node environment this will refer to an empty object  
// but when we run this in console[browser] it will
// give Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// why?
// because previously javascript ko run krne ka ek hi tarika
// hota tha i.e browser ke andar engine hota tha wo execute krta tha js ko
// but abhi humne wo engine browser se nikala
// and usko different names diye like node
// so today engine is standalone
// so browser ke andar global object hai Window object
// and humare node envi me ye hai {} object

// function chai() {
//     let username = 'hitesh'
//     console.log(this.username); //undefined..'this' not working in func...only in objects
    
// }
// chai()

const chai =  () => {
    let username = 'hitesh'
    console.log(this.username); //undefined
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //Explcit return
// }

//Implicit return 
// const addTwo = (num1, num2) => num1 + num2


//to return objects
const addTwo = (num1, num2) => ({username: "Hitesh"})




console.log(addTwo(3, 4))

// const myArr = [2, 4, 5, 6, 9]

// myArr.forEach(() => {})