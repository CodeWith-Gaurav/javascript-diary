//High order array loops

const arr = [1, 2, 4, 5, 6]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello World"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}

// Maps-- also an object in js hold key-value pairs and remeber the order in which they are written
// unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);


for(const [key, value] of map){
    console.log(key, ':-', value);
    
}

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'GTA'
// }

// for(const [key, value] of myObj){
//     console.log(key, ':-', value); //myObj is not itertable
    
// }

const myObj = {
    game1 : 'NFS',
    game2 : 'GTA'
}

//for in loop
for(const key in myObj){
    // console.log(myObj[key]);
    console.log(`${key} is named as ${myObj[key]}`);
    
    
}

//for in for array
const programming = ['js', 'py', 'rb']
for(const key in programming){
    console.log(key + ':-' + programming[key]);
    
}
for(const key of programming){
    console.log(key);
    // console.log(programming[key]); undefined
}

// Maps are not iteratble we can't use for in for that


//forEach loop
const coding  = ['js', 'ruby', 'python', 'java', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

function printMe(item) {
    // console.log(item);
    
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCode = [
    {
        languageName: 'javascript',
        laguageExtension: '.js'
    },
    {
        languageName: 'python',
        laguageExtension: '.py'
    },
    {
        languageName: 'java',
        laguageExtension: '.java'
    }
]

myCode.forEach( (item) => {

    console.log(item.languageName);
    
})