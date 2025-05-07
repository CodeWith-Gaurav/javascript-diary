# 🧠 Advanced JavaScript Learnings

This repository documents in-depth concepts of **Advanced JavaScript**, focusing on high-order array methods, scoping, `this` behavior, iteration techniques, and functional patterns like `map`, `filter`, and `reduce`.

---

## 🗂 Topics Covered

### ✅ `forEach()` Method
- Executes a provided function once for each array element.
- **Does not return a value** (always `undefined`).
- Cannot use `break` or `continue`.

```js
const coding = ['js', 'ruby', 'python'];
coding.forEach((item) => console.log(item)); // prints each language
```

### ✅ filter() Method
- Returns a new array with elements that pass the test condition.

- Returns a value, unlike forEach.
```js
const myNums = [1, 2, 3, 6, 7];
const newNums = myNums.filter(num => num > 5); // [6, 7]
```

- Equivalent using forEach:

```js

const result = [];
myNums.forEach(num => {
  if (num > 5) result.push(num);
});
```

### ✅ map() Method
- Returns a new array by transforming each element.

- Does not mutate the original array.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

### ✅ reduce() Method
- Reduces array to a single value.

- Takes a callback with accumulator and currentValue.

- Useful for calculating totals.

- 🛒 Shopping Cart Example

```js
const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "python course", price: 999 }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
```

---

📂 [Back to Main Repo](/README.md)