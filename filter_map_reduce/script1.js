const myNumber = [1,2, 3, 5, 6, 7, 2, 10]

// const newNums = myNumber.map((num) => num + 10)


// chaining
const newNums = myNumber
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num>=30)

console.log(newNums);


//reduce method
// // reduce() method of Array instances executes a user-supplied "reducer" callback 
// function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place. 
// Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
// array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and currval: ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)//inital value

// console.log(myTotal);

// .reduce() using arrow function
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "DS course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);

