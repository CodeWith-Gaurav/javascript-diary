//Destructuring of an object

const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);

// in react we'll seee this kind of syntax
// const navbar = ({company}) => {

// }

// navbar(company = "Gaurav")

// {
//     "name": "Gaurav",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }

