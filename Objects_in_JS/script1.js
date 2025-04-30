// object declaration using constructer

const tinderUser = new Object() //singelton object

tinderUser.id = "1223abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Vashistha"
        } 
    }
}

// console.log(regularUser.fullname.userfullname);

//combine objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "b", 4: "b"}

// const obj3 = { obj1, obj2 } not used this way

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//when database se objects / values ati hai tab ye use krenge

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));








