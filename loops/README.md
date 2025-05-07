# JavaScript Learnings: Higher Order Loops, Iteration, and Execution Control

This repository contains my practice and understanding of important JavaScript concepts including higher-order array loops, different iteration techniques, `Map`, object behavior, scoping, and control flow using `break` and `continue`.

## 🚀 Concepts Covered

### ✅ Basic `for...of` Loop

- Used to iterate over iterable objects like arrays and strings.
```js
const arr = [1, 2, 4, 5, 6];
for (const num of arr) {
    console.log(num);
}
```
### ✅ Iterating Over Strings

- Each character in a string can be accessed using for...of.

```js
const greetings = "hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
```

### ✅ Working with Map

- A Map holds key-value pairs and remembers insertion order.

- Keys are unique.

## ⚠️ Note:
- You cannot use for...in on Map because it's not iterable that way.

### ✅ for...in Loop
- Used for enumerating object keys.

```js
const myObj = {
    game1: 'NFS',
    game2: 'GTA'
};
for (const key in myObj) {
    console.log(`${key} is named as ${myObj[key]}`);
}
```

- Also usable on arrays to get indices:

```js
const programming = ['js', 'py', 'rb'];
for (const key in programming) {
    console.log(key + ':-' + programming[key]);
}
```

### ✅ forEach() Loop
- A high-order function specifically for arrays.

```js
const coding = ['js', 'ruby', 'python', 'java', 'cpp'];

coding.forEach((item) => {
    console.log(item);
});
```

- You can also pass a named function:

```js
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);
```

- It provides access to item, index, and the entire array:

```js
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
```

### ✅ Traditional for Loop
- Useful when you need more control over iteration.

### ✅ Using break and continue
- break exits the loop entirely.

- continue skips the current iteration and moves to the next one.

---

📂 [Back to Main Repo](/README.md)