// let str = "apple";
// let ans = str.slice(0, 4); //slice value from 0 to (4-1)=3-->appl
// console.log(ans)

// // `` -- template literals/template strings
// //Template Strings allow multiline strings
// //Template String provide an easy way to interpolate variables and expressions into strings.

// let str1 = `hey my age is ${12 + 2}`;
// console.log(str1)
// // The method is called string interpolation.
// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)

// //split
// let str2 = "Hello ji kaise hooo!!"
// console.log(str2.split('ai'));

//replace
// let str3 = "Hello Ji kaise ho";
// //original string change nhi hogi 
// //ek nyi copy of string bnegi usme replace hoga and pehle occurence ko change krega bs
// let ans2 = str3.replace('i', 'y');
// console.log(ans2);
// console.log(str3)
// let ans3 = str3.replaceAll('i', 'y');
// console.log(ans3);

// //includes
// let str4 = "Hello, World!"
// console.log(str4.includes('Hell'));

//switch
// switch(value){
//     case value:
//         //code
//         break;
//     case value:
//         //code
//         break;
//     default:
//         //code
// }
// switch (3) {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default:
//         console.log('Default');
// }


//for loop
for(let i = 12; i<32; i++){
    console.log("Hey");
}

//dynamic loop
let arr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i<arr.length; i++){
    console.log("Hey");
}

//while loop
let i = 1;
while(i<12){
    console.log(i);
    i++;
}

//do-while loop

do{
    console.log(i);
}
while(i<20);

//break loop ko rokta hai
//continue loop ko skip krta hai

for(let i=12; i<23; i++){
    if(i==16) continue;
    console.log(i);
}