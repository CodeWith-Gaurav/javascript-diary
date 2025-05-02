// let a = 300

// if (true){
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("INNER: ", a);
    
// }

// console.log(a);
// // console.log(b);
// console.log(c); //print 30


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();
}

// one()


if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website); ERORRS
    
}

// console.log(username); ERRORS

// ++++++++++ interesting example [concept] +++++++++++++++

addone(5) //it will execute return 6
function addone(num){
    return num + 1
}


addTwo(5) // this will not execute as it is executed before initialization
//Expressions
const addTwo = function(num){
    return num + 2
}


