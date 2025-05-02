// if statement- syntax
// if(condition){
//     //code
// }

//basic operators for comparision
// <, >, <=, >=, ==[checking equality], !=, ===[check type as well],!==

const isUserLoggedIn = true
// const temperature = 41
const temperature = 51

if(temperature<50){
    // console.log("less than 50")
} else{
    // console.log("temperature is greater than 40");
}

const score = 200

if(score>100){
    const power = "fly"
//     console.log(`User power: ${power}`);
    
 }
// console.log(`User power: ${power}`);//can't be executed as power var scope is not defined outside of if

const balance = 1000

//implicit scope of if
if(balance > 500) console.log("test");
