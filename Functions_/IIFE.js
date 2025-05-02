//Immediately Invoked Function Expressions (IIFE)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that is defined and executed immediately after its creation.
// Avoid global scope pollution 
// Create private variables

(function chai() {
    //named iife
    console.log(`DB CONNECTED`)
})();
// if we not place semicolon in the above function
// then below function will not run
// as IIFE functions don't no when to stop
// or terminate after getting invoked so to 
// stop them use ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')


