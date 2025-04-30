// array

const myArray = [0, 1, 3, 4, 5, 6]
console.log(myArray[3]);

const myArray2 = new Array(1, 2, 3)
console.log(myArray2[2]);


//Array methods

// myArray.push(6)
// myArray.push(9)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);

// myArray.unshift(3)
// console.log(myArray);

// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(7));
// console.log(myArray.indexOf(7));

// const newArr = myArray.join()

// console.log(typeof newArr);
// console.log(myArray);

// slice, splice

console.log("A ", myArray);
const myNewArr1 = myArray.slice(1, 3)
console.log(myNewArr1);
console.log("B ", myArray);

const myNewArr2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myNewArr2);








