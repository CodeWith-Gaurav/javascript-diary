# 📚 `this`, Arrow Functions, Function Scope, and Execution Context in JavaScript

Today, I explored key JavaScript concepts around **function behavior**, **scoping**, **execution context**, and how the `this` keyword behaves in different situations. I also examined differences between function declarations and function expressions, and how JavaScript handles hoisting.

---

## ✅ Topics Covered

### 🔹 Objects & the `this` Keyword

```js
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
    }
}
```
- Inside object methods, this refers to the object itself.
- This makes this.username work as expected within welcomeMessage.

### Global Context of this

```js
console.log(this); // Outputs: {} in Node.js
```

- In the Node.js environment, this in the global scope refers to {}.
- In the browser, this refers to the global window object.

### 📦 this Inside Regular Functions

```js
function chai() {
    let username = 'hitesh';
    console.log(this.username); // undefined
}
```

- this inside regular functions does not refer to the function's own scope.
- Instead, it refers to the global object, or undefined in strict mode.

### 🏹 Arrow Functions & this

```js
const chai = () => {
    let username = 'hitesh'
    console.log(this.username); // undefined
}
```

- Arrow functions do not have their own this.
- They lexically inherit this from the parent scope.


### ➕ Arrow Functions – Explicit vs Implicit Return

```js
const addTwo = (num1, num2) => num1 + num2; // Implicit
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit
}
```

- Implicit returns are cleaner for single-expression functions.
- Use parentheses to return objects:
```js
const addTwo = (num1, num2) => ({ username: "Hitesh" });
```

### 🧠 Scope in JavaScript

- Block Scope with let and const
```js
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:", a); // 10
}
console.log(a); // Error
console.log(b); // Error
console.log(c); // 30 (var is function/global scoped)
```

- let and const are block scoped – not accessible outside the block.
- var is function or globally scoped, which can lead to unintended behavior.

### 🧩 Function Scope and Lexical Environment

```js
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username); // has access
    }
    two();
    // console.log(website); // ❌ Error: not in scope
}
```

- Nested functions have access to parent variables (lexical scoping).
- But parent functions cannot access child variables.

### ❗ Scope in Conditionals

```js
if(true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website); // ✅
    }
    // console.log(website); // ❌ Error
}
console.log(username); // ❌ Error
```
- Each block (if, function, etc.) creates a new scope.
- Variables declared with const/let inside a block are not accessible outside.

### ⏱️ Function Declarations vs Expressions (Hoisting)

## Function Declaration (Hoisted)
```js
addone(5); // ✅ Works
function addone(num){
    return num + 1;
}
```

- Function declarations are hoisted – they can be called before they are defined.

- Function Expression (Not Hoisted)
```js

addTwo(5); // ❌ Error: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
```
- Function expressions are not hoisted.
- Cannot call them before initialization.

## 💡 Key Takeaways

- this behaves differently in object methods, regular functions, and arrow functions.
- Arrow functions do not have their own this, arguments, or super.
- Understanding scopes (block, function, global) is crucial to avoid reference errors.
- Hoisting only applies to function declarations, not expressions.
- Nested functions can access outer scope variables (lexical scoping), but not vice versa.
- Use let and const to prevent variable leaks outside block scope.

---

📂 [Back to Main Repo](/README.md)