// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 3, 23, 4, 10)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

//TimeStamps

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//to convert in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})








