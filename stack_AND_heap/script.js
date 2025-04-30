let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "gaurav@hotmail.com"

console.log(userOne.email);
console.log(userTwo.email);
